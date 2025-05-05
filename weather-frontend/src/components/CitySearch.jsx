import { useState } from 'react';
import cities from '../assets/city.list.json';

function CitySearch({ onSelect }) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length < 2) {
      setSuggestions([]);
      return;
    }

    const matches = cities
      .filter((city) =>
        city.name.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 10);

    setSuggestions(matches);
  };

  const handleSelect = (city) => {
    setInput(`${city.name}, ${city.country}`);
    setSuggestions([]);
    onSelect(city);
  };

  return (
    <div className="position-relative">
      <input
        type="text"
        className="form-control"
        placeholder="Enter city"
        value={input}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul
          className="list-group position-absolute w-100 zindex-dropdown"
          style={{ maxHeight: '200px', overflowY: 'scroll' }}
        >
          {suggestions.map((city) => (
            <li
              key={city.id}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(city)}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CitySearch;
