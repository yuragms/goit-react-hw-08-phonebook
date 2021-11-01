import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../redux/auth/auth-selectors';


 export default function PrivateRoute({children, redirectTo = '/', ...routeProps}) {
     const isLoadingIn = useSelector(authSelectors.getIsLoggedIn);
     return (<Route {...routeProps}>
                 {isLoadingIn ? children: <Redirect to={redirectTo}/>}
            </Route>
     );
 }