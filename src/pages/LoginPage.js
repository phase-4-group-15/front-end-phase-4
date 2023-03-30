import LoginAuthor from "../components/LoginAuthor";
import LoginUser from "../components/LoginUser";
import React, { useState } from 'react'

const LoginPage = () => {

  const [showLogin, setShowLogin] = useState(true);

  return ( 
    <div className="max-w-500 mx-auto my-0 mt-12 px-16">
      <div className="">
        <div className="flex justify-center  mb-4">
          <button className={`text-teal-600 font-bold px-4 rounded ${showLogin ? "bg-teal-100" : ""}`} onClick={() => setShowLogin(true)}>Login as User</button>
          <button className={`text-teal-600 font-bold px-4 rounded ${!showLogin ? "bg-teal-100" : ""}`} onClick={() => setShowLogin(false)}>Login as Author</button>
        </div>
        {showLogin ? (
          <div>
            <LoginUser />
          </div>
        ) : (
          <div>
            <LoginAuthor />
          </div>
        )}
      </div>
    </div>
  );
}
 
export default LoginPage;
