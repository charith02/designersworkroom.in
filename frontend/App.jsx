// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Work from './src/pages/Work';
import ProjectDetails from './src/pages/ProjectDetails';
import Home from './src/pages/Home';
import Shop from './src/pages/Shop';
import Office from './src/pages/Office';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/work" element={<Work />} /> */}
          {/* Dynamic route for individual project pages */}
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/office" element={<Office />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
