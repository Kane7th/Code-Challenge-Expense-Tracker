import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import ExpenseChart from './components/ExpenseChart';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ 
    key: null, 
    direction: 'asc'
  });
  const [activeTab, setActiveTab] = useState('table');

  const addExpense = (newExpense) => {
    const id = crypto.randomUUID();
    setExpenses([...expenses, {
      ...newExpense,
      id,
      date: new Date(newExpense.date).toISOString()
    }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const filteredExpenses = expenses.filter(expense => 
    Object.values(expense).some(
      value => value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    if (sortConfig.key === 'date') {
      return sortConfig.direction === 'asc' 
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    }
    
    if (sortConfig.key === 'amount') {
      return sortConfig.direction === 'asc' 
        ? a.amount - b.amount
        : b.amount - a.amount;
    }
    
    const aValue = a[sortConfig.key]?.toString() || '';
    const bValue = b[sortConfig.key]?.toString() || '';
    
    return sortConfig.direction === 'asc' 
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      
      <main>
        <section className="form-section">
          <ExpenseForm onAddExpense={addExpense} />
          
          <div className="summary-card">
            <h3>Summary</h3>
            <p>Total Expenses: {expenses.length}</p>
            <p>Total Amount: ${expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0).toFixed(2)}</p>
          </div>
        </section>

        <section className="results-section">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <div className="view-tabs">
              <button 
                className={activeTab === 'table' ? 'active' : ''}
                onClick={() => setActiveTab('table')}
              >
                Table View
              </button>
              <button 
                className={activeTab === 'chart' ? 'active' : ''}
                onClick={() => setActiveTab('chart')}
              >
                Chart View
              </button>
            </div>
          </div>

          {activeTab === 'table' ? (
            <ExpenseTable
              expenses={sortedExpenses}
              onDelete={deleteExpense}
              handleSort={handleSort}
              sortConfig={sortConfig}
            />
          ) : (
            <ExpenseChart expenses={sortedExpenses} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;