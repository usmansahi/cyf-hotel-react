import React, { useState } from "react";
import SearchButton from "./SerachButton";

const Search = ({ search }) => {
  const [searchInput, setsearchInput] = useState("");
  const handleSearchInput = event => {
    setsearchInput(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    search(searchInput);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                value={searchInput}
                onChange={handleSearchInput}
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton></SearchButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
