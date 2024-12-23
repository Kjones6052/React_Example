// Import
import { func } from 'prop-types';
import { Component } from 'react';
import axios from 'axios';

// Creating 'CustomerList' Class Component
class CustomerList extends Component {

    // Constructor Method with Props
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            selectedCustomerId: null
        };
    }

    // This function runs as soon as component becomes mounted
    componentDidMount() {
        // Fetching data from database
        this.fetchCustomers();
    }

    // Function to GET customers from database
    fetchCustomers = () => {
        axios.get('http://127.0.0.1:5000/customers')
            .then(response => {
                this.setState({ customers: response.data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Function to select customer by ID
    selectCustomer = (id) => {
        this.setState({ selectCustomerId: id });
        this.props.onCustomerSelect(id);
    }

    // Function to DELETE customer by ID
    deleteCustomer = (customerId) => {
        axios.delete(`http://127.0.0.1:5000/customers/${customerId}`)
        .then(() => {
            this.fetchCustomers();
        })
        .catch(error => {
            console.error('Error deleting customer:', error);
        });
    }

    // Render
    render() {
        // Accessing 'customers' within render
        const { customers } = this.state;

        // Return Output
        return (
            <div className='customer-list'>
                <h3>Customers</h3>
                <ul>
                    {customers.map(customer => (
                        <li key={customer.id} onClick={() => this.selectCustomer(customer.id)}>
                            {customer.name}
                            <button onClick={() => this.deleteCustomer(customer.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Validate Property Types
CustomerList.propTypes = {
    onCustomerSelect: func
}

// Export
export default CustomerList;

// Everything below is commented out from previous examples to clean up the code above

// // Runs after component updates
// componentDidUpdate(prevProps, prevState) {
//     if (prevState.selectCustomerId !== this.state.selectedCustomerId) {
//         console.log(`New customer selected: ID ${this.state.selectedCustomerId}`);
//     }
// }

// // Runs during Unmount
// componentWillUnmount() {
//     // Perform cleanup actions here
//     console.log('CustomerList component is being unmounted');
// }

