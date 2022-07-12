import React from 'react';

const InputField =() =>{
    return <form className='form'>
        <span className='InputTxt'>Enter the title of the task</span>
        <input type = 'input' placeholder='Enter Title' className='TitleBox' />
        <span className='InputTxt'>Enter the description of the task</span>
        <input type = 'input' placeholder='Enter task description' className='DesBox' />
    </form>
};

export default InputField;