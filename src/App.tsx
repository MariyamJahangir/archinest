// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';


import Interiors from './pages/Interiors';
import Exteriors from './pages/Exteriors';
import Landscaping from './pages/Landscaping';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="who-we-are" element={<About />} />
         

          <Route path="interiors" element={<Interiors />} />
          <Route path="exteriors" element={<Exteriors />} />
         <Route path="landscaping" element={<Landscaping />} />
          <Route path="projects" element={<Projects />} />
          <Route path="reach-us" element={<Contact />} />
           <Route path="/project/:title" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
