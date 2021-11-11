import React, { useEffect, useState } from 'react';
import { GenreResponseProps } from './SideBar';
import { api } from '../services/api';
import { MovieCard } from './MovieCard';

export interface IMovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface IContent {
  genre: GenreResponseProps;
}

const Content: React.FC<IContent> = ({ genre }) => {

  const [movies, setMovies] = useState<IMovieProps[]>([]);
  useEffect(() => {
    api.get<IMovieProps[]>(`movies/?Genre_id=${genre.id}`).then(response => {
      setMovies(response.data);
    });
  }, [genre.id]);

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Content;