import { mountProblemScaffold } from '../../shared/problem-loader.js';

export async function renderPagination(container) {
  await mountProblemScaffold(container, { baseUrl: import.meta.url });
}
