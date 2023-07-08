import { useState } from "react";

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(searchTerm);
      
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  };
  
  export default Search;
  