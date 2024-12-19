import React from 'react'
import LoginPage from './Componants/LoginPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Componants/navbar'
import './App.css'
import AddQuery from './Componants/AddQuery'




const App = () => {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/AddQuery" element={<AddQuery />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
