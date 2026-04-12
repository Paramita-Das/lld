import React from 'react';

interface Fruit {
  name: string;
  color: string;
}

interface AutocompleteProps {
  data: Fruit[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ data }) => {
  const [searchItem, setSearchItem] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<Fruit[]>([]);

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchItem(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    const results = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={onSearchInput}
        placeholder="Search fruits..."
      />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.name} <span style={{color: '#888'}}>({item.color})</span></li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
