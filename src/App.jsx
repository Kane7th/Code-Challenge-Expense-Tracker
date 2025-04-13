import { useState } from 'react'
import './App.css'

function App() {
  // State management
  const [expenses, setExpenses] = useState([]) // Initialize expenses array
  const [searchTerm, setSearchTerm] = useState('') // Search filter term
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' }) // Sorting configuration

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(expense => 
    expense.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Sort expenses based on sort configuration
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortConfig.key) return 0
    const aValue = a[sortConfig.key] || ''
    const bValue = b[sortConfig.key] || ''
    return sortConfig.direction === 'asc' 
      ? aValue.localeCompare(bValue) 
      : bValue.localeCompare(aValue)
  })

  // Expense manipulation functions
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  // Sort handler for table headers
  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      
      {/* Add Expense Form */}
      <div className="card">
        <h2>Add New Expense</h2>
        {/* Implement your ExpenseForm component here */}
      </div>

      {/* Search Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Expenses Table */}
      <div className="expense-table">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('description')}>Description</th>
              <th onClick={() => handleSort('name')}>Name</th>
              <th onClick={() => handleSort('amount')}>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedExpenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.name}</td>
                <td>${expense.amount}</td>
                <td>{expense.date}</td>
                <td>
                  <button onClick={() => deleteExpense(expense.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App