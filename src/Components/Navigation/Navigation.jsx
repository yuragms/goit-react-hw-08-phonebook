import { NavLinkByStyled } from './Navigation.styled.jsx';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors.js';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLinkByStyled to="/" exact>
        Главная
      </NavLinkByStyled>
  {isLoggedIn && (
      <NavLinkByStyled to="/contacts" exact>
        Телефонная книга
      </NavLinkByStyled>
  )}
    </nav>
  );
};

export { Navigation };
