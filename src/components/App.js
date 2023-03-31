import LandingPage from '../pages/LandingPage';
import Navbar from './Navbar';
import { Routes , Route, useNavigate} from 'react-router-dom'
import React, { useState} from 'react'
import ArticlesPage from '../pages/ArticlesPage';
import ArticleReadPage from '../pages/ArticleReadPage';
import CreateArticle from '../pages/CreateArticle';
import Footer from '../pages/Footer';
import LoginUser from './LoginUser';
import SignUpUser from './SignUpUser';


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
    <div className="">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" element={<LoginUser setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin}/>} />
          <Route path="/Signup" element={<SignUpUser setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<LandingPage setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated && (
            <>
              <Route path="/articles" element={<ArticlesPage isAuthenticated={isAuthenticated} userId={userId} username={username}/>} /> 
              <Route  path='/articles/:id' element={< ArticleReadPage/>}/>
              <Route  path='/createarticle' element={< CreateArticle userId={userId}/>}/>
            </>
          )}
         
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
