import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Params from './components/Params';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:word' element={<Params />} />
          <Route  path='/:word/:color/:bgColor' element={<Params />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;