function ExpenseTable({ expenses, onDelete, handleSort, sortConfig }) {
  return (
    <div className="expense-table-container">
      {expenses.length === 0 ? (
        <div className="empty-state">No expenses found</div>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('description')}>
                Description {sortConfig.key === 'description' && (
                  sortConfig.direction === 'asc' ? '↑' : '↓'
                )}
              </th>
              <th onClick={() => handleSort('category')}>
                Category {sortConfig.key === 'category' && (
                  sortConfig.direction === 'asc' ? '↑' : '↓'
                )}
              </th>
              <th onClick={() => handleSort('amount')}>
                Amount {sortConfig.key === 'amount' && (
                  sortConfig.direction === 'asc' ? '↑' : '↓'
                )}
              </th>
              <th onClick={() => handleSort('date')}>
                Date {sortConfig.key === 'date' && (
                  sortConfig.direction === 'asc' ? '↑' : '↓'
                )}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.category || 'Uncategorized'}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
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