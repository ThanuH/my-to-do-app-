import React, { useState } from "react";


//import logo from './logo.svg';

import '../Style/App.css';
import "../Style/Input.css";
import Home from "./Pages/Home"; 
import ViewList from "./Pages/ViewList"
// import image from './Images/back.jpg'
// import { url } from 'inspector';

import {BrowserRouter as Router,Switch,Route,Redirect,} from "react-router-dom";

const App: React.FC = () => {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view-list" component={ViewList} />
      </Switch>
    </Router>
  );
};

export default App;
