import { Link } from "react-router-dom";

const Sidebar = ({ setCategory }) => {
  const categories = [
    { id: "tech", label: "Tech" },
    { id: "politics", label: "Politics" },
    { id: "business", label: "Business" },
    { id: "comedy", label: "Comedy" },
    { id: "fashion", label: "Fashion" },
  ];

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <div className="bg-gray-100 py-4 rounded-md shadow-md mt-2 text-xl text-teal-500 px-4 h-screen">
      <div className="text-gray-500 uppercase font-semibold mb-4">Categories</div>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <Link
              to={`/category/${category.id}`}
              onClick={() => handleClick(category.label)}
              className="hover:text-gray-800"
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;