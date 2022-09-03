import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ConactForm/ContactForm';
import { Phonebook } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    let newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already exist in your contacts!`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const vizibleContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={vizibleContacts}
          onRemoveClick={this.removeContact}
        />
        <GlobalStyle />
      </Phonebook>
    );
  }
}
