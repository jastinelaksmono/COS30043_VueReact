
import { useState } from 'react';
import styled from 'styled-components';

function Taskpage()
{
  const [value, setValue] = useState();

  const [tasks, setTasks] = useState([]);

  const addNewTask = ()=>{
    setTasks([...tasks, value])
  }

  const deleteTask = index => {
    const temp = [...tasks];

    // removing the element using splice
    temp.splice(index, 1);

    // updating the list
    setTasks(temp);
  }

  return(
    <div>
      <h2 className="pageTitle">List of Tasks</h2>

    <Group>
      <label for="status">Status: </label>
		  <input type="text" 
             id="status" 
             onChange={(e) => setValue(e.target.value)}/>

      <button onClick={addNewTask} >Post</button>
    </Group>

      {tasks.map((item, index) =>{
        return  <div key={index}> {item} <button onClick={()=>deleteTask(index)}>Delete</button></div>;
      })}
    
    </div>
  )
}

export default Taskpage;

const Group = styled.label`
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  margin: 2vw;
  align-items: center;
  justify-content: center;
`;