import React, { useContext } from "react";
import { BudgetBaseContext } from "../context/BudgetBaseContext";
const ExpenseTotal = () => {
  const { expenses } = useContext(BudgetBaseContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.amount);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent so far : {totalExpenses} Rs</span>
    </div>
  );
};

export default ExpenseTotal;
