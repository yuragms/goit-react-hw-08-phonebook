import ContainerApp from './Container/Container.jsx';
import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { Header } from './Header/Header';
// import { Navigation } from './Navigation/Navigation';
// import { Form } from './ContactForm/ContactForm.jsx';
// import { Title } from './Container/Container.styled.jsx';
// import ContactList from './ContactList/ContactList.jsx';
// import Filter from './Filter/Filter.jsx';
// import {
//   useFetchContactsQuery,
//   useDeleteContactsMutation,
// } from '../redux/phonebook/phonebookSlice.js';
// import { Spinner } from './Spinner/Spinner.js';
import AppBar from './AppBar/AppBar';
import HomeView from './Views/HomeView/HomeView.jsx';
import RegisterView from './Views/RegisterView/RegisterView.jsx';
import LoginView from './Views/LoginView/LoginView.jsx';
import ContactsView from './Views/ContactsView/ContactsView.jsx';
import { authOperations } from '../redux/auth/auth-operations.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ContainerApp>
      <AppBar />
      <Suspense fallback={<h1>Загружаем....</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/register" exact>
            <RegisterView />
          </Route>
          <Route path="/login" exact>
            <LoginView />
          </Route>
          <Route path="/contacts" exact>
            <ContactsView />
          </Route>
        </Switch>
      </Suspense>
      {/* <Title>Phonebook</Title>
      <Form />
      {isFetching && <Spinner />}
      <Title>Contacts</Title>
      <Filter />
      {data && <ContactList contacts={data} onDeleteContact={deleteContacts} />} */}
    </ContainerApp>
  );
}

export default App;
