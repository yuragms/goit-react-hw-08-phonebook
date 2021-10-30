import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authOperations } from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import { UserMenuContainer, UserName } from "./UserMenu.styled";



export default function UserMenu() {
const Username = useSelector(authSelectors.getUsername);
const dispatch = useDispatch();
  
    return (
      <UserMenuContainer>
        <UserName>Добро пожаловать, {Username}</UserName>
        <button
          type="button"
          onClick={()=> dispatch(authOperations.logOut())} >
          Выйти
        </button>
      </UserMenuContainer>
    );
  }