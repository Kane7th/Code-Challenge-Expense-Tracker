// ExpenseTable.js
import React from 'react';

function ExpenseTable({ expenses, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
      {/* ... (additional headers) */}
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            {/* ... (additional cells) */}
            <td>
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}