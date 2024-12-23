// Import
import { array, func } from 'prop-types';
import axios from 'axios';

// Creating Function 'ProductList' Component
const ProductList = ({ products, onEditProducts, onProductDeleted }) => {
    
    // DELETE product async function
    const deleteProduct = async (id) => {
        
        // try/catch to catch errors
        try {
            await axios.delete(`http://127.0.0.1:5000/products/${id}`);
            onProductDeleted();
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    // Return Output
    return (
        <div className='product-list'>
            <h1>Products</h1>
            <ul>

                {/* For 'product' in 'products' */}
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} (ID: {product.id})
                        <button onClick={() => onEditProducts(product)}>Edit</button>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
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