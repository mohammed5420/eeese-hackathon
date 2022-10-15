import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { JobStatus } from "@prisma/client";

export const signupRouter = router({
  createSignup: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        bio: z.string(),
        type: z.string(),
        socialMediaLinks: z
          .object({ name: z.string(), url: z.string().url() })
          .array()
          .nullish(),
        location: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (input.type === "USER") {
        const person = await ctx.prisma.person.create({
          data: {
            bio: input.bio,
            userId: input.userId,
            location: input.location,
          },
        });

        await ctx.prisma.user.update({
          where: {
            id: input.userId,
          },
          data: {
            isNew: 0,
            role: "USER",
          },
        });
        if (input.socialMediaLinks) {
          const socialLinksTransaction = input.socialMediaLinks.map((link) => {
            return ctx.prisma.social_links.create({
              data: {
                name: link.name,
                url: link.url,
                personId: person.id,
              },
            });
          });

          await ctx.prisma.$transaction(socialLinksTransaction);
        }

        return person;
      }

      //if the user was company
      const company = await ctx.prisma.company.create({
        data: {
          bio: input.bio,
          location: input.location,
          userId: input.userId,
        },
      });

      await ctx.prisma.user.update({
        where: {
          id: input.userId,
        },
        data: {
          isNew: 0,
          role: "COMPANY",
        },
      });

      if (input.socialMediaLinks) {
        const socialLinksTransaction = input.socialMediaLinks.map((link) => {
          return ctx.prisma.social_links.create({
            data: {
              name: link.name,
              url: link.url,
              companyId: company.id,
            },
          });
        });

        await ctx.prisma.$transaction(socialLinksTransaction);
      }

      return company;
    }),
});
