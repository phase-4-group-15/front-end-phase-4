import React, { useState } from 'react'
import {  Link } from "react-router-dom"
import { useNavigate} from "react-router-dom"

const LoginUser = () => {

 const navigate = useNavigate()
    
// login Author
const handleLogin = (e) => {
    e.preventDefault();
    navigate('/articles');
    const form = e.target;
    const formData = new FormData(form);
  
    fetch('', {
      method: 'POST',
      body: formData,
    }) 
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        console.log(data)
        setIsAuthenticated(true);
        setUsername(data.username); 
        setUserId(data.userId);
        navigate('/articles');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };


    return ( 
    <div className="flex justify-center items-center">
        <form class="w-full max-w-sm shadow-xl rounded-xl p-5 mt-4 " noValidate no-autocomplete onSubmit={handleLogin} >
              <h1 className="text-2xl text-teal-500 text-center mb-6  font-bold"> User login</h1>
          <div class="md:flex md:items-center mb-6">
              
            <div class="md:w-1/3">
              <label class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                Username
              </label>
            </div>
            <div class="md:w-2/3">
              <input className="  border-2  border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200" id="username" name="username" type="text" placeholder="Jane Doe"
               required
               autoComplete="off"
             />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                Password
              </label>
            </div>
            <div class="md:w-2/3">
              <input className="  border-2  border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200"  id="inline-password" type="password" placeholder="******************"
               name="password"
               required
               autoComplete="off"
              />
            </div>
          </div>
        
          <div class="md:flex md:items-center mb-5">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button class="shadow bg-teal-500 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                 login
              </button>
            </div>
         
          </div>
           <div className="text-gray-900 pl-10 block">Dont have account? 
             <Link to="/signup">
                <button className="shadow ml-8 bg-teal-500 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Register here</button> 
             </Link>
           </div>
        </form>
      </div>
     );
}
 
export default LoginUser;