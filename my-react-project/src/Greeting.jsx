import styles from './Greeting.module.css';
import { useState } from 'react';
import { string } from 'prop-types';

// using useState in arrow function
const Greeting = (props) => {

    // constructing variables [var, setVar(this is a function)] = useState(varDefaulValue)

    const [name, setName] = useState(props.initialName); // setting value of 'name' according to 'initiaName' property, with function to change state
    const [isLoggedIn, setIsLoggedIn] = useState(false) // setting value of 'isLoggedIn' to false, with function to change state
    const [users, setUsers] = useState(["Alice", "Bob", "Charlie", "John"])

    // handle clicks
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        setName(props.initialName)
    }

    // method to change 'name' state
    // const changeName = () => { 
    //     setName('Jane Doe');
    // }

    // return statement for use of prop drilling
    // return (
    //     <div>
    //         <p className={styles.greeting}>{props.customMessage}</p>
    //         <p className={styles.greeting}>Welcome, {name} to the world of React!</p>
    //         <button onClick={changeName}>Change Name</button>
    //     </div>
    // )

    // return statement for use of conditional rendering
    return (
        <div>
            <p className={styles.greeting}>
                {props.customUserMessage}
            </p>
            <ul>
                {users.map(users, index) => (
                    <li key={index}> {user}</li>
                )}
            </ul>

            <p className={styles.greeting}>
                {isLoggedIn ? `Hello, ${name}! Welcome back!`: props.customMessage}
            </p>
            {!isLoggedIn ? (
                <button onClick={handleLoginClick}>Log In</button>
            ) : (
                <button onClick={handleLogoutClick}>Log Out</button>
            )

            }
        </div>
    )

    // return statement for use of prop drilling
    // return (
    //     <div>
    //         <p className={styles.greeting}>{props.customMessage}</p> 
    //     </div>
    // )

    // simple return statement
    // return (
    //     <div>
    //         <p className={styles.greeting}>Welcome, {name} to the world of React!</p>
    //         <button onClick={changeName}>Change Name</button>
    //     </div>
    // )
}

// validating property 'initialName'
Greeting.propTypes = {
    initialName: string, 
    customMessage: string
}

// creatinng defailt value for prop 'initialName'
Greeting.defaultProps = {
    initialName: 'John Doe'
}

// export function
export default Greeting;


// Everything below is commented out from previous examples

// creating variable for CSS styling
// const greetingStyle = {
//     color: 'green',
//     fontSize: '18px'
// }

// return statement always comes last

// using inline CSS styling with JS variable
// return <p style={greetingStyle}>Welcome to the world of React!</p>

// using external CSS file
// return <p className={styles.greeting}>Welcome to the world of React!</p>