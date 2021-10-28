import ContainerApp from './Container/Container.jsx';
import { Form } from './ContactForm/ContactForm.jsx';
import { Title } from './Container/Container.styled.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from '../redux/phonebook/phonebookSlice.js';
import { Spinner } from './Spinner/Spinner.js';

function App() {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();
  return (
    <ContainerApp>
      <Title>Phonebook</Title>
      <Form />
      {isFetching && <Spinner />}
      <Title>Contacts</Title>
      <Filter />
      {data && <ContactList contacts={data} onDeleteContact={deleteContacts} />}
    </ContainerApp>
  );
}

export default App;
