import React from "react";
import "swiper/css";
import img1 from "../../images/2 (1).jpg";
import img2 from "../../images/3 (1).jpg";
import img3 from "../../images/1-1.jpg";
import "./Reviews.css";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="py-10 sm:mx-4 sm:my-16 md:mx-4 md:my-16" id="testimonial">
      <div className="testimonial-section container mx-auto">
        <h2 className="text-4xl md:text-6xl sm:text-6xl font-bold mb-4 text-black">
          Reviews
        </h2>
        <p className="mb-4 sm:mb-8 md:mb-8 mx-4 text-sm md:text-xl sm:text-xl text-[#717173]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-1 gap-4 mx-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 md:gap-4">
          {reviews.map((review) => (
            <Review review={review} key={review.id}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
