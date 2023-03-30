import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const CreateArticle = () => {
    const navigate = useNavigate();
    
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Tech");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newArticle = { title, category, description, imageUrl };
    fetch("http://localhost:3004/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/articles");
        } else {
          throw new Error("Failed to create article.");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to create article.");
      });
  };
  
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-6 rounded-lg shadow-md bg-white"
      >
        <h2 className="text-2xl font-semibold mb-5">Create New Article</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="border border-gray-400 p-2 w-full rounded-md"
          >
            <option value="Tech">Tech</option>
            <option value="Business">Business</option>
            <option value="Politics">Politics</option>
            <option value="Fashion">Fashion</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="border border-gray-400 p-2 w-full rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Article
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
