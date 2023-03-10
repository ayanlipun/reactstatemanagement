import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";
import { MovieContext } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovie/>
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
