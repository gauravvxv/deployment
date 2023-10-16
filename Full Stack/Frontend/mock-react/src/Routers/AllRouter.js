import React from 'react'
import {Routes,Route} from "react-router-dom";
import Signup from '../components/Signup';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRouter
