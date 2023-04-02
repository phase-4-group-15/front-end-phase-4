import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import deleteIcon from "../images/icon-delete.svg";
import AddReviewForm from "./AddReviewForm";
import axios from 'axios';


const ArticleReadPage = ({userId}) => {
  const [article, setArticle] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [showForm, setShowForm] = useState(false); 
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  // const user_id = 4

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
    axios.delete(`http://localhost:3000/reviews/${reviewId}`)
      .then(response => {
        const updatedReviews = article.reviews.filter(review => review.id !== reviewId);
        setArticle({ ...article, reviews: updatedReviews });
      })
      .catch(error => console.log(error))
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setShowForm(false);
  };
   
  const toggleForm = () => {
    setShowForm(!showForm);
    setShowReviews(false);
  };

  const handleSetArticle = (data) => {
    setArticle(data);
  };

  const onAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
    setArticle({ ...article, reviews: [...article.reviews, newReview] });
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

        {showForm && (
          <AddReviewForm   articleId={id}
          user_id={userId}
          onAddReview={onAddReview}
          setReviews={setReviews}
          setArticle={handleSetArticle}
          setShowForm={setShowForm}/>
        )}

        <div className="mb-4 flex justify-between">
          <Link to="/articles" className="text-blue-500 text-2xl  hover:underline">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </Link>
          <button onClick={toggleForm} className="border-blue-500 border hover:text-blue-700 text-gray-900 font-bold py-2 px-4 rounded"> 
            {showForm ? 'Hide Form' : 'give a review'}
          </button>
          <button onClick={toggleReviews} className="border border-blue-500 hover:text-blue-700 text-gray-900 font-bold py-2 px-4 rounded">
            {showReviews ? 'Hide Reviews' : 'See Reviews'}
          </button>
        </div>
        {showReviews && (
          <div className=" rounded-lg  ">
            {article.reviews.length > 0 ? (
              article.reviews.map((review) => (
                <div key={review.id} className="border rounded-md p-1 m-2 bg-slate-50">
                  <div className="flex justify-between items-center rounded-md ">
                    <div className="flex">
                       {review.rating && <p className="mr-5"> rated: {review.rating}</p>}
                      <p className="font-bold  ">by: {review.user?.name}</p>
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
