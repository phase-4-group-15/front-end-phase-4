import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const CreateArticle = ({userId}) => {
    const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Technology");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState("");

 console.log(userId)

//  const handleSubmit = (event) => {
//   event.preventDefault();

//   const newArticle = { title, category, description, image, userId };

//   axios.post("http://localhost:3000/articles", newArticle, {
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((response) => {
//       console.log(newArticle)
//       console.log(response)
//       if (response.status === 201) {
//         navigate("/articles");
//       } else {
//         throw new Error("Failed to create article.");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       setError("Failed to create article.");
//     });
// };

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("category", category);
  formData.append("description", description);
  formData.append("image", image);
  formData.append("userId", userId);

  axios.post("http://localhost:3000/articles", formData)
    .then((response) => {
      console.log(response.data);
      navigate("/articles");
    })
    .catch((error) => {
      console.log(error);
      setErrors(error.response.data.errors);
    });
};

  return (
    <div className="flex  mt-3 justify-center mb-10">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-9 rounded-xl shadow-lg bg-white"
      >
        <h2 className="text-2xl text-center text-blue-500 font-semibold mb-2">Create New Article</h2>
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
        <div className="mb-2">
          <label htmlFor="title" className="block appearance-none text-gray-700 font-medium mb-1 leading-tight focus:outline-none focus:shadow-outline">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border border-blue-400 p-2 w-full rounded-md"
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
            className="border border-blue-400 p-2 w-full rounded-md "
          ></textarea>
        </div>
        <div className="mb-2">
          <label htmlFor="image" className="block text-gray-700 font-medium mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="border border-blue-400 p-2 w-full rounded-md"
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
            className="border border-blue-400 p-2 w-full rounded-md"
          >
            <option value="Technolgy">Technology</option>
            <option value="Food & Drink ">Food & Drink</option>
            <option value="Travel">Travel</option>
            <option value="Fitness">Fitness</option>
            <option value="Sports">Sports</option>
            <option value="Fashion">Fashion</option>
            <option value="Self Improvement">Self Improvement</option>
          </select>
        </div>
      
       
        <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Article
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
