// ExpenseForm.js
import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    // ... other fields
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ ...formData, id: Date.now() });
    // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields */}
    </form>
  );
}