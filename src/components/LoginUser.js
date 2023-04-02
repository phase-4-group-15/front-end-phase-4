import React, { useState, useEffect } from 'react'
import {  Link } from "react-router-dom"

const LoginUser = ({  handleLogin, error }) => {



  return ( 
    <div className="flex justify-center items-center h-screen">
       
        <form class="w-full max-w-sm shadow-xl rounded-xl p-5 mt-4 " noValidate no-autocomplete onSubmit={handleLogin} >
          <h1 className="text-2xl text-blue-500 text-center mb-3  font-bold"> User login</h1>

              {error && (
                <div className="bg-red-100 border mb-4 border-red-400 text-red-700 px-4 py-3 rounded ">
                  <strong className="font-bold">Error:</strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
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
        
          <div class="md:flex items-center justify-around mb-5">
            <div class="">
              <button class="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                 login
              </button>
            </div>
            <div class="">
              <Link exact to="/reset_password">
                  <button className=" text-blue-900 rounded">reset password</button> 
              </Link>
            </div>
         
          </div>
           <div className="text-gray-900 pl-10 block">Dont have account? 
             <Link to="/signup">
                <button className="shadow ml-8 bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Register here</button> 
             </Link>
           </div>
         
        </form>
       
      </div>
     );
}
 
export default LoginUser;