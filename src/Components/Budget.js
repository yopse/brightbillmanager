import React, { useContext } from "react";
import { BudgetBaseContext } from "../context/BudgetBaseContext";
const Budget = () => {
  const { budget } = useContext(BudgetBaseContext);

  return (
    <div className="alert alert-secondary">
      <span>Budget : {budget} Rs</span>
    </div>
  );
};

export default Budget;
