import React, { useContext } from "react";

import { BudgetBaseContext } from "../context/BudgetBaseContext";

const Remaining = () => {
  const { expenses, budget } = useContext(BudgetBaseContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.amount);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  const totalBudget = budget - totalExpenses;

  return (
    <div className={`alert ${alertType}`}>
      {/* <span>Remaining : {budget>}</span> */}
      {/* {isGoal ? <MadeGoal /> : <MissedGoal />} */}
      <span>
        {totalExpenses < budget && "Remaining :     "}

        {totalExpenses < budget ? budget - totalExpenses : "Budget Exceeds!"}
      </span>
    </div>
  );
};

export default Remaining;
