import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Hotels from './pages/Hotels/Hotels'
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotels />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App