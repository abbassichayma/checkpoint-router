import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function CNavbar({setSearch}) {
  return (
    <div>
       <Navbar bg="dark" variant="dark">

    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to ="/">Home</Nav.Link>
      <Nav.Link href="Features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
    <Nav>
        <input type="text" placeholder="Rechercher" onChange={(e) => setSearch(e.target.value)}/>
    </Nav>
  </Navbar> 
    </div>
  )
}

export default CNavbar