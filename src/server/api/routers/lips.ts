import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const lipsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        prompt: z.string().min(1),
      })
    )
    .mutation(({ ctx, input }) => {
      ctx.prisma.lip.create({
        data: {
          userId: input.userId,
          prompt: input.prompt,
        },
      });
    }),
});