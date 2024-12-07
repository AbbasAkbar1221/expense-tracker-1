import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import { ExpenseProvider } from './context/ExpenseContext';

function App() {
  return (
    <BrowserRouter>
      <ExpenseProvider>
        <div className="App bg-gray-100 min-h-screen flex flex-col">
          {/* Navigation Bar */}
          <nav className="bg-blue-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-center space-x-8">
              <NavLink
                to=""
                className={({ isActive }) =>
                  `text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition ${
                    isActive ? 'bg-blue-600' : ''
                  }`
                }
              >
                Add Expense
              </NavLink>
              <NavLink
                to="expenses"
                className={({ isActive }) =>
                  `text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition ${
                    isActive ? 'bg-blue-600' : ''
                  }`
                }
              >
                View Expenses
              </NavLink>
            </div>
          </nav>

          {/* Routes */}
          <div className="container mx-auto p-4 flex-grow">
            <Routes>
              <Route path="" element={<ExpenseFormPage />} />
              <Route path="expenses" element={<ExpenseListPage />} />
            </Routes>
          </div>
        </div>
      </ExpenseProvider>
    </BrowserRouter>
  );
}

export default App;
