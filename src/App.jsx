import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import Modal from './Bool';
import SearchBar from './Search';
import MyForm from './Search';


function Home() {
  return (
    <h1> this is the Home page</h1>
  )
}
function Contact() {
  return (
    <h1> this is the Contact page</h1>
  )
}
function About() {
  return (
    <h1> this is the About page</h1>
  )
}
function Bool() {
  return (
    <h1> this is the Bool page</h1>
  )
}
function String() {
  return (
    <h1> this is the String page</h1>
  )
}





function App() {
  
  return (
    
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '1rem' }}  >
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/bool">Bool</Link>
        <Link to="/string">String</Link>
        <Link to="/form">Form</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/bool" element={<Modal />} />
        <Route path="/string" element={<SearchBar />} />
        <Route path="/form" element={<MyForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
