import React from 'react';
//import logo from './logo.svg';
import './Style/App.css';
import './Style/Input.css'
import InputField from './Components/InputField'

const App: React.FC =() =>{
  return(
    <div className='App'>
      <span className='Heading'>To-Do-List</span> 
      <span className='Text'>Lets Organize Your Day-To-Day Tasks</span>
      <InputField/>
    </div>
  )
}

export default App;
