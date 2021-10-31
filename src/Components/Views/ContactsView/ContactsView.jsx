import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '../../ContactForm/ContactForm';
import { Title } from '../../Container/Container.styled';
import Filter from '../../Filter/Filter';
import ContactList from '../../ContactList/ContactList';
import { getIsLoading, getError } from '../../../redux/phonebook/phonebook-selectors';
import { fetchContact } from '../../../redux/phonebook/phonebook-operations';
import { Spinner } from '../../Spinner/Spinner';


export default function ContactsView() {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContact());
      }, [dispatch]);


    return (
        <>
          <Title>Phonebook</Title>
          <Form />
          {isLoading && <Spinner />}
          <Title>Contacts</Title>
          <Filter />
          {error && <h1>{error}</h1> }
          <ContactList  />
      </>
    );
};