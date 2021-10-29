import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavLinkByStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2A363B;
  &.active {
    color: #E84A5F;
  }
`;

export {NavLinkByStyled };
