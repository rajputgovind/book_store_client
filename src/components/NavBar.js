import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavBar() {
    return (
        <>
            

            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Book Store App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/'>
                                <Nav.Link >Home</Nav.Link>

                            </LinkContainer>
                            <LinkContainer to='/add-books'>
                                <Nav.Link >AddBooks</Nav.Link>

                            </LinkContainer>
                            <LinkContainer to='/book-lists'>
                                <Nav.Link >BookLists</Nav.Link>

                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}