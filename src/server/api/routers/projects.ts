import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const projectsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany();
  }),
  getNew: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }),
  getSpotlight: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.spotlight.findFirst({
      include: {
        project: true
      }
    });
  })
});