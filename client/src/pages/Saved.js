import React, { Component, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/BookInfo";
import API from "../utils/api";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/BookList";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
        .then(res =>
            this.setState({
            books: res.data
            })
        )
        .catch(err => console.log(err));
    };

    handleBookDelete = id => {
        API.deleteBook(id).then(res => this.getSavedBooks());
    };

    render() {
        return (
        <Container fluid="fluid">
            <Row>
            <Col size="md-12">
                <Jumbotron>
                <h1 className="text-center">
                    <strong>Lutique's Library</strong>
                </h1>
                <h2 className="text-center">
                    Saved Books.
                </h2>
                </Jumbotron>
            </Col>
            </Row>
            <Row>
            <Col size="md-12">
                <Card title="Your Saves:" icon="download">
                {this.state.books.length ? (
                    <List>
                    {this.state.books.map(book => (
                        <Book
                        key={book._id}
                        title={book.title}
                        subtitle={book.subtitle}
                        link={book.link}
                        authors={book.authors.join(", ")}
                        description={book.description}
                        image={book.image}
                        Button={() => (
                            <button
                            onClick={() => this.handleBookDelete(book._id)}
                            className="btn btn-outline-danger ml-2"
                            >
                            Delete
                            </button>
                        )}
                        />
                    ))}
                    </List>
                ) : (
                    <h2 className="text-center">No Saved Books</h2>
                )}
                </Card>
            </Col>
            </Row>
            {this.state.books.length ? <br /> : <Fragment><br /><br /><br /><br /><br /><br /><br /></Fragment>}
        </Container>
        );
    }
}

export default Saved;
