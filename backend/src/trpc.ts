import { initTRPC } from '@trpc/server';
import _ from 'lodash';
import { z } from 'zod';

const ideas = _.times(100, (i) => ({
  nick: `cool-idea-nick-${i}`,
  name: `Idea ${i}`,
  description: `Description of idea ${i}...`,
  text: _.times(100, (j) => `<p>Text paragraf ${j} of idea ${i}...</p>`).join(''),
}));

export const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return {
      ideas: ideas.map((idea) => _.pick(idea, ['nick', 'name', 'description'])),
    };
  }),
  getIdea: trpc.procedure
    .input(
      z.object({
        ideaNick: z.string(),
      }),
    )
    .query(({ input }) => {
      const idea = ideas.find((i) => i.nick === input.ideaNick);

      // if (!idea) throw new Error(`Idea ${input.ideaNick} not found`);

      return { idea: idea || null };
    }),
});

export type TrpcRouter = typeof trpcRouter;
