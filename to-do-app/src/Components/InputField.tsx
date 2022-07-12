import React from 'react';

const InputField =() =>{
    return <form className='form'>
        <h1 className='Heading'>To-Do-List</h1> 
        <p className='Text'>Lets Organize Your Day-To-Day Tasks</p>
        <p className='InputTxt'>Enter the title of the task</p>
        <input type = 'input' placeholder='Enter Title' className='TitleBox' />
        <p className='InputTxt'>Enter the description of the task</p>
        <input type = 'input' placeholder='Enter task description' className='DesBox' />
    </form>
};

export default InputField;