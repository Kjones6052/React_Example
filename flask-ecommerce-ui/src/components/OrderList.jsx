// Import
import { func, number } from 'prop-types';
import { useState, useEffect } from 'react';

// Creating Function 'OrderList' Component
const OrderList = ({ customerId, onOrderSelect }) => {
    
    // Creating 'orders' Array
    const [orders, setOrders] = useState([]);

    // useEffect(setup<function>, dependency)

    useEffect(() => {
        if (customerId) {
            const fetchedOrders = [
                { id: 101, date: '2021-01-01'},
                { id: 102, date: '2021-01-15'},
            ];
            setOrders(fetchedOrders);
        }
    }, [customerId]);

    // Return Output
    return (
        <div className='order-list'>
            <h3>Orders</h3>
            <ul>
                {orders.map(order => (
                    <li key={order.id} onClick={() => onOrderSelect(order.id)}>
                        Order ID: {order.id}, Date: {order.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Validate Property Types 
OrderList.propTypes = {
    customerId: number,
    onOrderSelect: func
}

// Export
export default OrderList;