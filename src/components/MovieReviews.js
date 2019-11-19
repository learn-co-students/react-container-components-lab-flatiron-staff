import React from 'react';

const MovieReviews = ({ reviews }) => (
  <ul className="review-list">
    { reviews.map((rev, idx) => <li className="review" key={idx}>{ rev.display_title }: { rev.summary_short }</li>) }
  </ul>
)

export default MovieReviews;
