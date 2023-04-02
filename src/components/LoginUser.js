import React, { useState } from 'react'
import {  Link } from "react-router-dom"

const LoginUser = ({  handleLogin }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    event.target.reset();

    const user = { username, password };

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        localStorage.token = response.jwt;
        setCurrentUser(response.user);
      });
  }

  return ( 
    <div className="flex justify-center items-center h-screen">
        <form class="w-full max-w-sm shadow-xl rounded-xl p-5 mt-4 " noValidate no-autocomplete onSubmit={handleLogin} >
              <h1 className="text-2xl text-teal-500 text-center mb-6  font-bold"> User login</h1>
          <div class="md:flex md:items-center mb-6">
              
            <div class="md:w-1/3">
              <label class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                Username
              </label>
            </div>
            <div class="md:w-2/3">
              <input className="  border-2  border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200" id="username" name="username" type="text" placeholder="Jane Doe" onChange={(e) => setUsername(e.target.value)} autoComplete="off"
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
               name="password" onChange={(e) => setPassword(e.target.value)} autoComplete="off"
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