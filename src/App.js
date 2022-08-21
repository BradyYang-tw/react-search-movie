import logo from "./logo.svg";
import "./App.css";
import SearchMulti from "./SearchMulti";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Brady Movie
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
        <SearchMulti />
      </article>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
