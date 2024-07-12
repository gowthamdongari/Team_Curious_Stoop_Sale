import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignIn from './components/auth/SignIn';
import { EventRegistrationForm } from './components/eventregistration/EventRegister';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Signin' element={<SignIn/>}></Route>
      <Route path='/Eventregister' element={<EventRegistrationForm/>}></Route>
    </Routes>

    </>
  )
}

export default App
