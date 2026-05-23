import { mountProblemScaffold } from '../../shared/problem-loader.js';

export async function renderCircleGame(container) {
  await mountProblemScaffold(container, { baseUrl: import.meta.url });
}
