import styled from 'styled-components';
import { useState } from 'react';
import mountain from '../assets/mountain.jpg';
import ocean from '../assets/ocean.jpg';


export default function HomePage(){
  const [pic, setPic] = useState();
  const [nm, setName] = useState({first: '', last: ''});
  const handleChange = (e) => {
      const { name, value } = e.target;
      setName(nm => ({
          ...nm,
          [name]: value
      }));
  }
  return(
    <div>
      <h2 id="title" className="pageTitle">Homepage</h2>

      <form>
        
        <h3 className='container'>{nm.first!=="" || nm.last!=="" ? "Welcome, " : ''}{nm.first + " " + nm.last}</h3>
        
        <Group>
          <label for="first">First Name: </label>
          <input type="text" id="first" name="first" onChange={(e) => handleChange(e)}/>
        </Group>

        <Group>
          <label for="lname">Last Name: </label>
          <input type="text" id="last" name="last" onChange={(e) => handleChange(e)} />
        </Group>

        <Group >
          <RadioButton type="radio" name="pic" id="ocean" value="ocean" onChange={() => setPic(ocean)}/>
          <label for="ocean">Ocean</label>

          <RadioButton type="radio" name="pic" id="mountain" value="mountain" onChange={() => setPic(mountain)}/>
          <label for="mountain">Mountain</label>
        </Group>

        <div className="container">
          <ResultPic src={pic}></ResultPic>
        </div>
      
      </form>

    </div>
  )
}

const Group = styled.label`
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  margin: 2vw;
  align-items: center;
  justify-content: center;
`;

const RadioButton = styled.input`
  width: 2em;
  height: 1.7em;
`;

const ResultPic = styled.img`
  width: 50%;
  margin-bottom: 5em
`;








