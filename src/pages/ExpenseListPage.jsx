import React from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import { useExpenseContext } from '../context/ExpenseContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, selectAllExpenses } from '../slice/expenseSlice';

const ExpenseListPage = () => {
    const { setEditId } = useExpenseContext();
    const expenses = useSelector(selectAllExpenses)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleDeleteExpense = (id) => {
        dispatch(deleteExpense({id}))
    };

    const handleEditExpense = (id) => {
        setEditId(id);
        // setEditIndex(ind);
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                Expense List
            </h1>
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
                {expenses.length > 0 ? (
                    <ExpenseList
                        expenses={expenses}
                        onDeleteExpense={handleDeleteExpense}
                        onEditExpense={handleEditExpense}
                    />
                ) : (
                    <p className="text-gray-600 text-center">
                        No expenses found. Add some to get started!
                    </p>
                )}
            </div>
        </div>
    );
};

export default ExpenseListPage;
