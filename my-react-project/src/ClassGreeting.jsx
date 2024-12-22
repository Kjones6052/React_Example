import { Component } from 'react';
import { string } from 'prop-types'; 
import './styles.css';

class ClassGreeting extends Component {

    // accessing constructor of Component
    constructor(props) {
        super(props) // call to parent class with property
        this.state = { 
            // setting the state of 'name' to 'John Doe
            // name: "John Doe" 

            // setting state using property 'initialName'
            name: this.props.initialName
        }

        this.changeName = this.changeName.bind(this) // binding this.changeName to classGreeting component
    }
    // method to change state
    changeName() {
        this.setState({ name: "Jane Doe"})
    }
    // class always uses a render() to render the return statement
    render() {
        // return using external CSS styling file
        // return <p className='greeting'>This is a class-based greeting</p>

        const name = this.state.name;

        return (
            <div>
                <p className='greeting'>{this.props.customMessage}, {name}</p>

                <p className='greeting'>Hello, {name}! This is a class-based greeting!</p>

                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

// validating property 'initialName'
ClassGreeting.propTypes = {
    initialName: string,
    customMessage: string
}

// creatinng defailt value for prop 'initialName'
ClassGreeting.defaultProps = {
    initialName: 'John Doe'
}

export default ClassGreeting