import React, { Component } from 'react';




//class-based component
class Counter extends Component{

    //immutable
    state = {
        count: 5
    };

    constructor(props){
        super(props);

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

    render(){
        //return the View(JSX)
        return (
            <div>
                <h4>Counter: {this.state.count}</h4>
                <p>{this.props.message}</p>
                <div>
                    <button onClick={this.increment}>Inc</button> &nbsp;
                    <button onClick={this.decrement}>Decr</button>
                </div>
                <div>
                    Counter: <input type="number" value={this.state.count} onChange={this.change}/>
                </div>
            </div>
        )
    }
}
export default Counter;


