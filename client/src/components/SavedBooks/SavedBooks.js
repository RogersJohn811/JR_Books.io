import React, { Component } from 'react';
import SavedBooksCard from "../SavedBooksCard/SavedBooksCard"

class SavedBooks extends Component {
    render() {
        return (
            this.props.books.map((book) => (
            <SavedBooksCard
            id={book._id}
            title={book.title}
            description={book.description}
            authors={book.authors}
            link={book.link}
            image={book.image}
            deleteBook={this.props.deleteBook}
            key={book._id}
            />
        ))
        )
                           
    }
}

export default SavedBooks