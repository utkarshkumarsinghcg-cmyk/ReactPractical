import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;