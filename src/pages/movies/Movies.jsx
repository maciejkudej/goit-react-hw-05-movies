import { getMovieByQuery } from 'services/api';
import { MoviesList } from 'components/moviesList/MoviesList';
import { useEffect, useState } from 'react';
import { Radio } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import { Form } from 'components/form/form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './movies.module.css';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('q');

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovie = async () => {
      setError('');
      setIsLoading(true);
      try {
        const data = await getMovieByQuery(searchQuery);

        setMovies(data.results);
      } catch (error) {
        setError('There is something wrong in your action');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [searchQuery]);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <section>
      <div>
        <h1 className={css.title}>SEARCH MOVIE</h1>
        <Form />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </div>
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
