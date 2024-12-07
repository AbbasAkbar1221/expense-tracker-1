import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';
import { useExpenseContext } from '../context/ExpenseContext';

const ExpenseFormPage = () => {
    const { expense, dispatch, editIndex, setEditIndex } = useExpenseContext();
    const navigate = useNavigate();

    const handleSaveExpense = (expense, ind) => {
        if (ind > -1) {
            dispatch({
                type: "EDIT",
                payload: {expense, ind}
            })
        } else {
            dispatch({
                type:"ADD",
                payload:{expense}
            })
        }
        setEditIndex(-1);
        navigate('/expenses');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Daily Expense Tracker
            </h1>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <ExpenseForm onSaveExpense={handleSaveExpense} key={editIndex} />
            </div>
        </div>
    );
};

export default ExpenseFormPage;
