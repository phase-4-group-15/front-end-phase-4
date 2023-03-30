import React, { useState } from 'react';
import SignUpAuthor from "../components/SignUpAuthor";
import SignUpUser from "../components/SignUpUser";

const SignUpPage = ({setIsAuthenticated}) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="max-w-500 mx-auto my-0 mt-12 px-16">
      <div className="">
        <div className="flex justify-center mb-4">
          <button
            className={`text-teal-600 font-bold px-4 rounded ${
              showLogin ? "bg-teal-100" : ""
            }`}
            onClick={() => setShowLogin(true)}
          >
            Signup as Reader
          </button>
          <button
            className={`text-teal-600 font-bold px-4 rounded ${
              !showLogin ? "bg-teal-100" : ""
            }`}
            onClick={() => setShowLogin(false)}
          >
            Signup as Author
          </button>
        </div>
        {showLogin ? (
          <div>
            <SignUpUser setIsAuthenticated={setIsAuthenticated} />
          </div>
        ) : (
          <div>
            <SignUpAuthor />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
