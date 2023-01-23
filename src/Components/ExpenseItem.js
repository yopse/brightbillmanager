import React, { useContext } from "react";
import { TiDelete, TiEdit } from "react-icons/ti";
import { BudgetBaseContext } from "../context/BudgetBaseContext";

const ExpenseItem = (props) => {
  const {
    dispatch,
    editId,
    setEditId,
    isEditing,
    setIsEditing,
    expenses,
    setAddFormData,
    addFormDate,
  } = useContext(BudgetBaseContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const handleEditExpense = (id) => {
    const specificItem = expenses.find((item) => item.id === id);
    setEditId(id);
    setIsEditing((isEditing) => !isEditing);

    setAddFormData({
      desc: specificItem.desc,
      amount: parseInt(specificItem.amount),
      category: specificItem.category,
      date: specificItem.date,
    });
  };

  return (
    <li className="list-group-items d-flex justify-content-between align-items-center">
      {props.desc}
      <div>
        <p>Category : {props.category}</p>
      </div>
      <div>
        <span className="mr-3"> Date : {props.date}</span>

        <span className="badge badge-primary badge-pill mr-3 h-3">
          Amount : {props.amount}
        </span>
        <TiEdit
          size="1.5em"
          onClick={() => handleEditExpense(props.id)}
        ></TiEdit>
        <TiDelete
          size="1.5em"
          onClick={() => handleDeleteExpense(props.id)}
          className="ml-3"
        ></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
