// Import
import {  NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// Navbar.Brand, Navbar.Toggle, Navbar.Collapse, Nav.Link(do not use with react-router-dom Link)
function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">E-Commerce App</Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" activeclassname="active">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/add-customer" activeclassname="active">
                        Add Customer
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/customers" activeclassname="active">
                        CUstomers
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/add-product" activeclassname="active">
                        Add Product
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/products" activeclassname="active">
                        Products
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

// Export
export default NavigationBar;

// Link is good for static destinations, no params required (nav bar, footer)
// useNavigate is good for dynamic destinations, param required (destination content changes based on param)
// useNavigate cannot be used inside a class component, Link can


// Everything below is commented out from previous examples
// {/* Example using Link tag */}
// {/* <Link to='/add-customer/' element={<CustomerForm />}>Add Customer</Link>
// <Link to='/customers' element={<CustomerList />}>Customers</Link> */}

// {/* Example using NavLink tag and additional styling */}
// <NavLink to="/" activeClassName="active" >Home</NavLink>
// <NavLink to="/add-customer" activeClassName="active" >Add Customer</NavLink>
// <NavLink to="/customers" activeClassName="active" >Customers</NavLink>
// <NavLink to="/add-product" activeClassName="active" >Add Product</NavLink>
// <NavLink to="/products" activeClassName="active" >Products</NavLink>