// Import
import { func } from 'prop-types';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Alert, Container, Modal, ListGroup } from 'react-bootstrap';

// Creating 'CustomerList' Class Component
class CustomerList extends Component {

    // Constructor Method with Props
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            selectedCustomerId: null,
            error: null
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
                this.setState({ error: 'Error fetching customers. Please try again later.'});
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
            this.setState({ error: 'Error deleting customers. Please try again.'});
        });
    }

    // Render
    render() {
        // Accessing 'customers' within render
        const { customers, error } = this.state;

        // Return Output
        return (
            <Container>
                {error && <Alert variant='danger'>{error}</Alert>}
                <h3 className='mt-3 mb-3 text-center'>Customers</h3>
                <ListGroup>
                    {customers.map(customer => {
                        <ListGroup.Item key={customer.id} className='d-flex justify-content-between alighn-items-center shadow-sm p-3 mb-3 bg-white rounded'>
                            <Link to={`/edit-customer/${customer.id}`} className='text-primary'>{customer.name}</Link>
                            <Button variant='danger' size='sm' onClick={() => this.deleteCustomer(customer.id)}>Delete</Button>
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </Container>
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

