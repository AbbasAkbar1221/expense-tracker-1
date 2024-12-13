import React, { useState } from "react";
import ExpenseTable from "../views/ExpenseTable";
import ExpenseCard from "../views/ExpenseCard";
import { reverseExpense, setCategory, setSortKey, sortArray } from '../slice/filterSlice'
import { useDispatch, useSelector } from "react-redux";

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [isTable, setIsTable] = useState("true");
  const selectedCategory = useSelector(state=> state.filter.categoryArray)
  const dispatch = useDispatch()
  const reverse = useSelector((state) => state.filter.reverse)
  const sortKey = useSelector((state) => state.filter.sortKey)

  // Filter expenses based on the selected category
  const filteredExpenses =
    selectedCategory.length === 0  || selectedCategory.includes('All')
      ? expenses
      : expenses.filter((expense) => selectedCategory.includes(expense.category));


  // Sort expenses based on the sortKey and reverse
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortKey) return 0; 
    const valueA = a[sortKey];
    const valueB = b[sortKey];

    if (valueA < valueB) return reverse ? 1 : -1;
    if (valueA > valueB) return reverse ? -1 : 1;
    return 0;
  });

  // Get unique categories for the filter dropdown
  const categories = [
    "All",
    ...new Set(expenses.map((expense) => expense.category)),
  ];



  const handleCategoryChange = (category)=>{
    dispatch(setCategory({category, expenses}))
  }

  const handleSortChange = (key)=>{
    dispatch(setSortKey({key}))
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

      <div className="flex flex-wrap items-center justify-between mb-4">
        <label
          className="text-sm font-medium text-gray-600"
          htmlFor="sort-filter"
        >
          Sort by:
        </label>
        <div className="ml-4 flex space-x-4">
          {sortArray.map((key, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`sort-${key}`}
                value={key}
                checked={sortKey===key}
                name="sortKey" 
                className="mr-2"
                onChange={(e)=> handleSortChange(e.target.value)}
              />
              <label htmlFor={`sort-${key}`} className="text-sm capitalize">
                {key}
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
      <button
        onClick={()=> {
          dispatch(reverseExpense())
        }}
        className="ml-2 mb-6 py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
      >
        {reverse? "Ascending Order" : "Descending Order" }
      </button>

      {isTable ? (
        <ExpenseTable
          expenses={sortedExpenses}
          onDeleteExpense={onDeleteExpense}
          onEditExpense={onEditExpense}
          // reverse={reverse}
        />
      ) : (
        <ExpenseCard
          expenses={sortedExpenses}
          onDeleteExpense={onDeleteExpense}
          onEditExpense={onEditExpense}
          // reverse = {reverse}
        />
      )}
    </>
  );
};

export default ExpenseList;
