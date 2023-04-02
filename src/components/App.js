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


function App() {

  const navigate = useNavigate()
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserd] = useState({});
  // const [username, setUsername] = useState(null);
  
  function setCurrentUser(currentUser) {
    setUserid(currentUser);
    setIsAuthenticated(true);
  }


  useEffect(() => {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token.length > 1
      && token !== 'undefined'
    ) {
      fetch('http://localhost:3000/auto_login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => setCurrentUser(user));
    } else {
      console.log('No token found, try logging in!');
    }
  }, []);


 
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     fetch('http://localhost:3000/login', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Network response was not ok.');
//         }
//       })
//       .then(data => {
//         localStorage.setItem('sessionId', data.sessionId);
//         console.log(data.sessionId);
//         setIsAuthenticated(true);
//         setUsername(data.username); 
//         setUserId(data.id);
//         navigate('/articles');
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   };
  

// console.log(userId);
// console.log( username);

  return (
    <div className="">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" element={<LoginUser setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser}/>} />
          <Route path="/Signup" element={<SignUpUser setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={<LandingPage setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated && (
            <>
              <Route path="/articles" element={<ArticlesPage isAuthenticated={isAuthenticated} userId={userId} username={username}/>} /> 
              <Route  path='/articles/:id' element={< ArticleReadPage/>}/>
              <Route  path='/createarticle' element={< CreateArticle userId={userId}/>}/>
              <Route path='/addreview' element={<AddReviewForm />}/>
            </>
          )}
         
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
