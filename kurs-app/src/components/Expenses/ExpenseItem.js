import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function ExpenseItem({ date, title, price }) {
  const [titleMain, setTitleMain] = useState(title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleMain}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
      <button onClick={() => setTitleMain(prompt())}>Change Title</button>
    </Card>
  );
}
