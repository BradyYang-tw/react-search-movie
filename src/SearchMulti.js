import React, { useState } from "react";
import axios from "axios";
import "./SearchMulti.css";
import ImgBG from "./ImgBG";
import ListResult from "./ListResult";

function SearchMulti() {
  const [key, setKey] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const [imgPath, setimgPath] = useState("");
  const getKey = (event) => {
    setKey(event.target.value);
  };
  const getData = (keyword) => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/multi?api_key=c3a7dd55d403d11994235c25abd416eb&language=en-US&page=1&include_adult=true&query=${keyword}`,
      // responseType: 'stream'
    })
      .then(function (response) {
        console.log(response.data);
        setsearchResult(response.data.results);
        setimgPath(
          "https://image.tmdb.org/t/p/w500" +
            response.data.results[0].poster_path
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  };

//   const liStyle = {
//     backgroundImage: `url(${imgPath})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     backgroundSize: 'contain',
//   };
  return (
    <div className="searchBar" >
      {/* <ImgBG i={imgPath} /> */}
      <input type="search" onChange={getKey}></input>
      <button
        onClick={() => {
          getData(key);
        }}
      >
        click me
      </button>
      <ListResult data={searchResult} />
    </div>
  );
}

export default SearchMulti;
