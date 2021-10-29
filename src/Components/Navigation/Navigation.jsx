import { NavLinkByStyled } from './Navigation.styled.jsx';

const Navigation = () => {
  return (
    <nav>
      <NavLinkByStyled to="/" exact>
        Главная
      </NavLinkByStyled>

      <NavLinkByStyled to="/contacts" exact>
        Телефонная книга
      </NavLinkByStyled>
    </nav>
  );
};

export { Navigation };
