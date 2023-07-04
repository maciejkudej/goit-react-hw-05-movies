import { useSearchParams } from 'react-router-dom';
import css from './form.module.css';

export const Form = () => {
  const [, setSearchParams] = useSearchParams();
  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ q: e.target.elements.query.value });
  };
  return (
    <form className={css.input} onSubmit={handleSubmit}>
      <label>
        <input type={'text'} name="query" />
        <button type="submit">SEARCH</button>
      </label>
    </form>
  );
};
