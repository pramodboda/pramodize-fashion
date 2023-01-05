import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import { CategoryContainer } from "./category.styled";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState([categoriesMap[category]]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h1>{category.toUpperCase()}</h1>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
