import React, { Component } from "react";
import Cocktail from "./components/cocktail";
import './components/cocktail.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div id="root" className="App">
       <Cocktail />
      </div> 
    ); 
  } 
}
export default App;