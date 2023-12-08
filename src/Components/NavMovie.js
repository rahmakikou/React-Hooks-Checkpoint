import {Nav, Navbar, Container} from 'react-bootstrap'
const NavMovie=()=>{
    return (
        
<Navbar bg="light" data-bs-theme="black">  
        <Container>
          <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    )
}

export default NavMovie