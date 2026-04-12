let fruits = [];

// Fetch fruits data from fruits.json using async/await
async function loadFruits() {
  try {
    const response = await fetch('fruits.json');
    const data = await response.json();
    fruits = data; // Direct assignment, not debounced
  } catch (error) {
    console.error('Error loading fruits data:', error);
  }
}

loadFruits();

const onSearchInput = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    // Use <ul> for suggestions
    const suggestions = document.getElementById('suggestions-list');
    suggestions.innerHTML = '';

    if (searchTerm) {
        const filteredFruits = fruits.filter(fruit => fruit.name.toLowerCase().includes(searchTerm));
        filteredFruits.forEach(fruit => {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = fruit.name;
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.addEventListener('click', () => {
                document.getElementById('autocomplete-input').value = fruit.name;
                suggestions.innerHTML = '';
            });
            suggestions.appendChild(suggestionItem);
        });
    }
}

// Debounce utility function
function debounce(func, delay = 300) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Debounced version of onSearchInput
const debouncedOnSearchInput = debounce(onSearchInput, 1000);

// Attach debounced function to input (if not already in HTML)
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('autocomplete-input');
  if (input) {
    input.removeEventListener('input', onSearchInput); // Remove direct binding if present
    input.addEventListener('input', debouncedOnSearchInput);
  }
});