
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { ContactForm, Label, Input, Button } from "./ContactForm.styled";
import { getContacts } from '../../redux/phonebook/phonebook-selectors';


export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] =  useState('');
  const contacts = useSelector(getContacts);
  const contact = { name, number };
  const dispatch = useDispatch();

  useEffect(() => {
    setName('');
    setNumber('');
  }, [contacts.length]);

 const nameInputId = uuidv4();
 const numberInputId = uuidv4();

  const handleChange = (e) => {
    const {name, value} = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

     default: return;

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isRepeatableContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isRepeatableContact) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContact(contact));
      reset();
    }

  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  
    return (
      <ContactForm onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            id={numberInputId}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    );
  
}
