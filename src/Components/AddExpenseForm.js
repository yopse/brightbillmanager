import React, { useContext } from "react";
import { BudgetBaseContext } from "../context/BudgetBaseContext";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import "../index.css";
function AddExpenseForm() {
  const {
    dispatch,

    editId,
    isEditing,
    addFormData,
    setAddFormData,
    setEditId,
    setIsEditing,
    expenses,
    setIsFilter,
  } = useContext(BudgetBaseContext);

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");

    console.log(newDate); //value picked from date picker
  };

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const newFormData = { ...addFormData };

    const fieldName = e.target.getAttribute("name");

    if (fieldName === "date") {
      const fieldValue = moment(new Date(e.target.value)).format("YYYY-MM-DD");

      newFormData[fieldName] = fieldValue;
    }

    const fieldValue = e.target.value;

    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      addFormData.desc &&
      addFormData.amount &&
      addFormData.category &&
      !isEditing
    ) {
      const newExpense = {
        id: uuidv4(),
        desc: addFormData.desc,
        amount: parseInt(addFormData.amount),
        category: addFormData.category,
        date: addFormData.date,
      };

      dispatch({
        type: "ADD_EXPENSE",
        payload: newExpense,
      });

      setAddFormData({
        desc: "",
        amount: "",
        category: "Other",
        date: moment().format("YYYY-MM-DD"),
      });
      setIsFilter((isFilter) => !isFilter);
    } else if (editId && isEditing) {
      const Updatedexpense = {
        desc: addFormData.desc,
        amount: parseInt(addFormData.amount),
        category: addFormData.category,
        date: addFormData.date,
      };

      dispatch({
        type: "EDIT_EXPENSE",
        payload: {
          expense: Updatedexpense,
          id: editId,
        },
      });

      setIsEditing((isEditing) => !isEditing);
      setIsFilter((isFilter) => isFilter);

      setAddFormData({
        desc: "",
        amount: "",
        category: "Other",
        date: moment().format("YYYY-MM-DD"),
      });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Description</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="name"
            name="desc"
            value={addFormData.desc}
            onChange={handleAddFormChange}
          />
        </div>

        <div className="col-sm">
          <label htmlFor="cost">Amount</label>
          <input
            type="number"
            required="required"
            className="form-control"
            id="amount"
            name="amount"
            value={addFormData.amount}
            onChange={handleAddFormChange}
          />
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary cpca">
              {isEditing ? "Edit" : "Add"}
            </button>
          </div>
        </div>
      </div>
      <div className="form-group w-25 mt-3">
        <label for="exampleFormControlSelect1">Category</label>
        <select
          value={addFormData.category}
          className="form-control"
          id="exampleFormControlSelect1"
          name="category"
          onChange={handleAddFormChange}
        >
          <option value="">Other</option>
          <option value="Utility">Utility</option>
          <option value="Shopping">Shopping</option>
          <option value="Food Dinning">Food & Dinning</option>
          <option value="Personal&Care">Personal Care</option>
          <option value="Education">Education</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          value={addFormData.date}
          type="date"
          name="date"
          id="date  "
          onChange={handleAddFormChange}
        />
      </div>
    </form>
  );
}

export default AddExpenseForm;
