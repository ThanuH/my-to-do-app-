import React from 'react';
import { useHistory } from "react-router-dom";
import '../../Style/App.css';
import { Input } from 'antd';
import { Button } from 'antd';


const { TextArea } = Input;
const Home =() =>{
    const history = useHistory();
    const nextPage =()=>{history.push("/view-list")}
    return( 
    <div className='App'>
    <form >   
        <h1 className='Heading'>To-Do-List</h1> 
        <p className='Text'>Lets Organize Your Day-To-Day Tasks</p>
        <p className='InputTxt'>Enter your To-Do</p>
        <TextArea showCount maxLength={100} style={{ height: 272 }} placeholder='Type Here' className='DesBox'/>
        <Button type="primary"  className='Button1'>Add to To-Do list</Button>
        <Button type="primary"  className='Button2' onClick={nextPage}>View To-Do list</Button>
    </form>
    </div>
    )
};

export default Home;