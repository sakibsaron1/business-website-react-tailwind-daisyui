import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Review2 = () => {
  const [reviews, setReviews] = useReviews([]);
  const reviewhome = reviews.slice(0, 3);

  return (
    <div className="mx-4 mb-20 py-20" id="testimonial">
      <div className="testimonial-section container mx-auto">
        <h2 className="text-4xl md:text-6xl sm:text-6xl font-bold mb-4 text-black">
          Reviews
        </h2>
        <p className="mb-4 sm:mb-8 md:mb-8 mx-4 text-sm md:text-xl sm:text-xl text-[#717173]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-1 gap-4 mx-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 md:gap-4">
          {reviewhome.map((review) => (
            <Review review={review} key={review.id}></Review>
          ))}
        </div>
        <div className="button-area flex justify-end sm:mt-10 md:mt-10">
          <button className="btn btn-outline btn-primary">
            <Link to="/reviews">View All Reviews</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review2;
