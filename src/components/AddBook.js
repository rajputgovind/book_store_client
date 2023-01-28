import { StatusCodes } from "http-status-codes"
import { useState } from "react"
import { Container, Alert, Button, Form, Col, Row } from "react-bootstrap"
import { saveBook } from "../services/BookService"

export function AddBook() {
    const [bookData, setBookData] = useState({})
    const [isInserted, setIsInserted] = useState(false);

    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await saveBook(bookData)
        console.log(response.data)
        if (response.status == StatusCodes.CREATED) {
            setIsInserted(true)
            setTimeout(() => {
                setIsInserted(false);
            }, 2000);
        }
    }

    return (
        <>
            <Container className="mt-5 text center">
                <Alert><h1>Add Book</h1></Alert>
            </Container>
            <Container className="mt-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" name='bookTitle' placeholder="Enter Book Name" onChange={handleChange} />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name='author' placeholder="enter book author" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Categories</Form.Label>
                        <Form.Control type="text" name='categories' placeholder="enter book price" onChange={handleChange} />
                    </Form.Group>

                    

                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name='price' placeholder="enter book price" onChange={handleChange} />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Done
                    </Button>{' '}
                    <Button variant="danger" type="reset">
                        cancel
                    </Button>
                </Form>
            </Container>
            {
                isInserted ?
                    <Container className="mt-5">
                        <Row>
                            <Col lg={4}>
                                <Alert variant="success">Book added successfully...! </Alert>
                            </Col>
                        </Row>
                    </Container> : null
            }
        </>
    )
}