import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './App.css';

function App() {
  // State for managing expenses list
  const [expenses, setExpenses] = useState([]);
  
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for sorting configuration
  const [sortConfig, setSortConfig] = useState({ 
    key: null, 
    direction: 'asc' // 'asc' or 'desc'
  });

  // Add new expense to the list
  const addExpense = (newExpense) => {
    const array = new Uint8Array(8);
    crypto.getRandomValues(array);
    const id = Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id,
        date: new Date().toLocaleDateString()
      }
    ]);
  };

  // Delete expense by ID
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Handle sorting when clicking table headers
  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort filtered expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key]?.toString() || '';
    const bValue = b[sortConfig.key]?.toString() || '';
    
    return sortConfig.direction === 'asc' 
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      
      <ExpenseForm onAddExpense={addExpense} />
      
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ExpenseTable
        expenses={sortedExpenses}
        onDelete={deleteExpense}
        handleSort={handleSort}
        sortConfig={sortConfig}
      />
    </div>
  );
}

export default App;