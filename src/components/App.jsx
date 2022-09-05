import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ConactForm/ContactForm';
import { Phonebook } from './App.styled';

export const App = () => {
  const isFirstLoad = useRef(true);

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (isFirstLoad.current) {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
        setContacts(parsedContacts);
      }
      isFirstLoad.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already exist in your contacts!`)
      : setContacts(state => [newContact, ...state]);
  };

  const removeContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const vizibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter value={filter} onChange={onChangeFilter} />
      ) : (
        <Box as="h2" display="block" mt="30px">
          There are no contacts in your phonebook!
        </Box>
      )}

      {contacts.length > 0 && (
        <ContactList
          contacts={vizibleContacts()}
          onRemoveClick={removeContact}
        />
      )}

      <GlobalStyle />
    </Phonebook>
  );
};
