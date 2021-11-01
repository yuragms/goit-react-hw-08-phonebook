import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../redux/auth/auth-selectors';


 export default function PublicRoute({children, restricted = false, redirectTo = '/', ...routeProps}) {
     const isLoadingIn = useSelector(authSelectors.getIsLoggedIn);
     const shouldRedirected = isLoadingIn && restricted;
     return (<Route {...routeProps}>
                 {shouldRedirected ? <Redirect to={redirectTo}/> : children}
            </Route>
     );
 }