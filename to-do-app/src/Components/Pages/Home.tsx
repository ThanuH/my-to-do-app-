import React from 'react';
import { useHistory } from "react-router-dom";
import '../../Style/App.css';
import { Input } from 'antd';
import { Button } from 'antd';


const { TextArea } = Input;


const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };
  
const Home =() =>{
    const history = useHistory();
    const nextPage =()=>{history.push("/view-list")}
    
    return( 
    <div className='App'>
    <form >   
        <h1 className='Heading'>To-Do-List</h1> 
        <h3 className='Text'>Lets Organize Your Day-To-Day Tasks</h3>
        <p className='InputTxt'>Enter the title of the task</p>
        <Input placeholder='Enter Title' className='TitleBox' /><br/>
        <p className='InputTxt'>Enter the description of the task</p>
        <TextArea showCount maxLength={100} style={{ height: 190 }} onChange={onChange} placeholder='Enter task description' className='DesBox'/>
        <Button type="primary"  className='Button1'>Add to task list</Button>
        <Button type="primary"  className='Button2' onClick={nextPage}>View task list</Button>
    </form>
    </div>
    )
};

export default Home;