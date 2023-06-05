import './App.css';
import logo from './assets/logo192.png';
import React, {Component} from 'react';
import HomePage from "./components/HomePage";
import TaskPage from './components/TaskPage';
import UnitPage from './components/UnitPage';
import {
  Route, Routes,
  NavLink,
  BrowserRouter,
} from "react-router-dom";


class App extends Component {
  render(){
    return (
      <div className="App">

          <div className='App-logo'>
            <img src={logo} alt="Logo" />
          </div>

        <BrowserRouter>
          <ul>
            <li><NavLink to="/HomePage" className="">Home</NavLink></li>
            <li><NavLink to="/UnitPage">Units</NavLink></li>
            <li><NavLink to="/TaskPage">Tasks</NavLink></li>
          </ul>
      
          <div className="content">
            <Routes>
              <Route exact path="/HomePage" element={<HomePage/>}/>
              <Route path="/UnitPage" element={<UnitPage/>}/>
              <Route path="/TaskPage" element={<TaskPage/>}/>
            </Routes>
              
          </div>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
