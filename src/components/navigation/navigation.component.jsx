import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { NavigationBlock, BrandLogo, NavLink } from "./navigation.styled.js";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { UserContext } from "../../contexts/user.context.jsx";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <NavigationBlock className="navigation-block">
        <BrandLogo className="logo" to="/">
          Pramodize
        </BrandLogo>
        <div className="nav-links-block">
          <NavLink className="nav-link" to="/Women">
            Women
          </NavLink>
          <NavLink className="nav-link" to="/men">
            Men
          </NavLink>
          <NavLink className="nav-link" to="/kids">
            Kids
          </NavLink>
          <NavLink className="nav-link" to="/denim">
            Denim
          </NavLink>
          <NavLink className="nav-link nav-link-sale" to="/sale">
            Sale
          </NavLink>
        </div>

        <div className="nav-links-block">
          {currentUser ? (
            <NavLink className="nav-link" to="" onClick={signOutUser}>
              Logout
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SignIn
            </NavLink>
          )}

          <NavLink className="nav-link nav-link-icon" to="">
            <FavoriteBorderOutlinedIcon />
          </NavLink>
          <NavLink className="nav-link" to="">
            <ShoppingBagOutlinedIcon />
          </NavLink>
        </div>
      </NavigationBlock>
      <Outlet />
    </div>
  );
};

export default Navigation;
