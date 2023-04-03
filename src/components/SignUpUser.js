import { useNavigate} from "react-router-dom"
import {  Link } from "react-router-dom"
import { useState } from "react"

const SignUpUser = ({ setIsAuthenticated }) => {

    const navigate = useNavigate()

    const [errors, setErrors] = useState([]);

    // register Author
  
const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  try {
    const response = await fetch('https://api-article254.onrender.com/signup', {
      method: 'POST',
      body: formData,
    })
    if (response.ok) {
      setIsAuthenticated(true);
      navigate('/login');
    } else {
      const errorData = await response.json();
      setErrors(errorData.errors);
    }
  } catch (error) {
    console.error(error);
  }
}
      
    return ( 
      <div className="flex justify-center items-center mb-20 ">
      <form class="w-full max-w-sm shadow-xl rounded-xl p-5 mt-4  "noValidate no-autocomplete
       onSubmit={handleSubmit}
       >
        <h1 className="text-2xl text-blue-500 text-center mb-6  font-bold">Signup As Reader </h1>
           {errors.length > 0 && (
                <div className="bg-red-100 border mb-4 border-red-400 text-red-700 px-4 py-3 rounded ">
                  <strong className="font-bold">Error:</strong>
                  <ul className="list-disc ml-4">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
        <div class="md:flex md:items-center mb-6">   
          <div class="md:w-1/3">
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
            Username
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="border-2  border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200" 
            id="username"
             type="text"
             name="username"
             placeholder="Jane Doe" 
             required
             autoComplete="off"
             />
          </div>
        </div>
    
        <div class="md:flex md:items-center mb-6">   
          <div class="md:w-1/3">
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username" id="email">
              email
            </label>
          </div>
          <div class="md:w-2/3">
            <input autoComplete="off" class="border-2  border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200" id="email" type="text" name="email"  placeholder="Jane Doe" required/>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">   
          <div class="md:w-1/3">
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username" id="bio">
              bio
            </label>
          </div>
          <div class="md:w-2/3">
            <input autoComplete="off" class="border-2  border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200" id="bio" type="text" name="bio"  placeholder="eg. tech" required/>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
            Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input autoComplete="off" class="border-2  border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200" id="password" type="password" name="password" placeholder="******************" required/>
          </div>
        </div>

        {/* <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
             confirm Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input autoComplete="off" class="border-2  border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200" id="confirm_password" type="password" name="confirm_password" placeholder="******************" required/>
          </div>
        </div> */}
    
        <div class="md:flex md:items-center mb-5">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button  class="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Register
            </button>
          </div>
        </div>  
        <div className="text-gray-900 pl-10 block">Already  registered? 
             <Link to="/login">
                <button className="shadow ml-8 bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">login here</button> 
             </Link>
        </div>
      </form>
    </div>
     );
}
 
export default SignUpUser;