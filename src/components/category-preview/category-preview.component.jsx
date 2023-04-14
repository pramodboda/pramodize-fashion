import React from "react";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  CategoryTitle,
  CategoryPreviewBlock,
} from "./category-preview.styled";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      </h2>

      <CategoryPreviewBlock>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </CategoryPreviewBlock>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
