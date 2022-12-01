import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { About } from '../About/About';
import { Navbar } from '../Navbar/Navbar';


function App() {
  return (

    <div className='container-App'>
      
      <Navbar/>
      <div className='App'>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      </Routes>
    </div>
    </div>
  )
}        

export default App;
