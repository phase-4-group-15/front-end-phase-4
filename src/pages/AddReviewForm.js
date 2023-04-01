import React, { useState } from 'react';

const AddReviewForm = ({ onSubmit }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ comment, rating });
    setComment('');
    setRating('');
  };

  return (
 <div className='flex justify-center m-10'>
    <form className="p-3 bg-blue-50 rounded-md w-1/3 " onSubmit={handleSubmit}>
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
