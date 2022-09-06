import React, { useState, useEffect } from "react";
import "./Cards.css";

function Cards(props) {
  console.log(props.data);
  // let getImage = ()=>{

  // }
  let poster = `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`;
  let genres;
  if (Object.keys(props.data).length != 0) {

    genres = props.data.genres.map((data) => {
      return data.name;
    });

    var filter_genres = genres.toString();
  }

  let companies;
  if (props.data.production_companies && props.data.production_companies.length > 0) {
    console.log(props.data.production_companies);
    companies = props.data.production_companies.map((data) => {
      return data.name;
    });

    var filter_companies = companies.toString();
  }

  return (
    <div className="Cards">
      {/* <h2>內容</h2> */}
      <div className="image">
        <img src={poster}></img>
      </div>
      <div className="introduction">
        <h1>{props.data.original_title}</h1>
        <span>{props.data.tagline}</span>
        <p>{props.data.overview}</p>

        <div class="detail">
          <span>{filter_genres}</span>
          <span>{filter_companies}</span>
          <div class="detail_content">
            Original Release:
            <span class="detail_content_span">{props.data.release_date}</span>
          </div>
          <div class="detail_content">
            Running Time:
            <span class="detail_content_span">{props.data.runtime}</span>
          </div>
          <div class="detail_content">
            Box Office:
            <span class="detail_content_span">{props.data.revenue}</span>
          </div>
          <div class="detail_content">
            Vote Average:
            <span class="detail_content_span">{props.data.vote_average}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
