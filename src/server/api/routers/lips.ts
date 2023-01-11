import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const lipsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        message: z.string().min(1).max(128),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.lip.create({
        data: {
          userId: input.userId,
          message: input.message,
        },
      });
    }),

  delete: protectedProcedure
    .input(
      z.object({
        lipId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.lip.delete({
        where: {
          id: input.lipId,
        },
      });
    }),

  updateResponse: protectedProcedure
    .input(
      z.object({
        lipId: z.string(),
        response: z.string().min(1).max(128),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.lip.update({
        where: {
          id: input.lipId,
        },
        data: {
          response: input.response,
        },
      });
    }),
});
