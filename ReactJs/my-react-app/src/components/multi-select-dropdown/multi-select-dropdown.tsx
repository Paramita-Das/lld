import { useState } from "react";

interface MultiSelectDropdownProps {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (opts: string[]) => void;
}

const MultiSelectDropdown = ({ options, selectedOptions, setSelectedOptions }: MultiSelectDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <button onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? selectedOptions.join(", ") : "Select"}
      </button>
      {isDropdownOpen && (
        <div style={{ border: '1px solid #ccc', padding: 8, marginTop: 4, minWidth: 120 }}>
          {options.map((item, index) => (
            <div key={index} style={{ cursor: 'pointer', padding: 4 }} onClick={() => handleOptionClick(item)}>
              <input type="checkbox" checked={selectedOptions.includes(item)} readOnly /> {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;