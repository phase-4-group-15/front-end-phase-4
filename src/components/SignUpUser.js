import { useNavigate} from "react-router-dom"


const SignUpUser = () => {

    const navigate = useNavigate()

    // register Author
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setIsAuthenticated(true);
        navigate('/articles');
        // const form = e.target;
        // const formData = new FormData(form);
      
        // try {
        //   const response = await fetch('https://dad-jokes-8fzp.onrender.com/users', {
        //     method: 'POST',
        //     body: formData,
        //   });
      
        //   if (response.ok) {
        //     // setIsAuthenticated(true);
        //     // navigate('/allmemes');
        //   } else {
        //     const errorData = await response.json();
        //     console.log(errorData);
        //     setIsAuthenticated(true);
        //     navigate('/allmemes');
        //   }
        // } catch (error) {
        //   console.error(error);
        // }
      }
      
    return ( 
    <div className="flex justify-center items-center ">
        <form class="w-full max-w-sm bg-slate-300 shodow-xl rounded-xl p-5 mt-20 "noValidate no-autocomplete
         onSubmit={handleSubmit}
         >
          <h1 className="text-2xl text-teal-500 text-center mb-6  font-bold">Signup As User </h1>
      
          <div class="md:flex md:items-center mb-6">   
            <div class="md:w-1/3">
              <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
              Username
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" 
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
              <input autoComplete="off" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" id="email" type="text" name="email"  placeholder="Jane Doe" required/>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Password
              </label>
            </div>
            <div class="md:w-2/3">
              <input autoComplete="off" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" id="password" type="password" name="password" placeholder="******************" required/>
            </div>
          </div>
      
          <div class="md:flex md:items-center mb-5">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button  class="shadow bg-slate-400 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Register
              </button>
            </div>
          </div>  
        </form>
  </div>
     );
}
 
export default SignUpUser;