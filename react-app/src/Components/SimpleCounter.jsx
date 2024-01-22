import React, { Component } from 'react';

class SimpleCounter extends Component {
    constructor(props) {
    super(props);

    this.state = {
        counter: 0,
        toggle: false,
    };
}

    handleIncrement = () => {
        if (this.state.toggle) {
            this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }
};

    handleToggle = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle,
    }));
};

    render() {
        console.log('This is Simple Component');
        const buttonStyle = {backgroundColor: this.state.toggle ? 'green' : 'red',};
        const incrementButtonStyle = {cursor: this.state.toggle ? "pointer" : "not-allowed"}

    return (
        <>
            <h2>SimpleCounter</h2>
            <p>Counter : {this.state.counter}</p>
            <button onClick={this.handleIncrement} disabled={!this.state.toggle} style={incrementButtonStyle}>Increment</button>
            <button onClick={this.handleToggle} style={buttonStyle}>Set Toggle</button>
        </>
    );
}
}

export default SimpleCounter;
