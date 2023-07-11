import React,{useState} from 'react'
import ExpenseDate from "./ExpenseDate.js";
import Card from '../UI/Card.js';
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);
	const [counter, setCounter] = useState(1);

	const clickHandler = () => {
		
		if (counter === 1) {
			setTitle("updated");
			setCounter(0);
		} else if (counter < 1) {
			setTitle(props.title);
			setCounter(1);
			
		}
		console.log(counter);
	};
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{title}</h2>
					<div className='expense-item__price'>
						<h2>{props.amount}</h2>
					</div>
					<button onClick={clickHandler}>save title</button>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
