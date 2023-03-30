import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Navbar from './Navbar';
import { Routes , Route} from 'react-router-dom'
import React, { useState} from 'react'
import ArticlesPage from '../pages/ArticlesPage';
import ArticleReadPage from '../pages/ArticleReadPage';
import CreateArticle from '../pages/CreateArticle';


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
              <Route  path='/articles/:id' element={< ArticleReadPage/>}/>
              <Route  path='/createarticle' element={< CreateArticle/>}/>
            </>
          )}
        </Routes>
    </div>
  );
}

export default App;
