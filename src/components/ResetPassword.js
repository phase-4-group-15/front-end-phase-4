import React, { useState } from 'react';
import axios from 'axios';
import { Routes , Route, useNavigate} from 'react-router-dom'

const ResetPassword = () => {
 
    const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`https://api-article254.onrender.com/reset/${username}`, {
        password: password
      });
      setMessage(response.data.message);
      navigate("/login")
    } catch (error) {
      setMessage('incorrect username')
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-sm shadow-xl rounded-xl p-5 mt-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-blue-500 text-center mb-6 font-bold">Reset Password</h1>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-name">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200"
              id="inline-email"
              type="name"
              placeholder="jane.doe@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200"
              id="inline-password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-5">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Reset Password
            </button>
          </div>
        </div>
        {message && <div className="text-red-600 text-center">{message}</div>}
      </form>
    </div>
  );
};

export default ResetPassword;
