import SignUpAuthor from "../components/SignUpAuthor";
import SignUpUser from "../components/SignUpUser";
import React, { useState } from 'react'

const SignupPage = () => {

  const [showLogin, setShowLogin] = useState(true);

return ( 
     <div className="max-w-500 mx-auto my-0 px-16">
        
        {showLogin ? (
            <>
            <SignUpUser
            
                />
            <hr className="border-none border-b-1 border-gray-900 my-1" />
            <p className="my-2 flex justify-center">
                Want to register as Author? &nbsp;
                <button
                className=" text-teal-600 font-bold px-4  rounded"
                onClick={() => setShowLogin(false)}
                >
                Signup as Author
                </button>
            </p>
            </>
        ) : (
            <>
            <SignUpAuthor />
            <hr className="border-none border-b-1 flex justify-center border-gray-900 my-1" />
            <p className="my-4 flex justify-center">
                want to register as User
                <button
                className=" text-teal-600 px-4 font-bold rounded"
                onClick={() => setShowLogin(true)}
                >
                Signup as User
                </button>
            </p>
            </>
        )}
  </div>
);
}
 
export default SignupPage;

