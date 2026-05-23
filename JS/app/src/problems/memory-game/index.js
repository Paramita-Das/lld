import { mountProblemScaffold } from '../../shared/problem-loader.js';

export async function renderMemoryGame(container) {
  await mountProblemScaffold(container, { baseUrl: import.meta.url });
}
