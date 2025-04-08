// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './komponenter/Header.jsx';
import Footer from './komponenter/Footer.jsx'; // Importer Footer
import Main from './sider/Forside.jsx';
import HvorforOs from './sider/HvorforOs.jsx';
import OmOs from './sider/OmOs.jsx';
import Book from './sider/Book.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/hvorforos" element={<HvorforOs />} />
            <Route path="/omos" element={<OmOs />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
