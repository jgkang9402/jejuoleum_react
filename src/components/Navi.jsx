import React from "react";
import { Link } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

const Navi = () => {
  return (
    <nav>
      <div className="nav-wrap">
        <Link to={"/"}>
          <h1>5leum</h1>
        </Link>
        <div className="nav">
          <Link to={"/all"}>
            <div className="nav-link">All</div>
          </Link>
          <Link to={"/map"}>
            <div className="nav-link">Map</div>
          </Link>
          <Link to={"/like"}>
            <div className="nav-link">Like</div>
          </Link>
        </div>
      </div>
    </nav>
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand to={'/'}>5leum</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link>Home</Nav.Link>
    //         <Nav.Link>Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item>Action</NavDropdown.Item>
    //           <NavDropdown.Item>
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item>Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item>
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Navi;
