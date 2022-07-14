import React from "react";

//import logo from './logo.svg';

import "./Style/App.css";

import "./Style/Input.css";

import InputField from "./Components/Home";

// import image from './Images/back.jpg'

// import { url } from 'inspector';

import {

  BrowserRouter as Router,

  Switch,

  Route,

  Redirect,

} from "react-router-dom";



const App: React.FC = () => {

  return (

    <Router>

      <Switch>

        <Route exact path="/" component={InputField} />

      </Switch>

    </Router>

  );

};



export default App;