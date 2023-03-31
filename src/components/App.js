import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Navbar from './Navbar';
import { Routes , Route} from 'react-router-dom'
import React, { useState} from 'react'
import ArticlesPage from '../pages/ArticlesPage';
import ArticleReadPage from '../pages/ArticleReadPage';
import CreateArticle from '../pages/CreateArticle';
import { useNavigate} from "react-router-dom"

function App() {

  const navigate = useNavigate()
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
      
        setIsAuthenticated(true);
        setUsername(data.username); 
        setUserId(data.id);
        navigate('/articles');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  

console.log(userId);
console.log( username);

  return (
    <div className="App">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin}/>} />
          <Route path="/Signup" element={<SignupPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<LandingPage setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated && (
            <>
              <Route path="/articles" element={<ArticlesPage isAuthenticated={isAuthenticated} userId={userId} username={username}/>} /> 
              <Route  path='/articles/:id' element={< ArticleReadPage/>}/>
              <Route  path='/createarticle' element={< CreateArticle userId={userId}/>}/>
            </>
          )}
        </Routes>
    </div>
  );
}

export default App;
