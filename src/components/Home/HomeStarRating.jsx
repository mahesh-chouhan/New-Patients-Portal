import React from "react";
// import { Rating } from 'react-simple-star-rating'
import { Rate } from 'antd';
function HomeStarRating() {
  return (
    <div>
        <span className="starRating" style={{fontWeight:"700" }}>
            Give your rate
            <Rate defaultValue={5}size={35} style={{color:"#ffcb3b"}} />
      
        </span>
    </div>
  );
}

export default HomeStarRating;
