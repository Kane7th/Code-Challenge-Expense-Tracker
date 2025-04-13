import crypto from 'crypto';

function ExpenseTable({ expenses, onDelete, handleSort, sortConfig }) {
    return (
      <div className="expense-table">
        {expenses.length === 0 ? (
          <p className="empty-state">No expenses found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('description')}>
                  Description {sortConfig.key === 'description' && (
                    sortConfig.direction === 'asc' ? '↑' : '↓'
                  )}
                </th>
                <th onClick={() => handleSort('name')}>
                  Name {sortConfig.key === 'name' && (
                    sortConfig.direction === 'asc' ? '↑' : '↓'
                  )}
                </th>
                <th onClick={() => handleSort('amount')}>
                  Amount {sortConfig.key === 'amount' && (
                    sortConfig.direction === 'asc' ? '↑' : '↓'
                  )}
                </th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map(expense => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>{expense.name}</td>
                  <td>${expense.amount.toFixed(2)}</td>
                  <td>{expense.date || 'N/A'}</td>
                  <td>
                    <button 
                      onClick={() => onDelete(expense.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  
  export default ExpenseTable;