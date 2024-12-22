
import { Component } from "react";
import './LibraryStyles.css'

class BookList extends Component {
    render() {
        const books = [
            { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
            { id: 2, title: '1984', author: 'George Orwell' },
            { id: 3, title: 'The Great Gatsby', author: 'f. Scott Fitzgerald' }
        ]

        return (
            <div className="book-list">
                <h2>Library Catalogue</h2>
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>{book.title} by {book.author}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BookList