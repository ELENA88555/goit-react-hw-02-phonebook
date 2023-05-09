import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import React from 'react';



export const ContactList = ({contacts, onDeleteBtn}) => {

  return ( 
    <ul className={css.list}>
      {contacts.map(({id,name, number})=>(
        <li className={css.item} key={id}>
        <p className={css.text}>
          {name} 
        </p>
        <p className={css.text}>
        {number}
        </p>
        <button
         type="button"
          className={css.btnDelete}
          onClick={() => onDeleteBtn(id)}
        >
          Delete
        </button>
      </li>
      ))}
       </ul>
  );
};



ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};


