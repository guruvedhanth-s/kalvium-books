import React from 'react'
import Form from "./components/Form"
import Book from './components/Book'
import {Route,Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Book/>} />
          <Route path="/Form" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App