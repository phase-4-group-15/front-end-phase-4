import { useState, useEffect } from "react";
import axios from "axios";

const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/advertisements")
      .then((response) => {
        setAdvertisements(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" text-gray-900 ">
      <div className="max-w-lg mx-auto px-4 py-8 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Advertisements</h2>
        {advertisements.length > 0 ? (
          advertisements.map((advertisement) => (
            <div
              key={advertisement.id}
              className="border border-gray-300 rounded-lg p-4 mb-4"
            >
              <h3 className="text-lg font-semibold mb-2">
                {advertisement.title}
              </h3>
              <p className="text-gray-700 mb-2">{advertisement.content}</p>
              <p className="text-gray-700 mb-2">{advertisement.genre}</p>
              <img
                src={advertisement.image}
                alt={advertisement.title}
                className="mb-2"
              />
              <p className="text-gray-700 mb-2">
                Released: {advertisement.release_date}
              </p>
              <p className="text-gray-700">
                Created by: {advertisement.user.username}
              </p>
            </div>
          ))
        ) : (
          <p>No advertisements found.</p>
        )}
      </div>
    </div>
  );
};

export default Advertisement;
