function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  