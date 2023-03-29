import {  Link } from "react-router-dom"

const Sidebar = () => {
    return ( 
     <div className="bg-gray-100 py-4 px-4">
        <div className="text-gray-500 uppercase font-semibold mb-4">Categories</div>
        <ul>
          <li className="mb-2">
            <Link to="/category/tech" className="hover:text-gray-800">Tech</Link>
          </li>
          <li className="mb-2">
            <Link to="/category/politics" className="hover:text-gray-800">Politics</Link>
          </li>
          <li className="mb-2">
            <Link to="/category/business" className="hover:text-gray-800">Business</Link>
          </li>
          <li className="mb-2">
            <Link to="/category/comedy" className="hover:text-gray-800">Comedy</Link>
          </li>
          <li className="mb-2">
            <Link to="/category/fashion" className="hover:text-gray-800">Fashion</Link>
          </li>
        </ul>
      </div>
     );
}
 
export default Sidebar;