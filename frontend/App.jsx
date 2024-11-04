// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectDetails from './src/pages/ProjectDetails';
import About from './src/pages/About';
import Home from './src/pages/Home';
import Shop from './src/pages/Shop';
import Office from './src/pages/Office';
import './App.css';
import ProductPage from "./src/pages/ProductPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/About" element={<About/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/office" element={<Office />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
