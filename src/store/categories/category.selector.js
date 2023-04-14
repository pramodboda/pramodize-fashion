// // Reselect is a library it creates for us a memoized "selector" functions. Commonly used with Redux, but usable with any plain JS immutable data as well.
// import { createSelector } from "reselect";

// const selectCategoryReducer = (state) => state.categories;

// // This is a memoized selector
// // "[]" - This is a input selector,
// // And "()=>{}" - this is a output selector.
// export const selectCategories = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => {
//     console.log("Selector 2 Fires");
//     categoriesSlice.fashion_categories;
//   }
// );

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (fashion_categories) => {
//     console.log("Selector 2 Fires");
//     return fashion_categories.reduce((acc, category) => {
//       const { title, products } = category;
//       acc[title.toLowerCase()] = products;
//       return acc;
//     }, {});
//   }
// );

export const selectCategoriesMap = (state) =>
  state.categories.fashion_categories.reduce((acc, category) => {
    const { title, products } = category;
    acc[title.toLowerCase()] = products;
    return acc;
  }, {});
