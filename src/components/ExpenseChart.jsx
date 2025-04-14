import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import '../App.css';

Chart.register(...registerables);

function ExpenseChart({ expenses }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && expenses.length > 0) {
      // Destroy previous chart instance if exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Group expenses by category
      const categories = {};
      expenses.forEach(expense => {
        const category = expense.category || 'Uncategorized';
        categories[category] = (categories[category] || 0) + parseFloat(expense.amount);
      });

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(categories),
          datasets: [{
            data: Object.values(categories),
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
              '#9966FF', '#FF9F40', '#8AC24A', '#F06292'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = Math.round((value / total) * 100);
                  return `${label}: $${value.toFixed(2)} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [expenses]);

  return (
    <div className="chart-container">
      {expenses.length > 0 ? (
        <canvas ref={chartRef} />
      ) : (
        <div className="empty-state">
          No expenses data available for chart
        </div>
      )}
    </div>
  );
}

export default ExpenseChart;