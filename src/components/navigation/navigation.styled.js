import styled from "styled-components";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const PrimaryC1 = deepPurple[500];
export const NavigationBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  padding: 15px;
`;

export const BrandLogo = styled(Link)`
  font-family: "DM Serif Display", serif;
  text-decoration: none;
  font-size: 1.8rem;
  color: #1e1e1e;
`;

export const NavLink = styled(Link)`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  /* border: 1px solid red; */
  color: #1e1e1e;
  font-weight: 600;
  padding: 0.6rem;
  vertical-align: middle;

  transition: all ease-in-out 0.3s;
  &:hover {
    color: ${PrimaryC1};
    border-bottom: 4px solid ${PrimaryC1};
  }
  &.nav-link-sale {
    color: red;
    &:hover {
      /* color: ${PrimaryC1}; */
      border-bottom: 4px solid red;
    }
  }
`;
