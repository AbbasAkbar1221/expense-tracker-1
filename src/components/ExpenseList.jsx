import React, { useState } from "react";
import ExpenseTable from "../views/ExpenseTable";
import ExpenseCard from "../views/ExpenseCard";
// import filterReducer from '../reducer/filterReducer'
import { setCategory } from '../slice/filterSlice'
import { useDispatch, useSelector } from "react-redux";



const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [isTable, setIsTable] = useState("true");
  const selectedCategory = useSelector(state=> state.filter.categoryArray)
  const dispatch = useDispatch()
  // const [selectedCategory, dispatch] = useReducer(filterReducer, ["All"])
  // const [selectedCategory, setSelectedCategory] = useState(['All']);

  // Filter expenses based on the selected category
  const filteredExpenses =
    selectedCategory.length === 0  || selectedCategory.includes('All')
      ? expenses
      : expenses.filter((expense) => selectedCategory.includes(expense.category));

  // Get unique categories for the filter dropdown
  const categories = [
    "All",
    ...new Set(expenses.map((expense) => expense.category)),
  ];


  const handleCategoryChange = (category)=>{
    // dispatch({
    //   type: 'SET_CATEGORY',
    //   payload: {category, expenses}
    // })
    dispatch(setCategory({category, expenses}))
  }

  return (
    <>

      {/* Filter Checkboxes */}
      <div className="flex flex-wrap items-center justify-between">
        <label
          className="text-sm font-medium text-gray-600"
          htmlFor="category-filter"
        >
          Filter by Category:
        </label>
        <div className="ml-4 flex space-x-4">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`category-${category}`}
                value={category}
                checked={selectedCategory.includes(category)} // Check if category is selected
                onChange={(e) => handleCategoryChange(e.target.value)} // Handle category change
                className="mr-2"
              />
              <label htmlFor={`category-${category}`} className="text-sm">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsTable((prev) => !prev)}
        className="mb-6 py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
      >
        Toggle View
      </button>

      {isTable ? (
        <ExpenseTable
          expenses={filteredExpenses}
          onDeleteExpense={onDeleteExpense}
          onEditExpense={onEditExpense}
        />
      ) : (
        <ExpenseCard
          expenses={filteredExpenses}
          onDeleteExpense={onDeleteExpense}
          onEditExpense={onEditExpense}
        />
      )}
    </>
  );
};

export default ExpenseList;
