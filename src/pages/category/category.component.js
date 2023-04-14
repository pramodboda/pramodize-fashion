// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import { CategoryContainer } from "./category.styled";

const Category = () => {
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  // const [products, setProducts] = useState([categoriesMap[category]]);

  // useEffect(() => {
  //   console.log("effect fired calling setProducts");
  //   setProducts(categoriesMap[category]);
  // }, [category, categoriesMap]);

  const products = categoriesMap[category];

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
