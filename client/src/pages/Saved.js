import React from 'react'
import { Container, Card} from 'react-bootstrap'
import "./Search.css"
import SavedBooks from "../components/SavedBooks/SavedBooks"
import API from "../utils/API"

class Saved extends React.Component {
    state = {
        books: []
    }

    componentDidMount = () => {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
        .then(res => {this.setState({books: res.data})
        }).catch(err => console.log(err))
    }

    deleteBook = bookData => {
        API.deleteBook(bookData.id)
          .then(window.location.reload(false))
          .catch(err => console.log(err)); 
      }


    render(){
        return(
            <Container>
                <Card>
                        <Card.Header>
                            <h3 className="text-center">Your saved books</h3>
                        </Card.Header>
                        </Card>
                        {this.state.books.length ? (
                            <SavedBooks
                                books={this.state.books}
                                deleteBook={this.deleteBook}
                            />
                            ) : (
                            <div>
                                <hr/>
                            <p>Nothing here! Go back to search and save some books!</p>
                            </div>
                         )}
            </Container>
        )
    }
}
export default Saved