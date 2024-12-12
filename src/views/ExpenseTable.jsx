import React from 'react'

const ExpenseTable = ({reverse, expenses, onDeleteExpense, onEditExpense }) => {
  const viewExpense = reverse? [...expenses].reverse() : expenses
  return (
    <>
   
    <table className="min-w-full bg-white shadow-xl rounded-lg overflow-hidden">
      <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
        <tr>
          <th className="py-3 px-6 text-left font-medium">Title</th>
          <th className="py-3 px-6 text-left font-medium">Category</th>
          <th className="py-3 px-6 text-left font-medium">Amount</th>
          <th className="py-3 px-6 text-left font-medium">Date</th>
          <th className="py-3 px-6 text-left font-medium">Payment Mode</th>
          <th className="py-3 px-6 text-left font-medium">Type</th>
          <th className="py-3 px-6 text-left font-medium">Beneficiary</th>
          <th className="py-3 px-6 text-left font-medium">Tags</th>
          <th className="py-3 px-6 text-left font-medium">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* {expenses.map((expense, index) => ( */}
        {viewExpense.map((expense, index) => (
          <tr
            key={index}
            className="border-b border-gray-200 hover:bg-gray-100 text-sm"
          >
            <td className="py-3 px-6 text-gray-800">{expense.title}</td>
            <td className="py-3 px-6 text-gray-800">{expense.category}</td>
            <td className="py-3 px-6 text-gray-800">${expense.amount}</td>
            <td className="py-3 px-6 text-gray-800">{expense.date}</td>
            <td className="py-3 px-6 text-gray-800">{expense.paymentMode}</td>
            <td className="py-3 px-6 text-gray-800">
              {expense.recurring ? 'Recurring' : 'One-time'}
            </td>
            <td className="py-3 px-6 text-gray-800">{expense.beneficiary}</td>
            <td className="py-3 px-6 text-gray-800">
              {expense.tags?.join(', ') || 'None'}
            </td>
            <td className="py-3 px-6 flex space-x-2">
              <button
                onClick={() => onEditExpense(expense.id)}
                // onClick={() => onEditExpense(index)}
                className="py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Edit
              </button>
              <button
                // onClick={() => onDeleteExpense(index)}
                onClick={() => onDeleteExpense(expense.id)}
                className="py-2 px-4 bg-red-600 text-white font-medium rounded hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
 
    </>
  )
}

export default ExpenseTable
