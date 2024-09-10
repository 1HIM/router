import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Counter from './components/Counter';
import Header from './pages/Header';
import Footer from './pages/Footer';
import MovieDescription from './pages/MovieDescription';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:title" element={<MovieDescription />} />
        </Routes>
        <Counter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
