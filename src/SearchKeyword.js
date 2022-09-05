import React, { useState, useEffect } from "react";
import "./SearchKeyword.css";
// import axios from "axios";
// import $ from 'jquery';

function SearchKeyword() {
  //   const [keyword, setKeyword] = useState("");
  const handleKeyword = (event) => {
    console.log(event.target.value);
    // setKeyword(event.target.value);
    // event.target.select();
    // console.log(keyword);
  };

  return (
    <form className="searchbox">
      <div id="bloodhound">
        <input
          className="typeahead"
          type="text"
          placeholder="States of USA"
          onClick={handleKeyword}
        />
      </div>
    </form>
  );
}

export default SearchKeyword;
