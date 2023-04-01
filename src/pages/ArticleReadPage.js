import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import deleteIcon from "../images/icon-delete.svg"
import AddReviewForm from "./AddReviewForm";

const ArticleReadPage = () => {

  const [article, setArticle] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [showForm, setShowForm] = useState(false); 
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setArticle(data)
      })
      .catch(error => console.log(error))
  }, [id]);

  const handleDeleteReview = (reviewId) => {
    const updatedReviews = article.reviews.filter(review => review.id !== reviewId);
    setArticle({ ...article, reviews: updatedReviews });
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };
   
  const toggleForm = () => {
    setShowForm(!showForm);
  };


  if (!article) {
    return <div className="text-3xl text-blue-600 text-center">article check 1, 2 .....</div>
  }

  return (
    <div className=" p-4 w-3/4 flex justify-center items-center ml-40 mb-12">
      <div className="bg-white rounded-lg shadow-md p-5">
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 underline">{article.title}</h2>
          <img src={article.image} alt={article.title} className="w-full  mb-4"/>
          <p className="text-gray-700 mb-4  ">{article.description}</p>
        </div>

        <div className="mb-4 flex justify-between">
        <Link to="/articles" className="text-blue-500 text-2xl  hover:underline">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </Link>
          <button onClick={toggleReviews} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {showReviews ? 'Hide Reviews' : 'See Reviews'}
          </button>
          {/* <button onClick={toggleForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {showForm ? 'Hide Form' : 'See Form'}
          </button> */}
          {/* <button onClick={toggleForm} className="bg-blue-900"> 
            <span>create review</span>
            {showForm && <AddReviewForm setShowForm={setShowForm} showForm={showForm}/>}
          </button>  */}
        </div>

        {showReviews && (
          <div className=" rounded-lg  ">
            {article.reviews.length > 0 ? (
              article.reviews.map((review) => (
                <div key={review.id} className="border rounded-md p-1 m-2 bg-slate-50">
                  <div className="flex justify-between items-center rounded-md ">
                    <div className="flex">
                      <p className="mr-5"> rated: {review.rating}</p>
                      <p className="font-bold  ">by: {review.user.name}</p>
                    </div>
                    <button onClick={() => handleDeleteReview(review.id)} className=" cursor-hover">
                       <img src={deleteIcon} alt="delete" />
                    </button>
                  </div> 
                        
                  <p className="comment p-2">{review.comment}</p>
                </div>
              ))
            ) : (
              <div className="border rounded-md p-1 m-2 bg-slate-50">
                <p className="p-2">No reviews yet</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default ArticleReadPage;
