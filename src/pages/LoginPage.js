import LoginAuthor from "../components/LoginAuthor";
import LoginUser from "../components/LoginUser";
import React, { useState } from 'react'

const LoginPage = () => {

  const [showLogin, setShowLogin] = useState(true);

return ( 
     <div className="max-w-500 mx-auto my-0 mt-16 px-16">
        
         {showLogin ? (
            <>
            <LoginUser
         />
            <hr className="border-none border-b-1 border-gray-900 my-1" />
            <p className="my-2 flex justify-center">
                  Want to Login as Author? &nbsp;
                <button
                className=" text-teal-600 font-bold px-4  rounded"
                onClick={() => setShowLogin(false)}
                >
                Login as Author
                </button>
            </p>
            </>
        ) : (
            <>
            <LoginAuthor />
            <hr className="border-none border-b-1 flex justify-center border-gray-900 my-1" />
            <p className="my-4 flex justify-center">
                want to login as User
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
 
export default LoginPage;



