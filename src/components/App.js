import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Navbar from './Navbar';
import { Routes , Route, useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ArticlesPage from '../pages/ArticlesPage';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/Signup" element={<SignupPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<LandingPage setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated && (
            <>
              <Route path="/articles" element={<ArticlesPage />} /> 
            </>
          )}
        </Routes>
    </div>
  );
}

export default App;
