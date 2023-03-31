import { useState } from "react";

import {  useNavigate } from "react-router-dom";

const CreateArticle = ({userId}) => {
    const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Tech");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_id = userId
    const newArticle = { title, category, description, imageUrl, user_id };

    fetch("http://localhost:3000/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    })
      .then((response) => {
        console.log(newArticle)
        console.log(response)
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
    <div className="flex  mt-3 justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-9 rounded-xl shadow-lg bg-white"
      >
        <h2 className="text-2xl text-center text-teal-500 font-semibold mb-2">Create New Article</h2>
        <div className="mb-2">
          <label htmlFor="title" className="block appearance-none text-gray-700 font-medium mb-1 leading-tight focus:outline-none focus:shadow-outline">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border border-teal-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows="9"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="border border-teal-400 p-2 w-full rounded-md "
          ></textarea>
        </div>
        <div className="mb-2">
          <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            className="border border-teal-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="category" className="block text-gray-700 font-medium mb-1">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="border border-teal-400 p-2 w-full rounded-md"
          >
            <option value="Tech">Tech</option>
            <option value="Business">Business</option>
            <option value="Politics">Politics</option>
            <option value="Fashion">Fashion</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
      
       
        <button type="submit" className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Create Article
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
