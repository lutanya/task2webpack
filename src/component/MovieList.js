import React from "react";

import {Movie} from './Movie';

export class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onClickFacet() {
    this.setState({
      movies: "movies"
    });
  }
  render() {
    const movies = this.props.movies;
    console.log(movies);
    return (
      <div className="div-movie-list">
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Movie title={movie.title} src={movie.poster_path} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

