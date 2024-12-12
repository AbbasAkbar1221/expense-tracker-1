import React from 'react'

const ExpenseCard = ({ expenses, onDeleteExpense, onEditExpense}) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {expenses.map((expense, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-medium text-gray-800">
                {expense.title}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Category:</strong> {expense.category}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Amount:</strong> ${expense.amount}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {expense.date}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Payment Mode:</strong> {expense.paymentMode}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Type:</strong>{" "}
                {expense.recurring ? "Recurring" : "One-time"}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Beneficiary:</strong> {expense.beneficiary}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tags:</strong> {expense.tags?.join(", ") || "None"}
              </p>
              <div className="flex space-x-44 mt-4">
                <button
                  onClick={() => onEditExpense(expense.id)}
                //   onClick={() => onEditExpense(index)}
                  className="py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteExpense(expense.id)}
                  
                //   onClick={() => onDeleteExpense(index)}
                  className=" py-2 px-4 bg-red-600 text-white font-medium rounded hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >   
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
  )
}

export default ExpenseCard
