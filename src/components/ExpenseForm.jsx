import { useState } from 'react';
import crypto from 'crypto';

function ExpenseForm({ onAddExpense }) {
  // State for form data
  const [formData, setFormData] = useState({
    description: '',
    name: '',
    amount: '',
    date: ''
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;
    
    onAddExpense({
      ...formData,
      amount: parseFloat(formData.amount)
    });
    
    // Reset form
    setFormData({
      description: '',
      name: '',
      amount: '',
      date: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Description *"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        required
      />
      
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      
      <input
        type="number"
        placeholder="Amount *"
        value={formData.amount}
        onChange={(e) => setFormData({...formData, amount: e.target.value})}
        step="0.01"
        required
      />
      
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({...formData, date: e.target.value})}
      />
      
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;