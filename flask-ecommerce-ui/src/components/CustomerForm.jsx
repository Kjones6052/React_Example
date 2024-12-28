// Import
import { Component } from "react";
import axios from 'axios';
import { func, number } from 'prop-types';


// Example of Controlled Components
// When React (via state) controls the value of an input for example
// useful for statemanagement, form validation, "source of truth" i.e. state will always be up to date with current vaue. UI will always be updated

// Creating 'CustomerForm' Class Component
class CustomerForm extends Component {
    
    // Constructor Method
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {},
            selectedCustomerId: null,
            isLoading: false
        };
    }

    // Function will run when the component is mounted
    componentDidMount() {
        const { id } = this.props.params; // Get the route param
        console.log(id);
        if (id) {
            // If an ID is present, fetch customer data for editing
            this.fetchCustomerData(id);
        }
    }

    // Function to fetch Customer Data
    fetchCustomerData = (id) => {
        axios.get(`http://127.0.0.1:5000/customers/${id}`)
            .then(response => {
                const customerData = response.data;
                this.setState({
                    name: customerData.name, 
                    email: customerData.email, 
                    phone: customerData.phone, 
                    selectedCustomerId: id
                });
            })
            .catch(error => {
                console.error('Error fetching customer data:', error);
            });
    };

    // Function will run on update of component
    componentDidUpdate(prevProps) {
        if (prevProps.customerId !== this.props.customerId) {
            this.setState({ selectedCustomerId: this.props.customerId });

            if (this.props.customerId) {
                axios.get(`http://127.0.0.1:5000/customers/${this.props.customerId}`)
                    .then(response => {
                        const customerData = response.data;
                        this.setState({
                            name: customerData.name,
                            email: customerData.email,
                            phone: customerData.phone
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching customer data:', error);
                        // Handle errors here
                    });
            } else {
                this.setState({
                    name: '',
                    email: '',
                    phone: ''
                });
            }
        }
    }

    // handleChange Function
    handleChange = (event) => {
        const { name, value } =  event.target;
        this.setState({ [name]: value });
    }

    // Form Validation
    validateForm = () => {
        const { name, email, phone } = this.state;
        const errors = {};
        if (!name) errors.name = 'Name is required';
        if (!email) errors.email = 'Email is required';
        if (!phone) errors.phone = 'Phone is required';
        return errors;
    }

    // handleSubmit Function
    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            this.setState({ isLoading: true, error: null })

            const customerData = {
                name: this.state.name.trim(),
                email: this.state.email.trim(),
                phone: this.state.phone.trim()
            };
            const apiUrl = this.state.selectedCustomerId
                ? `http://127.0.0.1:5000/customers/${this.state.selectedCustomerId}`
                : 'http://127.0.0.1:5000/customers';

            const httpMethod = this.state.selectedCustomerId ? axios.put : axios.post;

            httpMethod(apiUrl, customerData)
                .then(() => {

                    this.setState({
                        name: '',
                        email: '',
                        phone: '',
                        errors: {},
                        selectedCustomerId: null,
                        isLoading: false
                    });
                    this.props.navigate('/customers')
                    this.setState({ isLoading: false })
                })
                .catch(error => {
                    this.setState({ error: error.toString(), isLoading: false });
                }, 5000);
        } else {
            this.setState({ errors });
        }
        
    };

    // Render
    render() {
        
        // Accessing Variables
        const { name, email, phone } = this.state;

        if (isLoading) return <p>Submitting customer data...</p>;
        if (error) return <p>Error submitting customer data: {error}</p>;

        // Return Output
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add/Edit Customer</h3>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={this.handleChange} />
                    {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={this.handleChange} />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </label>
                <br />
                <label>
                    Phone:
                    <input type="tel" name="phone" value={phone} onChange={this.handleChange} />
                    {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    };
};

CustomerForm.propType = {
    customerId: number,
    onUpdateCustomerList: func
}

// Export
export default CustomerForm;