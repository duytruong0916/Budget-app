import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import selectExpense from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const expenseTotalFormatted = numeral(expensesTotal / 100).format('$0.0.00');
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header-title'>Viewing <span className='font-weight-bold'>{expensesCount} </span>{expenseWord} totalling <span className='font-weight-bold'>{expenseTotalFormatted}</span></h1>
                <div className='page-header-action mt-4'>
                    <Link to='/create' className='button'>ADD EXPENSE</Link>
                </div>
            </div>
        </div>
    );
};
const MapStateToProps = (state) => {
    const visilbeExpenses = selectExpense(state.expenses, state.filters);
    return {
        expensesCount: visilbeExpenses.length,
        expensesTotal: selectExpenseTotal(visilbeExpenses)
    }
}
export default connect(MapStateToProps)(ExpensesSummary);