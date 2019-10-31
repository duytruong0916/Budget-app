import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';
const ExpenseList = (props) => (
    <div>
        <h1>Expense List </h1>
        {props.expense.map((expense)=>{
            return <ExpenseListItem key = {expense.id} {...expense} />
        })}
    </div>
);

const mapStoreToProps = (state) =>{
    return {
        expense: selectExpense(state.expense,state.filter)
    };
};
export default connect(mapStoreToProps)(ExpenseList);