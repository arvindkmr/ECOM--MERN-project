import React from 'react';
import profilePng from "../../images/1.jpg"

const ReviewCard = ({ review }) => {
  return (
    <div className="reviewCard">
    helo
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
    </div>
  );
};

export default ReviewCard;
