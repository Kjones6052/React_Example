import Book from './Book'
import { Component } from "react";
import './LibraryStyles.css'

class BookList extends Component {
    constructor() {
        super();
        this.state = {
            books: [
                { id: 1, title: 'To Kill a Mokingbird', author: 'Harper Lee' },
                { id: 2, title: '1984', author: 'George Orwell' },
                { id: 3, title: 'The Great Gatsby', author: 'f. Scott Fitzgerald' }
                // more books can be added
            ]
    }   
    }
    
    render() {
        return (
            <div className="book-list">
                <h2>Library Catalogue</h2>
                <ul>
                    {this.state.books.map((book) => (
                        <Book key={book.id} title={book.title} author={book.author} />
                    ))}
                </ul>
            </div>
        )
    };
}

export default BookList