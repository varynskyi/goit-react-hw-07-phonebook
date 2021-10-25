import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/contacts-app/contacts-actions';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };
  

  return (
    <div className={s.container}>
      <p className={s.label}>
        Find contact
      </p>
      <input
        id="filter"
        className={s.input}
        onChange={onChangeFilter}
        type="text"
        name="filter"
        placeholder="find"
        autoComplete="off"
      />
    </div>
  );
};

export default Filter;

