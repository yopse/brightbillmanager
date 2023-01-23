import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BudgetBaseContext } from "../context/BudgetBaseContext";

function PayingBills() {
  const { expenses, budget } = useContext(BudgetBaseContext);

  let billsToBePaid = [];

  function allExpense(totalBudget, expensess) {
    expensess.sort().reverse();

    for (const item of expensess) {
      if (item.amount > totalBudget) {
        continue;
      } else if (totalBudget === 0) {
        break;
      } else {
        totalBudget = totalBudget - item.amount;
        billsToBePaid.push(item);
      }
    }
  }
  let allExpenses = [...expenses];
  let totalBudget = budget;
  allExpense(totalBudget, allExpenses);

  return (
    <div className="container">
      <h3 className="mt-5 text-center mb-5">Bills to be paid This Month</h3>

      <div className="row mt-3">
        <div className="col-sm">
          {billsToBePaid.map((items, id) => {
            return (
              <li
                key={id}
                className="list-group-items d-flex justify-content-between align-items-center billto-pay"
              >
                {items.desc}
                <div>
                  <p className="mt-2">Category : {items.category}</p>
                </div>
                <div>
                  <span className="mr-3"> Date : {items.date}</span>

                  <span className="badge badge-primary badge-pill mr-3 h-3">
                    Amount : {items.amount}
                  </span>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PayingBills;
