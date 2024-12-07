import React, { useState } from "react";
import ExpenseTable from "../views/ExpenseTable";

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [isTable, setIsTable] = useState("true");
  return (
    <>
      <button
        onClick={() => setIsTable((prev) => !prev)}
        className="mb-6 py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
      >
        Toggle View
      </button>

      <ExpenseTable
        expenses={expenses}
        onDeleteExpense={onDeleteExpense}
        onEditExpense={onEditExpense}
        isTable={isTable}
      />
    </>
  );
};

export default ExpenseList;
