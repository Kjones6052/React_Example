import { string } from 'prop-types';

const Book = ({ title, author }) => {
    return (
        <li className='book-item'>{title} by {author}</li>
    );
};

Book.propTypes = {
    title: string,
    author: string
}

export default Book;