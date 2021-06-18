import "./search-box-component.css";
import React from "react";

function Search({ placeholder, handleChange }) {
  return (
    <div>
      <input
        className="search"
        onChange={(e)=>{
            handleChange(e.target.value)
        }}
        style={{
          marginBottom: "100px",
          marginLeft: "100px",
          marginTop: "100px",
        }}
        type="text"
        name=""
        id=""
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
