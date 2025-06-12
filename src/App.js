import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopStories from './components/TopStories';
import Home from './components/home'; // Make sure Home.js exists in components
import './App.css';
import Join from './components/SignupPage'; // Make sure SignupPage.js exists in components
import './components/Header.css'; // Import Header styles
import Author from './components/AuthorPage'; // Make sure AuthorPage.js exists in components
import './components/AuthorPage.css'; // Import AuthorPage styles
import CommunitiesPage from './components/CommunitiesPage';
import LoginPage from './components/LoginPage';
import  './components/LoginPage.css';
import Challenges from './components/Challenges'; 
import Creators from'./components/Creators';// Make sure Challenges.js exists in components
import Resources from './components/resources';
import Footer from './components/Footer'; // Make sure Footer.js exists in components
// Make sure creator-manan.js exists in components
 // Make sure algo.js exists in components
function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-stories" element={<TopStories />} />
            {/* Add more routes here as needed */}
             <Route path="/Join" element={<Join/>} />
             <Route path="/author" element={<Author/>} />
             <Route path="/Communities" element={<CommunitiesPage/>} />
             <Route path="/login" element={<LoginPage/>} />
            <Route path="/Challenges" element={<Challenges/>} />
            <Route path="/creators" element={<Creators/>} />
            <Route path="/resources" element={<Resources/>} /> {/* Placeholder for algo.js */}
            <Route path="/footer" element={<Footer/>} /> {/* Placeholder for algo.js */}
            
             
             
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
