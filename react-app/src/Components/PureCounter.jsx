import React, { PureComponent } from 'react'

class PureCounter extends PureComponent {
    constructor(props) {
        super(props)
        
        this.state = {
            counter: 0,
            toggle: false
        }
    }
    handleIncrement = () => {
        if(this.state.toggle){this.setState((prevState)=>({counter: prevState.counter + 1}))}
    }

    handleToggle = () => {
        this.setState((prevState)=>({
            toggle: !prevState.toggle
        }))
    }
    render() {
        console.log("This Is Pure Component")

        const buttonStyle = {backgroundColor: this.state.toggle ? 'blue' : 'black',};

        const incrementButtonStyle = {cursor: this.state.toggle ? "pointer" : "not-allowed"}

        return (
        <>
            <div id='PC'>PURE COUNTER</div>
            
            <p id='counter2'>COUNTER : {this.state.counter}</p>

            <button id="increment2" onClick={this.handleIncrement} disabled={!this.state.toggle} style={incrementButtonStyle}>INCREMENT</button>
            
            <button id="settoggle2" onClick={this.handleToggle} style={buttonStyle}>SET TOOGLE</button>
        </>
        )
    }
}
export default PureCounter