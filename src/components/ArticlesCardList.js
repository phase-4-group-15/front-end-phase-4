import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ArticlesCardList = ({ category, articles, setArticles  }) => {
    const navigate = useNavigate();
  
    // const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3004/articles')
        .then((response) => response.json())
        .then((data) => setArticles(data))
        .catch((error) => console.log(error));
    }, []);
  
    const filteredArticles = category
      ? articles.filter((article) => article.category === category)
      : articles;
  
    const handleLike = (id) => {
      fetch(`http://localhost:3004/articles/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: articles.find((article) => article.id === id).likes + 1 }),
      })
        .then((response) => response.json())
        .then((data) => setArticles(articles.map((article) => (article.id === data.id ? data : article))))
        .catch((error) => console.log(error));
    };
  
    const handleDislike = (id) => {
      fetch(`http://localhost:3004/articles/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dislikes: articles.find((article) => article.id === id).dislikes - 1 }),
      })
        .then((response) => response.json())
        .then((data) => setArticles(articles.map((article) => (article.id === data.id ? data : article))))
        .catch((error) => console.log(error));
    };
  
    const handleDelete = (id) => {
      fetch(`http://localhost:3004/articles/${id}`, { method: 'DELETE' })
        .then((response) => response.json())
        .then((data) => setArticles(articles.filter((article) => article.id !== id)))
        .catch((error) => console.log(error));
    };
  
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
        {filteredArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-5 relative">
            <div className="flex justify-between items-center">
              <Link
                to={`/articles/${article.id}`}
                className="text-xl font-semibold cursor-pointer hover:text-blue-500 border-b border-teal-600"
              >
                {article.title}
              </Link>
              <div className="text-sm font-medium text-teal-600">{article.category}</div>
            </div>
            <p className="text-gray-700 mt-2 mb-4">{`${article.description.slice(0, 150)}${
              article.description.length > 150 ? '...' : ''
            }`}</p>
            <div className="">
              <div className="flex justify-between border-teal-300  border-t">
                <div className="flex justify-around">
                  <button className="text-gray-500 hover:text-blue-500 mr-2" onClick={() => handleLike(article.id)}>
                    + {article.likes}
                  </button>
                  <button className="text-gray-500 hover:text-red-500 mr-2" onClick={() => handleDislike(article.id)}>
                    - {article.dislikes}
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-500 " onClick={() => handleDelete(article.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    );
  };
  

export default ArticlesCardList;
