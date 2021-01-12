import React from "react";

const SearchForm = props => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleSearch}
          value={props.searchTerm}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search By Name"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;