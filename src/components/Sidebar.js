import { useState } from "react";

const Sidebar = ({ setCategory }) => {

  const [categories, setCategories] = useState([
    "All",
    "Sports",
    "Tech",
    "Fashion",
    "politics",
    "Business",

  ]);

  const handleClick = (category) => {
    if (category === "All") {
      setCategory(null);
    } else {
      setCategory(category);
    }
  };

  return (
    <div className="p-4 text-center  h-screen w-40 bg-slate-50">
      <h2 className="text-2xl  font-semibold mb-3">Categories</h2>
      <ul className="p-5">
        {categories.map((category) => (
          <li
            key={category}
            className="cursor-pointer mb-3 text-teal-500 border-b border-gray-700 hover:text-teal-900"
            onClick={() => handleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
