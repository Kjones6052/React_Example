// Import
import axios from 'axios';
import { array, func } from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, ListGroup, Row, Col } from 'react-bootstrap';

// Creating Function Based 'ProductList' Component
const ProductList = () => {

    // Constructing Variables
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // Function to fetch Product Data
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/products'); // GET data and assign value of data to variable 'response'
            setProducts(response.data); // using 'setProducts' to access the data from 'response'(local scope) and assign it to the variable 'products' constructed for component(global scope)
        } catch (error) {
            console.error('Error fetching products:', error); // catch and log errors
        }
    };
    
    // DELETE product async function
    const deleteProduct = async (id) => {
        
        // try/catch to catch errors
        try {
            await axios.delete(`http://127.0.0.1:5000/products/${id}`); // DELETE request to remove product according to 'id'
            fetchProducts(); // run 'fetchProducts' to update products list
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    // Will run once
    useEffect(() => {
        fetchProducts();
    }, []);

    // Return Output
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Products</h3>
                    <ListGroup>
                        {products.map(product => {
                            <ListGroup.Item key={product.id} className='d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-white rounded'>
                                {product.name} (ID: {product.id})
                                <div>
                                    <Button variant='primary' onClick={() => navigate(`/edit-product/${product.id}`)} className='me-2'>Edit</Button>
                                </div>
                            </ListGroup.Item>
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

// Validating Property Types
ProductList.propTypes = {
    products: array,
    onEditProducts: func,
    onProductDeleted: func
}

// Export
export default ProductList;


// Everything below is commented out from previous examples

// const ProductList = ({ orderId }) => {
    
//     // Creating 'products' Array
//     const  [products, setProducts] = useState([]);

//     // useEffect(setup<function>, dependency)
//     useEffect(() => {
//         if (orderId) {

//             // Simulate API call to get products
//             const fetchedProducts = [
//                 { id: 'A123', name: 'Coffee' },
//                 { id: 'B456', name: 'Croissant' },
//             ];

//             // Set Products array to be equal to 'fetched products'
//             setProducts(fetchedProducts);
//         }
//     }, [orderId]);

//     // Return Output
//     return (
//         <div className='product-list'>
//             <h1>Products</h1>
//             <ul>

//                 {/* For 'product' in 'products' */}
//                 {products.map(product => (
//                     <li key={product.id}>
//                         {product.name} (ID: {product.id})
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };