import { mountProblemScaffold } from '../../shared/problem-loader.js';

export async function renderSnakeAndLadder(container) {
  await mountProblemScaffold(container, { baseUrl: import.meta.url });
}
