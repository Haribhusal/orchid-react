import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="border-b-[1px] border-gray-300">
      <Container>
        <Navbar.Brand href="#home">
          <img className="size-12" src="/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex gap-3">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/news"}>News</Link>
            <Link to={"/about"}>Services</Link>
            <Link to={"/about"}>Contact</Link>
            <Link to={"/about"}>FAQ</Link>
            <Link to={"/about"}>Get Started</Link>
          </Nav>

          <Form inline className="ml-10">
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
