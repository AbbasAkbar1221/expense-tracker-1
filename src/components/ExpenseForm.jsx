import React, { useState } from 'react';
import {
  DateInput,
  AmountInput,
  TitleInput,
  CategoryInput,
  PaymentModeInput,
  RecurringInput,
  BeneficiaryInput,
  TagsInput,
} from './Inputs';
import { useExpenseContext } from '../context/ExpenseContext';
import { useSelector } from 'react-redux';
import { selectAllExpenses } from '../slice/expenseSlice';

const emptyForm = () => ({
  date: new Date().toISOString().split('T')[0],
  amount: '',
  title: '',
  category: '',
  newCategory: '',
  paymentMode: 'Cash',
  recurring: false,
  beneficiary: 'Self',
  tags: '',
});

function formValuesFromLocalStorage(id, storage) {
  const expenses = storage;
  // const expense = expenses[ind]
  const expense = expenses.find((expense) => expense.id===id)
  const formValues = {
    ...expense,
    newCategory: '',
    tags: expense.tags?.join ? expense.tags.join(',') : expense.tags,
  };
  return formValues;
}

const ExpenseForm = ({ onSaveExpense }) => {
  const { editId } = useExpenseContext();
  const expense = useSelector(selectAllExpenses)
  const prefilledForm =
    editId > -1 ? formValuesFromLocalStorage(editId, expense) : emptyForm();
  const [formValues, setFormValues] = useState(prefilledForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      ...formValues,
      amount: +formValues.amount,
      category: formValues.category || formValues.newCategory,
      newCategory: undefined,
      tags: formValues.tags?.split(','),
    };
    onSaveExpense(expense, editId);
    setFormValues(emptyForm());
  };

  const [date, setDate] = [formValues.date, (val) => setFormValues((state) => ({ ...state, date: val }))];
  const [amount, setAmount] = [formValues.amount, (val) => setFormValues((state) => ({ ...state, amount: val }))];
  const [title, setTitle] = [formValues.title, (val) => setFormValues((state) => ({ ...state, title: val }))];
  const [category, setCategory] = [formValues.category, (val) => setFormValues((state) => ({ ...state, category: val }))];
  const [newCategory, setNewCategory] = [formValues.newCategory, (val) => setFormValues((state) => ({ ...state, newCategory: val }))];
  const [paymentMode, setPaymentMode] = [formValues.paymentMode, (val) => setFormValues((state) => ({ ...state, paymentMode: val }))];
  const [recurring, setRecurring] = [formValues.recurring, (val) => setFormValues((state) => ({ ...state, recurring: val }))];
  const [beneficiary, setBeneficiary] = [formValues.beneficiary, (val) => setFormValues((state) => ({ ...state, beneficiary: val }))];
  const [tags, setTags] = [formValues.tags, (val) => setFormValues((state) => ({ ...state, tags: val }))];

  const submitButtonText = editId > -1 ? 'Edit Expense' : 'Add Expense';

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-lg">
      <DateInput value={date} onChange={setDate} />
      <AmountInput value={amount} onChange={setAmount} />
      <TitleInput value={title} onChange={setTitle} />
      <CategoryInput
        selectedCategory={category}
        onChange={setCategory}
        newCategory={newCategory}
        onNewCategoryChange={setNewCategory}
      />
      <PaymentModeInput selectedMode={paymentMode} onChange={setPaymentMode} />
      <RecurringInput value={recurring} onChange={setRecurring} />
      <BeneficiaryInput selectedBeneficiary={beneficiary} onChange={setBeneficiary} />
      <TagsInput value={tags} onChange={setTags} />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {submitButtonText}
      </button>
    </form>
  );
};

export default ExpenseForm;
