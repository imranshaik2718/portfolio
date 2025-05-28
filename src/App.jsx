import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import "./App.css";
import Login from './components/Login/Login';
import Register from "./components/Login/Register"
function App() {
  return (
    <div>
      <>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<HomePage/>} />
      </Routes>
    </Router>
    </>
    </div>
  )
}

export default App
