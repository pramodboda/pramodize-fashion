import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

// Getting data from the redux Or Extract data out of redux
import { useSelector } from "react-redux";

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

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";

// contexts
// import { UserContext } from "../../contexts/user.context.jsx";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CartContext } from "../../contexts/cart.context.jsx";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // console.log(currentUser);
  // const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCardOpen = () => {
    console.log("===currentUser===", currentUser);
    setIsCartOpen(!isCartOpen);
  };

  // Helper function for userFirstName
  const userFirstName = () => {
    if (currentUser) {
      const userNameWords = currentUser.displayName.split(" ");
      return userNameWords[0];
    }
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
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src={currentUser.photoURL} />
              </StyledBadge>
              {currentUser ? userFirstName() : null}
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
