import {  Link } from "react-router-dom"
import { useNavigate} from "react-router-dom"

const Navbar = ({isAuthenticated, setIsAuthenticated}) => {

    const navigate = useNavigate()

    function handleLogout() {
        fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            // setUser(null);
            setIsAuthenticated(false);
            navigate("/login")
          }
        });
      }

    return ( 
          
    <nav className="bg-transparent border  shadow-lg flex items-center justify-around flex-wrap p-3 md:border-slate-100 md:border-b-2 md:border-t-0 md:border-r-0 md:border-l-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <Link to="/"className="font-semibold text-2xl text-blue-500 tracking-tight">Article254</Link>
        </div>
        <div className="flex items-center flex-shrink-0 text-blue-400 font-bold justify-center">
          <Link to="/"  exact className=" ml-5">Home</Link>
          {/* <Link to="/articles"  exact className="ml-5">Articles</Link> */}
         
          {isAuthenticated ? ( 
              <>
                <Link to="/articles"  exact className="ml-5">articles</Link>
                <Link to="/createarticle"  exact className="ml-5"> create Articles</Link>
                <Link  onClick={handleLogout} to="/logout" exact className="ml-5">Logout</Link>
                <Link to='/AddReview'>AddRReview</Link>
              </>
            ):(
              <>
               <Link to="/login" className="ml-8">Login</Link>
               <Link to="/signup" className="ml-8">Signup</Link>
              </>
            )
          }
           </div>
           {/* {isAuthenticated ? (
            <div className="flex">
             
              <p className="text-teal-500 font-semibold text-2xl"> {username}</p>
              <img src={profile} alt="the username" className="w-8 ml-4" />
            </div>
          ) : null} */}
      </nav>
      );
}
 
export default Navbar;