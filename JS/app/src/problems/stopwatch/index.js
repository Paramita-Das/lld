import { mountProblemScaffold } from '../../shared/problem-loader.js';

export async function renderStopwatch(container) {
  await mountProblemScaffold(container, { baseUrl: import.meta.url });
}
