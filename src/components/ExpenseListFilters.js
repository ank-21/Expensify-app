import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';


//we will set this to class based component from stateless component as it will be having change in state,
//so if we have to use state and do some  changes we wil use class based component and in doing so we will just edit the code 
//and we will put the constructor there.


//props are passed from map state to the function

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused : null
    };
    
    onDatesChange = ({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    }
    render() {
        return (
            <div>
                <input 
                type="text" 
                value={this.props.filters.text} 
                onChange = {(e)=> {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />
        
                <select 
                value = {this.props.filters.sortBy }
                onChange = {(e)=> {
                    if(e.target.value === 'date'){
                        this.props.dispatch(sortByDate());
                    }else if(e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value = "date">Date</option>
                    <option value = "amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
        console.log(this.props);
    }
}

//  const ExpenseListFilters = (props) => (
//      <div>
//         <input 
//         type="text" 
//         value={props.filters.text} 
//         onChange = {(e)=> {
//             props.dispatch(setTextFilter(e.target.value));
//         }} />

//         <select 
//         value = {props.filters.sortBy }
//         onChange = {(e)=> {
//             if(e.target.value === 'date'){
//                 props.dispatch(sortByDate());
//             }else if(e.target.value === 'amount'){
//                 props.dispatch(sortByAmount());
//             }
//         }}>
//             <option value = "date">Date</option>
//             <option value = "amount">Amount</option>
//         </select>
//     </div>
// );

const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}


export default connect(mapStateToProps)(ExpenseListFilters);

//if we use connect we have to export connected function and also when we change the store file