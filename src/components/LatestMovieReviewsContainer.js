import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: [],
  }

  componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?')
      .then(res => res.json())
      .then(json => { this.setState({ reviews: json }) });
  }

  render() {
    return (
      <div className="latest-movie-reviews">< MovieReviews reviews={this.state.reviews} /></div>
    )
  }
}
