import React from 'react';

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{expense.description}</td>
              <td className="px-4 py-2">{expense.category}</td>
              <td className="px-4 py-2">${expense.amount.toFixed(2)}</td>
              <td className="px-4 py-2">{expense.date}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
