import React from "react";

import { Link } from "react-router-dom";
import Budget from "./Budget";
import Remaining from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";
import BillToPay from "./BillToPay";

function Budgetbase() {
  return (
    <div className="container">
      <h1 className="mt-4">Bright Money Bill Manager</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget></Budget>
        </div>
        <div className="col-sm">
          <Remaining></Remaining>
        </div>
        <div className="col-sm">
          <ExpenseTotal></ExpenseTotal>
        </div>
        <div className="col-sm">
          <BillToPay></BillToPay>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-sm">
          <Link to="/payingraph" className="alert alert-success text-none">
            Bill Analysis
          </Link>
        </div>
      </div>

      <h3 className="mt-3">All Bills</h3>

      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList></ExpenseList>
        </div>
      </div>
      <h3 className="mt-3">Add Bill</h3>
      <div className="mt-3">
        <div className="col-sm">
          <AddExpenseForm></AddExpenseForm>
        </div>
      </div>
    </div>
  );
}

export default Budgetbase;
