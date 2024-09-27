import React, { useState } from 'react';
import Chart from '../../components/Chart';
import Card from '../../components/Card';
import budgetData from '../../data/budgetData.json';

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState('01');

  const months = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(0, index);
    const label = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);
    return {
      value: String(index + 1).padStart(2, '0'),
      label,
    };
  });
  
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const filteredExpenses = budgetData.expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() + 1 === parseInt(selectedMonth);
  });

  return (
    <>
      <div>
        <select value={selectedMonth} onChange={handleMonthChange} className="form-select">
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
        <Chart expenses={filteredExpenses} />
      </div>
      <div>
        <Card expenses={filteredExpenses} />
      </div>
    </>
  );
}
