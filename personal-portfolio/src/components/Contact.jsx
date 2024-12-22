import '../PortfolioStyles.css';
import { useState } from 'react';

const Contact = () => {
    const [contact, setContact] = useState({
        email: 'john.doe@example.com',
        linkedIn: 'linkedin.com/in/johndoe'
    });

    return (
        <footer>
            <h2>Contact</h2>
            <p>Email: {contact.email}</p>
            <p>LinkedIn: {contact.linkedIn}</p>
            {/* can add more */}
        </footer>
    );
};

export default Contact;