// Import
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CustomerList from "./components/CustomerList";
import CustomerFormWrapper from './components/CustomerFormWrapper';
import ProductList from './components/ProductList';
import ProductForm from "./components/ProductForm";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import './AppStyles.css';

// App Function
function App() {
    return (
        <div className="app-container">
            <NavigationBar />
            {/* Routes open and closing tags to place each route inside */}
            {/* Routes load the element when on the specified path */}
            <Routes> 
                {/* Route path="URL" element={Component} */}
                <Route path="/" element={<HomePage />} />
                <Route path="/add-customer/" element={<CustomerFormWrapper />} />
                <Route path="/edit-customer/:id" element={<CustomerFormWrapper />} />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/add-product" element={<ProductForm />} />
                <Route path="/edit-product/:id" element={<ProductForm />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

// Export
export default App;