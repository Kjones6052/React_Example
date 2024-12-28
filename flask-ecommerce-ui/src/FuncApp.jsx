// App in the form of a Function Based Component

// Import
import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import axios from "axios";
import './AppStyles.css';

// App Function
const FuncApp = () => {

    // Creating variables with functions
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // useEffect function to call fetch products
    useEffect(() => {
        fetchProducts();
    }, []);

    // Async function to GET products
    const fetchProducts = async () => {

        // try/catch to catch errors
        try {
            const response = await axios.get('http://127.0.0.1:5000/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
    };

    const handleProductUpdated = () => {
        fetchProducts();
        setSelectedProduct(null);
    };

    const handleProductDeleted = () => {
        fetchProducts();
    };

    return (
        <div className="app-container">
            <h1>Product Management</h1>
            <ProductForm
                selectedProduct={selectedProduct}
                onProductUpdated={handleProductUpdated}
            />
            <ProductList
                products={products}
                onEditProduct={handleEditProduct}
                onProductDeleted={handleProductDeleted}
            />
        </div>
    );
};

// Export
export default FuncApp;