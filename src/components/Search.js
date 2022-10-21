import React, { useContext} from "react";
import { GregListContext } from "./GregContext";

function Search() {
 const {handleSubmit, handleChange, wordSearch} = useContext(GregListContext)
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={wordSearch}
        onChange={(e) => handleChange(e)}
      />{" "}
      <button type="submit"> 🔍 </button>
    </form>
  );
}

export default Search;
