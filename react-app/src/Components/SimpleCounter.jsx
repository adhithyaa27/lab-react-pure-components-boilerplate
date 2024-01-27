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
        const buttonStyle = {backgroundColor: this.state.toggle ? 'blue' : 'black',};
        const incrementButtonStyle = {cursor: this.state.toggle ? "pointer" : "not-allowed"}

    return (
        <>
            <div id='SC'>SIMPLE COUNTER</div>
            <p id='counter1'>COUNTER : {this.state.counter}</p>
            <button id="increment1" onClick={this.handleIncrement} disabled={!this.state.toggle} style={incrementButtonStyle}>INCREMENT</button>
            <button id="settoggle1" onClick={this.handleToggle} style={buttonStyle}>SET TOGGLE</button>
        </>
    );
}
}

export default SimpleCounter;
