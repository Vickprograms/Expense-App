import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({ description: "", amount: "", category: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.description && form.amount && form.category) {
      onAddExpense({ ...form, id: Date.now() });
      setForm({ description: "", amount: "", category: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
