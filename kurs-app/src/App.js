import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./components/Expenses/Expenses.css";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const addExpenseHanlder = (expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHanlder} />
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses
          .filter(
            (filter) => filter.date.getFullYear().toString() === filteredYear
          )
          .map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                price={expense.amount}
              />
            );
          })}
        {expenses.filter(
          (filter) => filter.date.getFullYear().toString() === filteredYear
        ).length > 0 ? (
          ""
        ) : (
          <p className="expenses__fallback">Found no expences.</p>
        )}
      </Card>
    </div>
  );
}

export default App;
