import { createContext, useReducer, useState } from "react";
import moment from "moment";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    case "EDIT_EXPENSE":
      const updatedExpense = action.payload.expense;
      const id = action.payload.id;

      const updatedExpenses = state.expenses.map((item) => {
        if (item.id === id) {
          return updatedExpense;
        }
        return item;
      });

      return {
        ...state,
        expenses: updatedExpenses,
      };

    default:
      return state;
  }
};
const initialState = {
  budget: 20000,

  expenses: [
    {
      id: 12,
      desc: "shopping",
      amount: 40,
      category: "Utility",
      date: "20/02/2023",
    },
    {
      id: 32,
      desc: "holiday",
      amount: 400,
      category: "Travel",
      date: "19/02/2023",
    },
    {
      id: 42,
      desc: "personalcare",
      amount: 400,
      category: "Personal care",
      date: "9/01/2023",
    },
  ],
};

export const BudgetBaseContext = createContext();

export const BudgetBaseProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const [addFormData, setAddFormData] = useState({
    desc: "",
    amount: "",
    category: "Other",
    date: moment().format("YYYY-MM-DD"),
  });

  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  return (
    <BudgetBaseContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,

        editId,
        isEditing,
        isFilter,
        addFormData,
        setAddFormData,

        setIsFilter,

        setEditId,
        setIsEditing,
      }}
    >
      {props.children}
    </BudgetBaseContext.Provider>
  );
};
