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
import AddReviewForm from '../pages/AddReviewForm';
import axios from 'axios';
import ResetPassword from './ResetPassword';
import Advertisement from './Advertisement';

function App() {

  const navigate = useNavigate()
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    axios.post('https://api-article254.onrender.com/login', formData)
      .then(response => {
        const { sessionId, user } = response.data;
        setSessionId(sessionId);
        setIsAuthenticated(true);
        setUsername(user.username);
        setUserId(user.id);
        navigate('/articles');
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setError("Invalid username or password");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  };
  

  
  

console.log(userId);
console.log( username);
console.log(sessionId);

  return (
    <div className="">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" element={<LoginUser error={error} setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin}/>} />
          <Route path="/Signup" element={<SignUpUser setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<LandingPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/reset_password' element={<ResetPassword />}/>
          {isAuthenticated && (
            <>
              <Route path="/articles" element={<ArticlesPage sessionId={sessionId} isAuthenticated={isAuthenticated} userId={userId} username={username}/>} /> 
              <Route  path='/articles/:id' element={< ArticleReadPage userId={userId}/>}/>
              <Route  path='/createarticle' element={< CreateArticle userId={userId}/>}/>
              <Route path="/advertisement" element={<Advertisement userId={userId}/>}/>
            </>
          )}
         
        </Routes>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
