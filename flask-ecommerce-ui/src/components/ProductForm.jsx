// Uncontrolled Component
// simpler, direct data management, improve performance, closer to traditional HTML


// Import
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { func, object } from 'prop-types';
import axios from 'axios';

// Create 'ProductForm' Function Based Component
const ProductForm = ({ selectedProduct, onProductUpdated }) => {

    // Constructing variables for component
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    // Wil run as lost as 'ID' is given
    useEffect(() => {
        if (id) { // if ID run code
            const fetchProductDetails = async () => {
                try { 
                    const response = await axios.get(`http://127.0.0.1:5000/products/${id}`); // GET product data by id
                    setName(response.data.name); // Assign data to variable
                    setPrice(response.date.price); // Assign data to variable
                } catch (error) {
                    console.error('Error fetching product details:', error); // catch and display errors
                    setError(error.toString());
                }
            };
            fetchProductDetails();
        }
    }, [id]);

    const validateForm = () => {
        const errors = {};
        if (!name) errors.name = 'Product name is required';
        if (!price) errors.price = 'Price must be a positive number';
        return errors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            const productData = { name, price };
            setSubmitting(true);
            setError(null);
            try {
                if (id) {
                    await axios.put(`http://127.0.0.1:5000/products/${id}`, productData);
                } else {
                    await axios.post('http://127.0.0.1:5000/products', productData)
                }
                setName('');
                setPrice('');
                setSubmitting(false);
                navigate('/products'); // redirecting page via navigate
            } catch (error) {
                console.error('Error submitting product details:', error);
                setError(error.toString());
                setSubmitting(false);
            }
        } else {
            setErrors(errors);
        }
    };

    if (isSubmitting) return <p>Submitting product data...</p>;
    if (error) return <p>Error submitting product data: {error}</p>;

    return (
        <form onSubmit={handleSubmit}>
            <h3>{selectedProduct ? 'Edit' : 'Add'} Product</h3>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </label>
            <br />
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
};

// Validate Property Types
ProductForm.propTypes = {
    selectedProduct: object,
    onProductUpdated: func
}

// Export
export default ProductForm;


// Everything below is commented out from previous exampls

// const ProductForm = () => {
//     const nameRef = useRef(null);
//     const priceRef = useRef(null);
//     const [errors, setErrors] = useState({})

//     // Form Validation
//     const validateForm = () => {
//         const name = nameRef.current.value;
//         const price = priceRef.current.value;
//         const errors = {};
//         if (!name) errors.name = 'Product name is required';
//         if (!price || price <= 0) errors.price = 'Price must be a positive number';
//         return errors;
//     }

//     // handleSubmit Function
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const errors = validateForm();
//         if (Object.keys(errors).length === 0) {
//             const name = nameRef.current.value;
//             const price = priceRef.current.value;
//             console.log('Submitted product:', { name, price });
//             // handle valid form submission
//         } else {
//             setErrors(errors);
//         }
        
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h3>Add/Edit Product</h3>
//             <label>
//                 Name:
//                 <input type="text" ref={nameRef} />
//                 {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
//             </label>
//             <br /><label>
//                 Price:
//                 <input type="number" ref={priceRef} />
//                 {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}
//             </label>
//             <br />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };