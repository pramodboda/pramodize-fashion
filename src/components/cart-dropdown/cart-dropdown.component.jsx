import { useContext } from "react";

// styles
import { CartDropdownContainer } from "./cart-dropdown.styled";
// components
import Box from "@mui/material/Box";
import PrimaryButton from "../PramodizeUIComponents/Buttons/PrimaryButton/primary-button.component";
import CartItem from "../cart-item/cart-item.component";

//contexts
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <Box sx={{ mb: "15px" }} fullWidth>
        <PrimaryButton fullWidth>Go to checkout</PrimaryButton>
      </Box>
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
