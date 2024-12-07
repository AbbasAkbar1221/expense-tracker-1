import React, { useState } from "react";
import ExpenseTable from "../views/ExpenseTable";
import ExpenseCard from "../views/ExpenseCard";

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [isTable, setIsTable] = useState("true");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter expenses based on the selected category
  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  // Get unique categories for the filter dropdown
  const categories = ["All", ...new Set(expenses.map((expense) => expense.category))];
  return (
    <>
     {/* Filter Dropdown */}
     <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-600" htmlFor="category-filter">
          Filter by Category:
        </label>
        <select
          id="category-filter"
          className="ml-4 py-2 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
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
