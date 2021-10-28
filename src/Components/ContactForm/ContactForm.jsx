
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useCreateContactsMutation, useFetchContactsQuery } from '../../redux/phonebook/phonebookSlice';
import { ContactForm, Label, Input, Button } from "./ContactForm.styled";

// import * as phonebookActions  from '../../redux/phonebook/phonebook-actions';
// import {connect } from 'react-redux';


export const Form = () => {
  const { data: contacts = []} = useFetchContactsQuery();
  const [createContact] = useCreateContactsMutation();

  const [name, setName] = useState('');
  const [number, setNumber] =  useState('');

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
      createContact({name, number});
    console.log(name, number);
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

// const mapStateToProps = state => {
//   const items = state.contacts;
//   console.log(items);
//  return items;

// };

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(phonebookActions.addContacts(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Form);





// import {useState} from 'react';
// import { useGetPokemonByNameQuery } from '../../redux/pokemon';
// import { Spinner } from '../Spinner/Spinner';

// export const Form =() => {
//   const [pokemonName, setPokemonName] = useState('');
//   const { data, error, isFetching, isError } = useGetPokemonByNameQuery(pokemonName,  {
//     skip: pokemonName === '',
//   });

//   const handleSubmit = e => {
//     e.preventDefault();
//     setPokemonName(e.currentTarget.elements.pokemonName.value);
//     e.currentTarget.reset();
//   };

//   console.log('isFetching', isFetching);
//   console.log('data', data);
//   console.log('error', error);

//   const showPokemonData = data && !isFetching && !isError;

//   return (
//     <>
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <input type="text" name="pokemonName"/>
//       <button type="submit">Search</button>
//     </form>
//     {isFetching && <Spinner />}

//     {isError && <p>{error.data}</p>}
//     {showPokemonData && <p>{data.name}</p>}
//     </>
//   );


// };
