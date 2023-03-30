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
    return <div className="text-3xl text-teal-600 text-center">article check 1, 2 .....</div>
  }

  return (
    <div className=" p-4 w-3/4 flex justify-center items-center ml-40 ">
      <div className="bg-white rounded-lg shadow-md p-5">
        <h2 className="text-3xl font-semibold mb-4">{article.title}</h2>
        <img src={article.image} alt={article.title} className="w-full  mb-4" />
        <p className="text-gray-700 mb-4">{article.description}</p>
        <div className="flex justify-between border-t pt-4">
          <Link to="/articles" className="text-blue-500 hover:underline">Back to Articles</Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleReadPage;
