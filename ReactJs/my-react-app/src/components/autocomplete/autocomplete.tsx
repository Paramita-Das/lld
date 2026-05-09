import type { ChangeEvent } from 'react';
import { useState } from 'react';
import './autocomplete.css';

interface AutocompleteItem {
  name: string;
  color: string;
}

interface AutocompleteProps {
  data: AutocompleteItem[];
}

const Autocomplete = ({ data }: AutocompleteProps) => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<AutocompleteItem[]>([]);

  const onSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setInputValue(searchValue);

    if (searchValue.length > 0) {
      const results = data.filter((fruit) =>
        fruit.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const onClickItem = (fruit: AutocompleteItem) => {
    setInputValue(fruit.name);
    setSearchResults([]);
  };

  // Hide results if input matches a fruit exactly
  // const shouldShowResults = inputValue && searchResults.length > 0 && !searchResults.some(fruit => fruit.name.toLowerCase() === inputValue.toLowerCase());

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={onSearchInput} value={inputValue} />
      <ul>
        {searchResults.map((fruit) => (
          <li key={fruit.name} onClick={() => onClickItem(fruit)} className="list-item">
            {fruit.name} <span>{fruit.color}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
