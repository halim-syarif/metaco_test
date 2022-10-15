import React from "react";
import IcSearch from "../assets/img/search";
import "../assets/styles/index.css"

export default function Search({setSearchName, searchName, placeholder, findSearch}) {

  const onCreateAccount = (event) => {
    if(event.key === 'Enter') {
      findSearch()
    }
 }
 
  return (
    <div className="search-container">
      <input
        className="search"
        placeholder={placeholder}
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
        onKeyDown={onCreateAccount}
      />
      <div style={{ padding: "10px 0px" }}>
        <div onClick={findSearch}>
          <IcSearch />
        </div>
      </div>
    </div>
  );
}

