import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectChangeFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectChangeFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <h2 className={css.title}>Find contacts</h2>
      <input
        className={css.field}
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='Search contacts'
      />
    </div>
  );
};

export default SearchBox;
