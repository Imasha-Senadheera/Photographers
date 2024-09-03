import React, { useState } from "react";

const BudgetCal = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [newExpense, setNewExpense] = useState("");

  const handleIncomeChange = (e) => {
    setIncome(parseFloat(e.target.value) || 0);
  };

  const handleNewExpenseChange = (e) => {
    setNewExpense(e.target.value);
  };

  const addExpense = () => {
    if (newExpense) {
      setExpenseList([...expenseList, parseFloat(newExpense)]);
      setExpenses(expenses + parseFloat(newExpense));
      setNewExpense("");
    }
  };

  const totalRemaining = income - expenses;

  return (
    <div className="p-8 bg-light-blue min-h-screen">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">
        Budget Calculator
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Income</h2>
        <input
          type="number"
          placeholder="Enter your income"
          value={income}
          onChange={handleIncomeChange}
          className="border rounded px-4 py-2 w-full"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Expenses</h2>
        <input
          type="number"
          placeholder="Enter a new expense"
          value={newExpense}
          onChange={handleNewExpenseChange}
          className="border rounded px-4 py-2 w-full mb-4"
        />
        <button
          onClick={addExpense}
          className="bg-blue-900 text-white rounded-full p-2 w-full"
        >
          Add Expense
        </button>
        <ul className="mt-4">
          {expenseList.map((expense, index) => (
            <li key={index} className="text-gray-700 mb-2">
              Rs. {expense.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-700">Total Income: Rs. {income.toFixed(2)}</p>
        <p className="text-gray-700">Total Expenses: Rs. {expenses.toFixed(2)}</p>
        <p className="text-gray-700 font-bold mt-4">
          Remaining Budget: Rs. {totalRemaining.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default BudgetCal;
