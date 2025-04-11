import { useState } from 'react';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./components/App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");

const addExpense = (expense) => {
  setExpenses([...expenses, expense]);
};

const handleSearch = (term) => {
  setSearch(term.toLowerCase());
};

const filteredExpenses = expenses.filter((expense) => 
  expense.description.toLowerCase().includes(search.toLowerCase())
);

  return (
    <>
      <div className="appcontainer">
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} />
      </div>
    </>
  );
}

export default App;
