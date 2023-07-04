import { useState, useEffect } from 'react';
import { getTranding } from 'services/api';
import { toast } from 'react-toastify';
import { Radio } from 'react-loader-spinner';
import { MoviesList } from 'components/moviesList/MoviesList';
import css from './home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      setError('');
      try {
        const data = await getTranding();
        setMovies(data.results);
      } catch (error) {
        setError('There is something wrong in your action');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, []);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <section>
      <h1 className={css.title}>Tranding today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && (
        <Radio
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={1}
          color="blue"
          secondaryColor="white"
        />
      )}
    </section>
  );
};
