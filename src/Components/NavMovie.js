import {Link} from "react-router-dom" 
import {Nav, Navbar, Container} from 'react-bootstrap'
 
const NavMovie=()=>{
    return (
        
<Navbar bg="light" data-bs-theme="black">  
        <Container>
        <Navbar.Brand href="#home"><img style={{width:'80px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbL5vzQQ003S8yBGYlol9ckQwjRiqf9fLwH1cfpabaS9BteKA_vmNKvF0ii5IhONrG0D0&usqp=CAU" alt="not found"/></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/"> <Nav.Link style={{color:'pink', fontSize:'30px',fontFamily:'fantasy', margin:'30px'}} href="#home">Home</Nav.Link></Link> 
           <Link to="/MovieList"> <Nav.Link style={{color:'pink', fontSize:'30px',fontFamily:'fantasy', margin:'30px'}}  href="#features">Movies</Nav.Link></Link>
            
          </Nav>
        </Container>
      </Navbar> 
    )
}

export default NavMovie