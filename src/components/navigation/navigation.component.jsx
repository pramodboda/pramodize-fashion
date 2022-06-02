import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

// styles
import {
  NavigationBlock,
  BrandLogo,
  NavLink,
  ItemCount,
  NavControls,
} from "./navigation.styled.js";

// components
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

// contexts
import { UserContext } from "../../contexts/user.context.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCardOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <NavigationBlock className="navigation-block">
        <BrandLogo className="logo" to="/">
          Pramodize
        </BrandLogo>
        <div className="nav-links-block">
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
          <NavLink className="nav-link" to="/women">
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
        <NavControls className="nav-links-block">
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
          <div className="nav-link" onClick={toggleIsCardOpen}>
            <ShoppingBagOutlinedIcon />
            <ItemCount>{cartCount}</ItemCount>
          </div>
        </NavControls>
        {isCartOpen ? <CartDropdown /> : ""}
      </NavigationBlock>
      <Outlet />
    </div>
  );
};

export default Navigation;
