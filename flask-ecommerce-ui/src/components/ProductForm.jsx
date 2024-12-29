// Uncontrolled Component
// simpler, direct data management, improve performance, closer to traditional HTML


// Import
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { func, object } from 'prop-types';
import { Form, Button, Alert, Modal, Spinner } from 'react-bootstrap';
import axios from 'axios';

// Create 'ProductForm' Function Based Component
const ProductForm = () => {

    // Constructing variables for component
    const [product, setProduct] = useState({ name: '', price: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    // Wil run as lost as 'ID' is given
    useEffect(() => {
        if (id) { // if ID run code
            axios.get(`http://127.0.0.1:5000/products/${id}`) // GET product data by id
                .then(response => {
                    setProduct(response.data); // Assign data to variable
                }) 
                .catch (error => setErrorMessage(error.message));
        }
    }, [id]);

    const validateForm = () => {
        let errors = {};
        if (!product.name) errors.name = 'Product name is required';
        if (!product.price || product.price <= 0) errors.price = 'Price must be a positive number';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        setSubmitting(true);
        try {
            if (id) {
                await axios.put(`http://127.0.0.1:5000/products/${id}`, productData);
            } else {
                await axios.post('http://127.0.0.1:5000/products', productData)
            }
            setShowSuccessModal(true);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleClose = () => {
        setShowSuccessModal(false);
        setProduct({ name: '', price: '' });
        setSubmitting(false);
        navigate('/products');
    };

    if (isSubmitting) return <p>Submitting product data...</p>;

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>{id ? 'Edit' : 'Add'} Product</h3>
                {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
                <Form.Group constrolId="productName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type='text'
                        name='name'
                        value={product.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group constrolId="productPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        type='text'
                        name='price'
                        value={product.price}
                        onChange={handleChange}
                        isInvalid={!!errors.price}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.price}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant='primary' type='submit' disabled={isSubmitting}>
                    {isSubmitting ? <Spinner as="span" animation='border' size='sm' /> : 'Submit'}
                </Button>
            </Form>
            <Modal show={showSuccessModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Product has been successfully {id ? 'Updated' : 'Added'}!</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
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