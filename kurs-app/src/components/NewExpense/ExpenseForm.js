import React, { useRef } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const inputTitleRef = useRef();
  const inputAmountRef = useRef();
  const inputDateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      inputTitleRef.current.value.trim().length !== 0 &&
      inputAmountRef.current.value.trim().length !== 0 &&
      inputDateRef.current.value.trim().length !== 0
    ) {
      const expenseData = {
        title: inputTitleRef.current.value,
        amount: +inputAmountRef.current.value,
        date: new Date(inputDateRef.current.value),
      };
      onSaveExpenseData(expenseData);
      inputTitleRef.current.value = "";
      inputAmountRef.current.value = "";
      inputDateRef.current.value = "";
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={inputTitleRef} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" ref={inputAmountRef} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            ref={inputDateRef}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
