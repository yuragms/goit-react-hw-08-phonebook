import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";

import {List, Item, Button,  } from "./Contactlist.styled.jsx";





const ContactList = () => {

  const filteredContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  // const filter = useSelector(getFilter);
  
  // const filteredContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase()),
  // );

  const filteredContactsSort = filteredContacts.sort((a, b) => a.name.localeCompare(b.name));



  return (
  <List>
    {filteredContactsSort.map(({ id, name, number }) => (
      <Item key={id}>
        <span>{name}:</span> <span>{number}</span>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </Item>
    ))}
  </List>
  );
};

export default ContactList;

