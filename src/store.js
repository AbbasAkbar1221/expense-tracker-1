import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slice/expenseSlice";
import filterReducer from "./slice/filterSlice";

export default configureStore({
    reducer: {
        expenseKeyInStore: expenseReducer,
        filter: filterReducer,
    },
});
