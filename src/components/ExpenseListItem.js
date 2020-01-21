import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id,description, amount, createdAt}) => (
    <div>
        <Link to = {`/edit/${id}`}><h3>{description}</h3></Link>
        <p>
            {numeral(amount/100).format('$0,0.00')}
            -
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
        
    </div>
);

//connect will GIVE us access for dispatch and we have to use it in the argument to use it as in last we were sending props and using its property dispatch here we send dispatch 

export default ExpenseListItem;

