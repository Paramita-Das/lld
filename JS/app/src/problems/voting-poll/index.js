import { mountProblemScaffold } from '../../shared/problem-loader.js';

export async function renderVotingPoll(container) {
  await mountProblemScaffold(container, { baseUrl: import.meta.url });
}
