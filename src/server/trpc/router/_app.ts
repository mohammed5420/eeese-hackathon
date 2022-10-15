// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { jobRouter } from "./job";
import { signupRouter } from "./signup";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  job: jobRouter,
  signup: signupRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
