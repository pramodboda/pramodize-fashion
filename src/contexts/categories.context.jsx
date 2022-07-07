import { createContext, useState, useEffect } from "react";
import {
  // Uncomment 1: if you need to add products data to firebase and search for uncomment #2 and #3
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

// Uncomment 2: if you need to add products data to firebase and search for uncomment #3
// import PRODUCTS_DATA from "../shop-data.json";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // Uncomment 3: if you need to add products data to firebase, then save the file and comment back this blocks again
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", PRODUCTS_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("categoryMap:", categoryMap);

      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
