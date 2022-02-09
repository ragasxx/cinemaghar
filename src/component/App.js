import react from "react";
import NavBar from "./NavBar";
import {data} from '../data';
import MovieCard from "./MovieCard";


function App() {
  return (
    <div className="App">
         <NavBar/>

          <div className="main">
            <div className="tabs">
              <div className="tab">MOVIES</div>
              <div className="tab">FAVOURITES</div>
            </div>
            <div className="list">
              {data.map((movie,index) => (
                     
                     <MovieCard movie={movie} key={`movie-${index}`} />
              ))}
            </div>
          </div>
       </div>
  );
}

export default App;
