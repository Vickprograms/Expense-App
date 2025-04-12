import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, date: new Date().toISOString().split("T")[0] }]);
  };

  const handleDelete = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-black text-white px-6 py-4">
        <h1 className="text-2xl font-bold">Expense Tracker</h1>
        <p className="text-sm">Start keeping control of your finances with this. Record, categorize and analyze your spending.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <div className="md:col-span-1 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="md:col-span-3">
          <input
            type="text"
            placeholder="Search expenses..."
            className="w-full mb-4 p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default App;
