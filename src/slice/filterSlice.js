import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterInSlice",
  initialState: {
    categoryArray: ["All"],
    reverse: false,
    sortKey: null,
  },
  reducers: {
    setCategory(state, action) {
        const { category } = action.payload;
  
        let updatedCategories;
        if (category === "All") {
          updatedCategories = state.categoryArray.includes("All") ? [] : ["All"];
        } else if (state.categoryArray.includes(category)) {
          updatedCategories = state.categoryArray.filter((item) => item !== category);
        } else {
          updatedCategories = state.categoryArray.filter((item) => item !== "All");
          updatedCategories.push(category);
        }
  
        state.categoryArray = updatedCategories.length === 0 ? ["All"] : updatedCategories;
      },
      reverseExpense(state, action){
       state.reverse = !state.reverse
      },
      setSortKey(state, action){
        const {key} = action.payload
        state.sortKey=key
      }
  },
});
export const { setCategory, reverseExpense, setSortKey } = filterSlice.actions;
export default filterSlice.reducer;

export const sortArray = ["amount", "date", "title", "category"]