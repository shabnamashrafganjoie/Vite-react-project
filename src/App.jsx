import React from 'react';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import HomePage from './components/HomePage/HomePage';
//import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes> 
        </div>

        <Footer />
      </div>
     </Router>
  );
}

export default App;