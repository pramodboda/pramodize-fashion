// import SHOP_DATA from "../../shop-data.json";
import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductCardsContainer } from "./shop.styled";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <ProductCardsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductCardsContainer>
  );
};

export default Shop;
