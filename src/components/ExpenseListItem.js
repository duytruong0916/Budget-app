import React from 'react';
import {connect} from 'react-redux';
import {RemoveExpense} from '../actions/expenses';
const ExpenseListItem = ({dispatch, id, description, amount, createAt}) => (
    <div>
        <div>{description}</div>
        <div>{amount}</div>
        <div>{createAt}</div>
        <button onClick={()=>{
            dispatch(RemoveExpense({id}));
        }}>remove</button>
    </div>
);

export default connect()(ExpenseListItem);