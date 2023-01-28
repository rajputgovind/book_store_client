import { useEffect, useState } from "react";
import { Alert, Container, Table, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { deleteBook,  fetchAllBooks } from "../services/BookService";

export function BookList() {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await fetchAllBooks()
        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <>
            <Container className="mt-5 text center">
                <Alert><h4>Book List</h4></Alert>
            </Container>
            <Container>
                <LinkContainer to='/add-books'>
                    <Nav.Link > <Button variant="success" className="btn-sm">+ Add Books</Button></Nav.Link>

                </LinkContainer>


            </Container>
            <Container className="mt-4">
                <Table striped bordered hover >
                    <thead >
                        <tr style={{backGroundColor : "plum", color:"blue"}}>

                            <th>Book Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((item) => {
                                return (
                                    <tr>

                                        <td>{item.bookTitle}</td>
                                        <td>{item.author}</td>
                                        <td>{item.categories}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Button variant="danger" className=' btn-sm' onClick={async () => {
                                                await deleteBook(item._id);
                                                fetchBooks()
                                            }}>Delete</Button>
                                            {/* {' '}
                                            <Button  className="btn-sm" onClick={async ()=>{
                                                await editBookDetail(item._id)
                                                saveBook()
                                                fetchBooks()
                                            }}>Edit</Button> */}
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )


}