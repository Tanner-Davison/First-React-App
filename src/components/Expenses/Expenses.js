import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2023");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((items) => {
		return items.date.getFullYear().toString() === filteredYear;
	});

	
	
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					filter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpenseList items={filteredExpenses} />
			</Card>
		</div>
	);
};
export default Expenses;
