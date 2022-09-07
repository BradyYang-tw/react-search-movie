import logo from "./logo.svg";
import "./App.css";
import SearchMulti from "./SearchMulti";
import SearchKeyword from "./SearchKeyword";
import Cards from "./Cards";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

function App() {
  const [movie, setMovie] = useState({});
  const fetchApi = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
        // update state with API data
        // this.setState({
        //   movieID: data.id,
        //   original_title: data.original_title,
        //   tagline: data.tagline,
        //   overview: data.overview,
        //   homepage: data.homepage,
        //   poster: data.poster_path,
        //   production: data.production_companies,
        //   production_countries: data.production_countries,
        //   genre: data.genres,
        //   release: data.release_date,
        //   vote: data.vote_average,
        //   runtime: data.runtime,
        //   revenue: data.revenue,
        //   backdrop: data.backdrop_path,
        // });
      });
  };
  let getMovie = (movieID) => {
    let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=c3a7dd55d403d11994235c25abd416eb`;
    fetchApi(url);
  };

  useEffect(() => {
    getMovie("157336");

    var states = new window.Bloodhound({
      // datumTokenizer: function (datum) {
      //   console.log(datum);
      //   return window.Bloodhound.tokenizers.whitespace(datum.value);
      // },
      datumTokenizer: window.Bloodhound.tokenizers.whitespace("value"),
      queryTokenizer: window.Bloodhound.tokenizers.whitespace,
      // `states` is an array of state names defined in "The Basics"
      //   local: data,
      remote: {
        url: "https://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=cfe422613b250f702980a3bbf9e90716",
        // url: "https://api.themoviedb.org/3/search/keyword?query=%QUERY&api_key=c3a7dd55d403d11994235c25abd416eb",
        wildcard: "%QUERY",
        filter: function (movies) {
          // Map the remote source JSON array to a JavaScript object array
          return window.$.map(movies.results, function (movie) {
            // SetSearchId(movie.id)
            return { value: movie.original_title, id: movie.id }; // search original title
          });
        }, // end filter
      }, // end remote
    });

    states.initialize();

    window
      .$("#bloodhound .typeahead")
      .typeahead(
        {
          hint: true,
          highlight: true,
          minLength: 1,
        },
        { source: states.ttAdapter(), display: "value" }
      )
      .on("typeahead:selected", function (obj, datum) {
        console.log(datum);
        getMovie(datum.id);
      });
  }, []);
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%),url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };
  return (
    <div className="App" style={bgStyle}>
      <header className="App-header">
        Brady Movie
        <SearchKeyword />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <article className="App-article">
        <Cards data={movie} />
      </article>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
