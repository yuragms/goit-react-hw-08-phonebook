import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import AuthNav from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu";
import { Header } from "./AppBar.styled";



export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return (
   <Header>
     <Navigation/>
     {isLoggedIn ? <UserMenu/>:<AuthNav/> }
   </Header>
  );
};
