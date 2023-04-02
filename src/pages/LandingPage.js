// import "./LandingPage.css"
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen">
      <div className=" flex items-center justify-around text-xl mt-0 mx-10">
        <div className="">
          <h1 className="text-blue-400  font-medium text-4xl">
            Welcome to our Article254 Website
          </h1>
          <p className="my-4">
            Has it been difficult to access your favourites article, Login to
            our website explore and create your articles. Don't sweat it!
            Article254 helps you to create your articles
          </p>
          <Link to="/login" className="border border-blue-400 rounded-2xl px-10 py-2 mr-8 text-base font-medium">
            Login Now
          </Link>
          <Link to="/signup"
            id="download"
            className="bg-blue-900 rounded-2xl px-10 py-2 text-base font-medium text-white"
          >
            Register 
          </Link>
        </div>
        <img className=""
          src=
          "https://i.postimg.cc/rwQ1TJ9V/output-onlinegiftools-1.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;
