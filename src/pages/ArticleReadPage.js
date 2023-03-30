import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ArticleReadPage = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3004/articles/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(error => console.log(error))
  }, [id]);

  if (!article) {
    return <div>Loading...</div>
  }

  return (
    <div className=" p-4 w-3/4 flex justify-center items-center ml-40 ">
      <div className="bg-white rounded-lg shadow-md p-5">
        <h2 className="text-3xl font-semibold mb-4">{article.title}</h2>
        <img src={article.image} alt={article.title} className="w-full  mb-4" />
        <p className="text-gray-700 mb-4">{article.description}</p>
        <div className="flex justify-between border-t pt-4">
          <div className="flex justify-around">
            <button className="text-gray-500 hover:text-blue-500 mr-2">{`+ ${article.likes}`}</button>
            <button className="text-gray-500 hover:text-red-500 mr-2">{`- ${article.dislikes}`}</button>
          </div>
          <Link to="/articles" className="text-blue-500 hover:underline">Back to Articles</Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleReadPage;
