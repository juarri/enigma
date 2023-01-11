import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  get: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  getByUsername: publicProcedure
    .input(
      z.object({
        username: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          username: input.username,
        },
      });
    }),

  getLips: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        select: {
          lips: {
            orderBy: {
              updatedAt: "desc",
            },
          },
        },
      });
    }),

  getPendingLips: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        select: {
          lips: {
            where: {
              response: {
                equals: null,
              },
            },
            orderBy: {
              updatedAt: "asc",
            },
          },
        },
      });
    }),

  getRespondedLips: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        select: {
          lips: {
            where: {
              response: {
                not: {
                  equals: null,
                },
              },
            },
            orderBy: {
              updatedAt: "desc",
            },
          },
        },
      });
    }),
});
