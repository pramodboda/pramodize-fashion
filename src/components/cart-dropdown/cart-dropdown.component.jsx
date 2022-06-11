import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      {cartItems ? (
        <Box sx={{ mb: "15px" }} fullWidth>
          <PrimaryButton fullWidth onClick={goToCheckoutHandler}>
            Go to checkout
          </PrimaryButton>
        </Box>
      ) : (
        "Nothing has been added to cart. Please continue shopping."
      )}

      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
