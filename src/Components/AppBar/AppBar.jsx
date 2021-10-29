import AuthNav from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu";
import { Header } from "./AppBar.styled";



export default function AppBar() {
  
  return (
   <Header>
     <Navigation/>
     <AuthNav/>
     <UserMenu/>
   </Header>
  );
};
