import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterExpenseHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(filterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSelectYear={filterExpenseHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
