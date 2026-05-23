import { createElement } from '../../shared/dom.js';
import { mountProblemScaffold } from '../../shared/problem-loader.js';
import { fruits } from './data.js';

function renderList(items, suggestions, input) {
  suggestions.replaceChildren();

  if (!items.length) {
    const emptyState = createElement('li', 'suggestion-empty', 'No matching fruit found.');
    suggestions.append(emptyState);
    return;
  }

  items.forEach((fruit) => {
    const listItem = createElement('li', 'suggestion-item');
    const name = createElement('span', 'suggestion-name', fruit.name);
    const color = createElement('span', 'suggestion-meta', fruit.color);

    listItem.append(name, color);
    listItem.addEventListener('click', () => {
      input.value = fruit.name;
      suggestions.replaceChildren();
    });

    suggestions.append(listItem);
  });
}

export async function renderAutocomplete(container) {
  await mountProblemScaffold(container, {
    baseUrl: import.meta.url,
    onMount: (root) => {
      const input = root.querySelector('[data-autocomplete-input]');
      const suggestions = root.querySelector('[data-suggestions-list]');

      input.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();

        if (!searchTerm) {
          suggestions.replaceChildren();
          return;
        }

        const results = fruits.filter((fruit) => fruit.name.toLowerCase().includes(searchTerm));
        renderList(results, suggestions, input);
      });
    },
  });
}
