import React from "react";

const SearchBar = ({ searchChange }) => {
    return (
        <input type="search" className="p-5 bg-green-200" placeholder="Search robofriends" onChange={searchChange} />
    )
}

export default SearchBar;