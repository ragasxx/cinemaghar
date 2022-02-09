import React from "react";
import {data} from '../data';
import { addMovies } from "../actions";

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
          
             store.dispatch(addMovies(data));
             console.log("STATE" , store.getState());
 }
 render(){
  const {list} = this.props.store.getState();  //{list:[], favourites:[]}
  console.log("list" , list)
    return (
    <div className="App">
         <NavBar/>

          <div className="main">
            <div className="tabs">
              <div className="tab">MOVIES</div>
              <div className="tab">FAVOURITES</div>
            </div>
            <div className="list">
              {list.map((movie,index) => (
                     
                     <MovieCard movie={movie} key={`movie-${index}`} />
              ))}
            </div>
          </div>
       </div>
  );
}
}
export default App;
