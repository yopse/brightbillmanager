import React, { useContext, useState, useEffect, useMemo } from "react";
import ExpenseItem from "./ExpenseItem";
import { BudgetBaseContext } from "../context/BudgetBaseContext";
const ExpenseList = () => {
  const { expenses, isFilter, setIsFilter } = useContext(BudgetBaseContext);

  const [expensesList, setExpensesList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Add default value on page load

  useEffect(() => {
    setExpensesList(expenses);
  }, [expenses]);

  // Function to get filtered list

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return expensesList;
    }

    setIsFilter(true);

    return expensesList.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate functions calls with useMemo

  var filteredList = useMemo(getFilteredList, [selectedCategory, expensesList]);

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  return (
    <>
      <h4 className="mt-2">Filter Bills</h4>
      <div className="w-25">
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="Utility">Utility</option>
          <option value="Shopping">Shopping</option>
          <option value="Food&Dinning">Food & Dinning</option>
          <option value="Personal&Care">Personal Care</option>
          <option value="Education">Education</option>
        </select>
      </div>
      <ul className="list-group mt-2 mb-3">
        {isFilter
          ? filteredList.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  desc={expense.desc}
                  amount={expense.amount}
                  category={expense.category}
                  id={expense.id}
                  value={expense.value}
                ></ExpenseItem>
              );
            })
          : expenses.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  amount={expense.amount}
                  desc={expense.desc}
                  category={expense.category}
                  id={expense.id}
                  date={expense.date}
                ></ExpenseItem>
              );
            })}
      </ul>
    </>
  );
};

export default ExpenseList;
