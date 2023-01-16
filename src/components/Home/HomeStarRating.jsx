import React from "react";
import { Rating } from 'react-simple-star-rating'
function HomeStarRating() {
  return (
    <div>
        <span className="starRating" style={{fontWeight:"700" }}>
            Give your rate

      <Rating
        className="star"
        size={26}
        />
        </span>
    </div>
  );
}

export default HomeStarRating;
