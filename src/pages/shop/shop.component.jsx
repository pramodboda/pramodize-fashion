// import SHOP_DATA from "../../shop-data.json";

import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category.components";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
