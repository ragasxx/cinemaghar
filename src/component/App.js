import React from "react";
import {data} from '../data';
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";


class App extends React.Component{

 componentDidMount () {

   const {store} = this.props;


        store.subscribe(()=> {
          console.log("updated");
          this.forceUpdate();
        })   

  // make api call

  // tell the browser that yes we want to add these movies in store(dispatch an action)
          
             store.dispatch({
             type: 'ADD_MOVIES',
             movies: data
           });

           console.log("STATE" , store.getState());
 }
 render(){
  const movies = this.props.store.getState();
    return (
    <div className="App">
         <NavBar/>

          <div className="main">
            <div className="tabs">
              <div className="tab">MOVIES</div>
              <div className="tab">FAVOURITES</div>
            </div>
            <div className="list">
              {movies.map((movie,index) => (
                     
                     <MovieCard movie={movie} key={`movie-${index}`} />
              ))}
            </div>
          </div>
       </div>
  );
}
}
export default App;
