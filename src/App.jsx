import React from 'react';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './components/DetailsPage.jsx/DetailsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
        <div className="flex-grow mx-[40px] my-[60px] justify-between flex">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<DetailsPage />} />
          </Routes> 
        </div>

        <Footer />
      </div>
     </Router>
  );
}

export default App;