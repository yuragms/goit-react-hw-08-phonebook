import { UserMenuContainer, UserName } from "./UserMenu.styled";



export default function UserMenu() {

  
    return (
      <UserMenuContainer>
        <UserName>Добро пожаловать, Вася</UserName>
        <button type="button" >
          Выйти
        </button>
      </UserMenuContainer>
    );
  }