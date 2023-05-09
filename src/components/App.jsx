import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
  loginInputId = nanoid();

  addNewContact = ({ id, name, number }) => {
    const contact = {
      id: this.loginInputId,
      name,
      number,
    };
    this.state.contacts.find(contact => contact.name === name)
      ? alert(`${name} is alredy in contact`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  filtrChangeHandler = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  deleteBtnHandler = loginInputId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== loginInputId
      ),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
      <div className={css.thumble}>
        <h1 className={css.title}>Phonebook</h1>

        <AddContactForm onSubmit={this.addNewContact}></AddContactForm>

        {contacts.length < 1 ? (
          <p className={css.textApp}> You have no contacts saved</p>
        ) : (
          <ContactList
            title="Contacts"
            contacts={visibleContacts}
            id={this.loginInputId}
            onDeleteBtn={this.deleteBtnHandler}
          ></ContactList>
        )}

        {contacts.length < 1 ? (
          <p className={css.textApp}> Please add contact</p>
        ) : (
          <Filter
            value={filter}
            changeFilter={this.filtrChangeHandler}
          ></Filter>
        )}
      </div>
       </div>
    );
  }
}
