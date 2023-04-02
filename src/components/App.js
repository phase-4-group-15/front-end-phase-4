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

function App() {

  const navigate = useNavigate()
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    axios.post('http://localhost:3000/login', formData)
      .then(response => {
        const { sessionId, user } = response.data;
        setSessionId(sessionId);
        setIsAuthenticated(true);
        setUsername(user.username);
        setUserId(user.id);
        navigate('/articles');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  

console.log(userId);
console.log( username);
console.log(sessionId);

  return (
    <div className="">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" element={<LoginUser setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin}/>} />
          <Route path="/Signup" element={<SignUpUser setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<LandingPage setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated && (
            <>
              <Route path="/articles" element={<ArticlesPage sessionId={sessionId} isAuthenticated={isAuthenticated} userId={userId} username={username}/>} /> 
              <Route  path='/articles/:id' element={< ArticleReadPage userId={userId}/>}/>
              <Route  path='/createarticle' element={< CreateArticle userId={userId}/>}/>
              {/* <Route path='/addreview' element={<AddReviewForm />}/> */}
            </>
          )}
         
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
