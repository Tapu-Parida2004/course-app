import React from "react";

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <input
      type="text"
      placeholder="Search courses by name or instructor"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
