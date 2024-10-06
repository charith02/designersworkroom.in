import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from './src/pages/Work';
import Shop from './src/pages/Shop';
import Office from './src/pages/Office';
import Home from './src/pages/Home'; // Create a Home page component for the main page content.
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/office" element={<Office />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
