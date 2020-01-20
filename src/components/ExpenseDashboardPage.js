import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
//for component  --we dont use state so we can use arrow function also with short hand syntax.

//we willl set an arrow function to export this as react 
//we do to get routes export so we make a react component a stateless comp



const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;