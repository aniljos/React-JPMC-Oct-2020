import React, { Component } from 'react';
import { AppTheme } from '../context/AppTheme';




//class-based component
class Counter extends Component{


    //ES7
    //immutable
    state = {
        count: 5
    };
    inputRef = null;
    otherRef = null;
    

    constructor(props){
        super(props);

        //Till ES7
        // this.state = {
        //     count = 5
        // }

        //Till ES7
        this.increment = this.increment.bind(this);
    }

    increment(evt){
        
        console.log("increment ", evt);
       // this.state.count++;

       //setState ==> the slice of the state to be updated
       const updatedCount = this.state.count + 1;
       this.setState({
           count: updatedCount
       });
    }

    //ES7
    decrement = (evt) => {

        //evt.persist();

        console.log("decrement ", evt);
       // this.state.count--;

       const updatedCount = this.state.count - 1;
       this.setState({
           count: updatedCount
       });
    }

    change = (evt) => {

        const value = evt.target.value;
        this.setState({
            count: parseInt(value)
        });
    }
    update = (evt) => {

        this.setState({
            count: parseInt(this.inputRef.value)
        });
    }
    render(){
        //return the View(JSX)
        return (
            <div>
                <h4 className={`${this.context.type}-text`}>Counter: {this.state.count}</h4>
                <p>{this.props.message}</p>
                <div>
                    <button onClick={this.increment}>Inc</button> &nbsp;
                    <button onClick={this.decrement}>Decr</button>
                </div>
                <div>
                    {/* Controlled Input */}
                    Counter: <input type="number" value={this.state.count} onChange={this.change}/>
                </div>
                <div>
                    {/* Uncontrolled Input */}
                    Update : <input type="number" 
                            ref={(ref) => {this.inputRef = ref}}/> &nbsp; <button onClick={this.update}>Update</button>
                        <input ref={(r) => {this.otherRef = r}}/>
                </div>
            </div>
        )
    }
}
Counter.contextType = AppTheme;

export default Counter;


