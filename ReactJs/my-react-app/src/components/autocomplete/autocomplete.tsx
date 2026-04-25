import  { useState } from 'react';
import './autocomplete.css';

const Autocomplete = ({data}) => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([])

  const onSearchInput = (e) => {
    const searchValue = e.target.value;
    setInputValue(searchValue);
    if (searchValue.length > 0) {
      const results = data.filter((fruit) => fruit.name.toLowerCase().includes(searchValue.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const onClickItem = (fruit) => {
    setInputValue(fruit.name);
    setSearchResults([]);
  };

  // Hide results if input matches a fruit exactly
  // const shouldShowResults = inputValue && searchResults.length > 0 && !searchResults.some(fruit => fruit.name.toLowerCase() === inputValue.toLowerCase());

  return (
    <div>
      <input type="text" placeholder='Search...' onChange={onSearchInput} value={inputValue}/>
      <ul>
        {searchResults.map((fruit, index) => (
          <li key={index} onClick={() => onClickItem(fruit)} className='list-item'>{fruit.name} <span>{fruit.color}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
