import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=> {
            return <ExpenseListItem key={expense.id}  {...expense} />; //we destructure the props and send to expenselistItem
        })}
    </div>
);

//props are passed from map state to the function
//this function is for what information from store do we need to access
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}
//whatever we set in this mapState to props we will pass this in the expense list as the props
export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;
//this is the more generic way

//we use connectedFunction name what it returns is not hoc its something different.it returns a function so we need to call that with the function as argument

/*  const ConnectedExpenseList = connect((state)=> {
    return {
        name: 'Amkit'
    };

})(ExpenseList)  */