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

  // Uncomment 3: if you need to add products data to firebase,
  // Then save the file and comment back this blocks again.
  // Then comment: comment 4 useEffect hook, there should not be two useEffects in one file right?
  // useEffect(() => {
  //   addCollectionAndDocuments("fashion_categories", PRODUCTS_DATA);
  // }, []);

  // comment 4: if you need to add products data to firebase, then save the file and uncomment back this block again, next: read comment 5.
  // comment 5: goto App.js file and uncomment 'CategoriesProvider', then save the file and once your data saved in firebase. undo all the step till now what you have done.
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
