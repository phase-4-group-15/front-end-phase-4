import React, { useState } from 'react';
import axios from 'axios';

const AddReviewForm = ({setArticle, user_id, articleId, setReviews, reviews, onAddReview, setShowForm }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [errors, setErrors] = useState('');


  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('review[user_id]', user_id);
    formData.append('review[article_id]', articleId);
    formData.append('review[comment]', comment);
    formData.append('review[rating]', rating);

    axios.post('https://api-article254.onrender.com/reviews', formData)
      .then((response) => {
        if (response.status === 201) {
          setArticle(response.data);
          setComment('');
          setRating('');
          onAddReview();
          setShowForm(false);
          setReviews([...reviews, response.data.review]);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrors(error.response.data.errors)
      });
  };

  return (
    <div className='flex justify-center m-10'>
      <form className="p-3 bg-blue-50 rounded-md w-full " onSubmit={handleSubmit}>

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

        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2 font-semibold text-gray-700">Comment</label>
          <textarea
            id="comment"
            name="comment"
            className="w-full p-2 border border-gray-400 rounded-md"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2 font-semibold text-gray-700">Rating (optional)</label>
          <select
            id="rating"
            name="rating"
            className="w-full p-2 border border-gray-400 rounded-md"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="">--Select rating--</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default AddReviewForm;
