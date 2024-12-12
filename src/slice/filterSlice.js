import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterInSlice",
  initialState: {
    categoryArray: ["All"],
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
  },
});
export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;
