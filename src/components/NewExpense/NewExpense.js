import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isShow, setIsShow] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShow(true);
  };
  const showInfo = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="new-expense">
      {!isShow && <button onClick={showInfo}>Add Expense</button>}
      {isShow && (
        <ExpenseForm
          onShowInfo={showInfo}
          onSaveExpenseData={SaveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
