function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search expenses..."
        className="w-full mb-4 p-2 border rounded text-white"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  