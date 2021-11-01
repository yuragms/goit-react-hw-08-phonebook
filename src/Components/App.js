import ContainerApp from './Container/Container.jsx';
import { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './AppBar/AppBar';
import { authOperations } from '../redux/auth/auth-operations.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute.jsx';
import authSelectors from '../redux/auth/auth-selectors.js';
import { Spinner } from './Spinner/Spinner.js';

const HomeView = lazy(() => import('./Views/HomeView/HomeView.jsx'));
const RegisterView = lazy(() =>
  import('./Views/RegisterView/RegisterView.jsx'),
);
const LoginView = lazy(() => import('./Views/LoginView/LoginView.jsx'));
const ContactsView = lazy(() =>
  import('./Views/ContactsView/ContactsView.jsx'),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ContainerApp>
      {isFetchingCurrentUser ? (
        <Spinner />
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<h1>Загружаем....</h1>}>
            <Switch>
              <PublicRoute path="/" exact>
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" exact restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                path="/login"
                exact
                restricted
                redirectTo="/contacts"
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" exact redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </>
      )}
    </ContainerApp>
  );
}

export default App;
