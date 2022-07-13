import React from 'react';
//import logo from './logo.svg';
import './Style/App.css';
import './Style/Input.css'
import InputField from './Components/InputField'
// import image from './Images/back.jpg'
// import { url } from 'inspector';

const App: React.FC =() =>{
  return(
  
    <div className="App" >
      
      <InputField/>
      
    </div>
  )
}

export default App;
