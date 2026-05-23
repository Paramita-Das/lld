import { mountProblemScaffold } from '../../shared/problem-loader.js';

export async function renderMultiSelectDropdown(container) {
  await mountProblemScaffold(container, { baseUrl: import.meta.url });
}
