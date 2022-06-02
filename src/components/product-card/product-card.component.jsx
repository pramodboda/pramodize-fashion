import { useContext } from "react";

import {
  ProductCardContainer,
  ProductCardImgContainer,
  ProductCardImg,
  ProductCardInfo,
  AddToBagBtn,
} from "./product-card.styled";

//Contexts
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { imageUrl, productBrandName, productName, price, color } = product;

  const addItemToCartHandler = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductCardImgContainer>
        <ProductCardImg src={imageUrl} alt={`${productName}`} />
        <AddToBagBtn className="add-to-bag-btn" onClick={addItemToCartHandler}>
          Add to bag
        </AddToBagBtn>
      </ProductCardImgContainer>

      <ProductCardInfo>
        <span>{productBrandName}</span>
        <br />
        <span>{productName}</span>
        <br />
        {color ? <span>{color}</span> : "-"}
        <br />
        <span>{price}</span>
        <br />
      </ProductCardInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
