import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutCartItem,
  CheckOutItemImg,
  CheckoutCartItemInfo,
  CheckoutCartItemClearIcon,
} from "./checkout-item.styled";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const { productName, quantity, imageUrl, price } = cartItem;

  return (
    <CheckoutCartItem>
      <CheckOutItemImg src={imageUrl} alt={productName} />
      <CheckoutCartItemInfo>
        <div>{productName}</div>
        Size:
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <Select
            displayEmpty
            size="small"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={26}>26</MenuItem>
            <MenuItem value={27}>27</MenuItem>
            <MenuItem value={28}>28</MenuItem>
            <MenuItem value={29}>29</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={31}>31</MenuItem>
            <MenuItem value={32}>32</MenuItem>
            <MenuItem value={34}>34</MenuItem>
          </Select>
        </FormControl>
        <div onClick={() => removeItemToCart(cartItem)}>
          <IconButton aria-label="delete" size="small">
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
        </div>
        <div>{quantity}</div>
        <div onClick={() => addItemToCart(cartItem)}>
          <IconButton aria-label="delete" size="small">
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </div>
        <div>${price}</div>
        <CheckoutCartItemClearIcon onClick={() => clearItemFromCart(cartItem)}>
          <IconButton aria-label="delete" size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </CheckoutCartItemClearIcon>
      </CheckoutCartItemInfo>
    </CheckoutCartItem>
  );
};

export default CheckoutItem;
