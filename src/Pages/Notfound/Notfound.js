import React from "react";
import img from "../../images/404.jpg";

const Notfound = () => {
  return (
    <div className="error-area mt-8">
      <img src={img} alt="" className="max-h-96 max-w-full mx-auto" />
    </div>
  );
};

export default Notfound;
