import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  get: publicProcedure
    .input(
      z.object({
        username: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({
        where: {
          username: input.username,
        },
      });
    }),
});
