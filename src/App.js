import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Portal from './components/Portal';
import Predict from './components/Predict';
import Footer from './components/Footer';
import Explore from './components/Explore';
import SpeciesDetail from './components/SpeciesDetail';
import NotFound from './components/NotFound';
import PredictedSpeciesDetail from './components/PredictedSpeciesDetails';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/portal' element={<Portal />} />
          <Route exact path='/predict' element={<Predict />} />
          <Route exact path='/explore' element={<Explore />} />
          <Route path="/species/:species_name" element={<SpeciesDetail />} />
          <Route path="/predictedSpecies" element={<PredictedSpeciesDetail />} />

          {/* Catching all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
