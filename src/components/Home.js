import { Alert, Container } from "react-bootstrap";

export function Home(){
    return(
        
            <Container className="mt-4">
                <Alert><h1>Welcome to our Book Store App</h1></Alert>
                <p>in this app we can add books and see list of books store in database </p>
            </Container>
        
    )
}