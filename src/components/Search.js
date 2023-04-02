import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <form className="relative w-80 ml-5 mr-5">
      <input
        name="search"
        type="text"
        placeholder="   Search article by title ....."
        value={query}
        onChange={handleSearchChange}
        className="bg-blue-50 rounded-xl py-5 px-12 w-full text-gray-900 shadow-md focus:outline-none focus:bg-slate-50 focus:shadow-outline mr-2"
      />
      <span className="absolute inset-y-0 left-0 flex text-2xl bg-blue-100 shadow-sm pr-3 pl-3  rounded-md items-center ">
        <ion-icon name="search"></ion-icon>
      </span>
    </form>
  );
};

export default Search;
