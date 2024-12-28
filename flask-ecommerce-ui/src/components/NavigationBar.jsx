// Import
import { Link, NavLink } from "react-router-dom";
import CustomerForm from "./CustomerForm";

function NavigationBar() {
    return (
        <nav>
            {/* Example using Link tag */}
            {/* <Link to='/add-customer/' element={<CustomerForm />}>Add Customer</Link>
            <Link to='/customers' element={<CustomerList />}>Customers</Link> */}
            
            {/* Example using NavLink tag and additional styling */}
            <NavLink to="/" activeClassName="active" >Home</NavLink>
            <NavLink to="/add-customer" activeClassName="active" >Add Customer</NavLink>
            <NavLink to="/customers" activeClassName="active" >Customers</NavLink>
            <NavLink to="/add-product" activeClassName="active" >Add Product</NavLink>
            <NavLink to="/products" activeClassName="active" >Products</NavLink>
        </nav>
    )
}

// Export
export default NavigationBar;

// Link is good for static destinations, no params required (nav bar, footer)
// useNavigate is good for dynamic destinations, param required (destination content changes based on param)
// useNavigate cannot be used inside a class component, Link can