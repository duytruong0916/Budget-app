import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';
class AddExpensePage extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        date: moment(),
        focused: false
    }
    onDescriptionChange =(e) =>{
        const description = e.target.value;
         this.setState(()=>({description}))
    }
    onAmountChange =(e) =>{
        const amount = e.target.value;
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/))
        {
            this.setState(()=>({amount}))
        }
    }
    onNoteChange =(e)=>{
        const note = e.target.value;
        this.setState(()=>({note}))
    }
    onDateChange =(date) =>{
        if(date)
        {
            this.setState(()=>({date}));
        }
    }
    onFocusChange =({focused}) =>{
        this.setState(()=>({focused: focused}))
    }
    render() {
        return (
            <div>
                <form>
                <input 
                    type = 'text'
                    autoFocus
                    placeholder= 'Description'
                    value={this.state.description}
                    onChange ={this.onDescriptionChange}
                />
                 <input 
                    type = 'number'
                    autoFocus
                    placeholder= 'Amount'
                    value={this.state.amount}
                    onChange ={this.onAmountChange}
                />
                <SingleDatePicker 
                    date ={this.state.date}
                    onDateChange={this.onDateChange} 
                    onFocusChange={this.onFocusChange} 
                    focused={this.state.focused}
                    numberOfMonths= {1}
                    isOutsideRange ={()=>false}
                    />
                <br />
                
                <textarea 
                    placeholder ="Add some note(optional)" 
                    rows="2" 
                    value ={this.state.note}
                    onChange={this.onNoteChange}>
                    
                </textarea>
                </form>
            </div>
        )
    }
}

export default AddExpensePage;