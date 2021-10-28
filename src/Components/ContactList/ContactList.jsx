import React from "react";
import { useSelector } from 'react-redux';
import { getFilter } from "../../redux/phonebook/phonebook-selectors.js";
import {List, Item, Button,  } from "./Contactlist.styled.jsx";



const ContactList = ({ contacts, onDeleteContact }) => {

  const filter = useSelector(getFilter);
  
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  const filteredContactsSort = filteredContacts.sort((a, b) => a.name.localeCompare(b.name));



  return (
  <List>
    {filteredContactsSort.map(({ id, name, number }) => (
      <Item key={id}>
        <span>{name}:</span> <span>{number}</span>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </Item>
    ))}
  </List>
  );
};

export default ContactList;

