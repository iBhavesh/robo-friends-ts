import React from "react";

const SearchBox = ({ searchChange, searchField }) => (
  <div className="pa2">
    <input
      type="text"
      placeholder="Search robots"
      className="pa3 ba b--green bg-lightest-blue"
      value={searchField}
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
