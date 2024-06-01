import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {

  return (
    <div className={css.searchWrapper}>
        <label>
            Find contacts by name
            <input
                className={css.searchInput}
                type="text"
                value={value}
                onChange={onChange}
            />
        </label>
    </div>
  );
}

export default SearchBox;