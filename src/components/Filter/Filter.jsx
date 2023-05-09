import css from "./Filter.module.css"
import PropTypes from 'prop-types';



export const Filter = ({ value, changeFilter }) => {
  return (
    <div className={css.labelFilter}>
      <p className={css.textFilter}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={changeFilter}
      />
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired
}