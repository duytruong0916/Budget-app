import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import selectExpense from '../selectors/expenses';
import selectExpenseTotal  from '../selectors/expenses-total';

const ExpensesSummary = ({expensesCount, expensesTotal}) =>{
    const expenseWord =  expensesCount ===1 ? 'expense': 'expenses';
    const expenseTotalFormatted =  numeral(expensesTotal/100).format('$0.0.00');
    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totalling {expenseTotalFormatted}</h1>
        </div>
    );
};
const MapStateToProps = (state)=>{
    const visilbeExpenses = selectExpense(state.expenses, state.filters);
    return {
        expensesCount: visilbeExpenses.length,
        expensesTotal: selectExpenseTotal(visilbeExpenses)
    }
}
export default connect(MapStateToProps)(ExpensesSummary);