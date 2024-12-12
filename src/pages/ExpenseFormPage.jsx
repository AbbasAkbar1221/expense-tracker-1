import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';
import { useExpenseContext } from '../context/ExpenseContext';
import { useDispatch } from 'react-redux';
import { addExpense, editExpense } from '../slice/expenseSlice';

const ExpenseFormPage = () => {
    const { editId, setEditId } = useExpenseContext();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSaveExpense = (expense, id) => {
        if (id > -1) {
            dispatch( editExpense({id,expense}) )
        } else {
            dispatch(addExpense({ expense }));
        }
        setEditId(-1);
        navigate('/expenses');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Daily Expense Tracker
            </h1>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <ExpenseForm onSaveExpense={handleSaveExpense}  key={editId} />
            </div>
        </div>
    );
};

export default ExpenseFormPage;
