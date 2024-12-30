import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthcareCaseStudy from './pages/HealthcareCaseStudy';
import WildwoodCaseStudy from './pages/WildwoodCaseStudy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HealthcareCaseStudy />} />
        <Route path="/healthcare" element={<HealthcareCaseStudy />} />
        <Route path="/wildwood" element={<WildwoodCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;