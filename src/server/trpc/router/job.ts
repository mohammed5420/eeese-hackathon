import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { JobStatus } from "@prisma/client";
import { TRPCError } from "@trpc/server";

export const jobRouter = router({
  createJob: publicProcedure
    .input(
      z.object({
        companyId: z.string(),
        jobDescription: z.string(),
        title: z.string(),
        jobType: z.enum(["FULLTIME", "PARTTIME"]),
        jobRequirements: z.string().array(),
        salary: z.number(),
        jobOption: z.enum(["REMOTE", "ONSITE"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const company = await ctx.prisma.company.findFirst({
        where: {
          userId: input.companyId,
        },
      });
      if(!company) throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Company Not found"
      })

      const job = await ctx.prisma.job.create({
        data: {
          title: input.title,
          companyId: company.id,
          jobDescription: input.jobDescription,
          jobOption: input.jobOption,
          salary: input.salary,
          jobType: input.jobType,
          Status: JobStatus.ACTIVE,
        },
      });

      const jobRequirementsTransaction = input.jobRequirements.map((tag) => {
        return ctx.prisma.jobRequirements.create({
          data: {
            jobId: job.id,
            text: tag,
          },
        });
      });

      await ctx.prisma.$transaction(jobRequirementsTransaction);
    }),
  getAllJobs: publicProcedure.query(async ({ ctx }) => {
    const jobs = await ctx.prisma.job.findMany({include: {
      company: true
    }});
    return jobs;
  }),
  deleteJob: publicProcedure
    .input(
      z.object({
        jobId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const deletedJob = await ctx.prisma.job.delete({
        where: {
          id: input.jobId,
        },
      });

      return deletedJob;
    }),
  updateJob: publicProcedure
    .input(
      z.object({
        jobId: z.number(),
        jobDescription: z.string(),
        title: z.string(),
        jobType: z.enum(["FULLTIME", "PARTTIME"]),
        jobRequirements: z.string().array(),
        salary: z.number(),
        jobOption: z.enum(["REMOTE", "ONSITE"]),
        status: z.enum(["ACTIVE", "INACTIVE"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updatedJob = await ctx.prisma.job.update({
        where: {
          id: input.jobId,
        },
        data: {
          title: input.title,
          jobDescription: input.jobDescription,
          jobOption: input.jobOption,
          salary: input.salary,
          jobType: input.jobType,
          Status: input.status,
        },
      });

      return updatedJob;
    }),
});
