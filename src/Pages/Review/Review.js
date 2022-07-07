import React from "react";

const Review = (props) => {
  const { name, title, ratings, comment, image } = props.review;
  return (
    <div className="testimonial-box">
      <div className="testi-text">
        <p>{comment}</p>
        <div class="bubble6-arrow"></div>
      </div>
      <div className="name-box mt-8 flex">
        <img src={image} alt="" className="h-12 w-12 rounded-full" />
        <div className="testi-details ml-3 mt-1 text-left">
          <h4 className="text-sm mb-1 font-bold">{name}</h4>
          <p className="text-xs">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
