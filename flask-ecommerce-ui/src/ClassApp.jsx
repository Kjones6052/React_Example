// App in the form of a Class Based Component

// Import
import { Component } from "react";
import './AppStyles.css';
import CustomerList from './components/CustomerList';
import CustomerForm from "./components/CustomerForm";

// App Class Component
class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomerId: null
    };
  }

  // Method to Handle Customer Select by ID
  handleCustomerSelect = (customerId) => {
    this.setState({ selectedCustomerId: customerId });
  }

  // Methos to Update Customer List
  updateCustomerList = () => {
    this.customerListRef.fetchCustomers();
  }

  // Render
  render() {

    // Accessing Variable
    const { selectedCustomerId } = this.state

    // Return Output
    return (
      <div className="app-container">
        <h1>Our Customers</h1>
        <CustomerForm customerId={selectedCustomerId} onUpdateCustomerList={this.updateCustomerList} />
        <CustomerList ref={ref => this.customerListRef = ref} onCustomerSelect={this.handleCustomerSelect} />
      </div>
    );
  }
}

// Export App
export default ClassApp;
