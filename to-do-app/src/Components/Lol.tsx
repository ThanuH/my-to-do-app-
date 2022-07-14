import React from 'react';
import { useHistory } from "react-router-dom";
import '../Style/App.css';


const Lol =() =>{
    const history = useHistory();
    const subPage =()=>{history.push("/sub")}
    
    return( 
    <div className='App'>
    <form >   
        <h1 className='Heading'>To-Do-List</h1> 
        <p className='Text'>Lets Organize Your Day-To-Day Tasks</p>
        <p className='InputTxt'>Enter the title of the task</p>
        <input type = 'input' placeholder='Enter Title' className='TitleBox' />
        <p className='InputTxt'>Enter the description of the task</p>
        <textarea placeholder='Enter task description' className='DesBox'/>
        <button type='button'  className='Button1'>Add to task list</button>
        <button type='button'  className='Button2' onClick={subPage}>View task list</button>
    </form>
    </div>
    )
};

export default Lol;