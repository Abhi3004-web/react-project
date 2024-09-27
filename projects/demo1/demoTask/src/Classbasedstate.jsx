import React, { Component } from 'react';

class Counter extends Component {
    // Constructor for initializing state
    constructor(props) {
        super(props); // Call the parent class constructor
        // Define the initial state
        this.state = {
            count: 0
        };

    }

    // Method to increment the count
    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
            name: "state"
        }));
        console.log(this.state);
    };

    // Render method to display the component
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                {(this.state.name) && <h1>{this.state.name}</h1>}
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
