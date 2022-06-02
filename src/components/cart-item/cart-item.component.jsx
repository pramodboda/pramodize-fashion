import {
  CartItemContainer,
  CartItemImg,
  ItemDetails,
} from "./cart-item.styled";

const CartItem = ({ cartItem }) => {
  const { productName, quantity, imageUrl, price, color } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={`{productName}`} />

      <ItemDetails>
        <p>{productName}</p>
        <p>{color}</p>
        <p>
          {quantity} x ${price}
        </p>
        <span>Qty:{quantity}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
