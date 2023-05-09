import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from "./AddContactForm.module.css"

export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  loginInputId = nanoid();

  handleChangeFormNumber = event => {
    this.setState({ number: event.target.value });
    console.log(event.target.value);
  };

  handleChangeForm = event => {
    this.setState({ name: event.target.value });
    console.log(event.target.value);
  };



  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form}onSubmit={this.handleSubmitForm}>
        <div className={css.container}>
        <label  htmlFor={this.loginInputId}>
         <span className={css.labelName}>Name</span> </label>
        <input
          onChange={this.handleChangeForm}
          id={this.loginInputId}
          type="text"
          name={name}
          className={css.inputForm}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </div>


        <div className={css.container}>
          <label className={css.wrape} htmlFor={this.loginInputId}> <span className={css.labelName}> Number </span></label>
           
             <input
             className={css.inputForm}
              id={this.loginInputId}
              onChange={this.handleChangeFormNumber}
              type="tel"
              name={number}
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </div>
        <button type="submit"  className={css.btnForm} disabled ={!name.length>0 }> Add contact</button>
      </form>
    );
  }
}


