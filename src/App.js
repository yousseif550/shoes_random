import './App.css';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Fetch } from "./components/fetchShoes"
import { favoris } from "./components/favoris"

import { AiFillLike } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { Container, Row, Card } from "react-bootstrap";

function App() {
  return (
    <div className="App-header">
       <p>Your Sneacker's Room 👟</p>
          <Router>
            <div className="App-header">
          
                    <nav>
                        <Link to="/" activeStyle={{ color:'black' }} ><AiOutlineHome /> HOME</Link>
                        
                        <Link to="/favoris" activeStyle={{ color:'black' }} ><AiFillLike /> FAV</Link>
                    </nav>
                
              <Switch>
                <Route path="/favoris">
                  <h1> MY FAVORITES SNEACKER</h1>
                  <favoris></favoris>
                  </Route>
                <Route path="/">
                  <Fetch />
                </Route>
              </Switch>
            </div>
          </Router>
      </div>
  );
}

export default App;
