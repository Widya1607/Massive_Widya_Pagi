import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () =>{
    return (
      <div>
        <Navbar>
            <Container>
              <Navbar.Brand>KONSERS</Navbar.Brand>
              <Nav> 
                <Nav.Link>TRENDING</Nav.Link>
                <Nav.Link>KONSER</Nav.Link>
              </Nav>  
            </Container>
        </Navbar>
      </div>  
    )
}

export default NavigationBar