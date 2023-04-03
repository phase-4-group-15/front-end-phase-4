import {  useEffect } from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../images/icon-delete.svg"

const ArticlesCardList = ({ category, articles, setArticles,  userId }) => {


    useEffect(() => {
      fetch('https://api-article254.onrender.com/articles')
        .then((response) => response.json())
        .then((data) => {
           console.log(data)
           setArticles(data)
          })
        .catch((error) => console.log(error));
    }, []);
  
    const filteredArticles = category
      ? articles.filter((article) => article.category === category)
      : articles;

      if (filteredArticles.length === 0) {
        return <div className="text-2xl ml-12 text-red-700">No article of this category</div>;
      }
  
    const handleLike = (id) => {
      fetch(`https://api-article254.onrender.com/articles/${id}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: articles.find((article) => article.id === id).likes + 1 }),
      })
        .then((response) => response.json())
        .then((data) => setArticles(articles.map((article) => (article.id === data.id ? data : article))))
        .catch((error) => console.log(error));
    };
  
    const handleDislike = (id) => {
      fetch(`https://api-article254.onrender.com/articles/${id}/dislike`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dislikes: articles.find((article) => article.id === id).dislikes + 1 }),
      })
        .then((response) => response.json())
        .then((data) => setArticles(articles.map((article) => (article.id === data.id ? data : article))))
        .catch((error) => console.log(error));
    };
  
    const handleDelete = (id) => {
      fetch(`https://api-article254.onrender.com/articles/${id}`, { method: 'DELETE' })
        .then((response) => {
          if (response.ok) {
            console.log(response)
            setArticles(articles.filter((article) => article.id !== id));
          } else {
            throw new Error('Not your article');
          }
        })
        .catch((error) => alert(error.message));
    };
    
  
    return (
    <div className="grid grid-cols-3 gap-4 p-4">
        {filteredArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-5 relative">
            <div className="flex justify-between items-center">
              <Link
                to={`/articles/${article.id}`}
                className="text-xl font-semibold cursor-pointer hover:text-blue-500  border-blue-600"
              >
                {article.title}
              </Link>
              {/* <div className="text-sm font-medium text-teal-600">{article.category}</div> */}
            </div>
            <p className="text-gray-700 mt-2 mb-4">{`${article.description.slice(0, 100)}${
              article.description.length > 25 ? '...' : ''
            }`}</p>
            <div className="">
              <div className="flex justify-between border-blue-300  border-t">
                <div className="flex justify-around">
                  <button className="text-gray-500 hover:text-blue-500 mr-5 mt-3" onClick={() => handleLike(article.id)}>
                    <ion-icon name="thumbs-up-outline"></ion-icon>{article.likes}
                  </button>
                  <button className="text-gray-500 hover:text-red-500 mr-2 mt-3" onClick={() => handleDislike(article.id)}>
                    <ion-icon name="thumbs-down-outline"></ion-icon> {article.dislikes}
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-500 mt-3 " onClick={() => handleDelete(article.id)}>
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
    );
  };
  

export default ArticlesCardList;
