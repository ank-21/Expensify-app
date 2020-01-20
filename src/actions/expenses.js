import uuid from 'uuid';

//the value that gonna come from user will be kept as destructured the object
//we jsut break this in diif lines.what we should do is simply putting all in arg then keep in it seprate lines
//we will use named exports
export const addExpense = (
    {
        description = '',  //this is just giving its default value
        note='',
        amount=0,
        createdAt=0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense : {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//here in action generator we created state
//remove Expense

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//edit expense
//we are not setting dedfault as we will be passing the value for sure and also we are not destructing the object
export const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
