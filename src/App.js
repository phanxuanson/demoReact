import React, { useRef, useState } from "react";
import "./App.css";
import {
  Container,
  Button,
  Card,
  Form,
  FormGroup,
  FormControl,
  Jumbotron,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
export default function App() {
  // const [file, setFile] = useState(null);
  const [value, setValue] = useState("");

  function handleSMSChange(e) {
    setValue(e.target.value);
  }
  // function handleFileChange(e) {
  //   console.log(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);

    return (
      <div className="App">
        <Container fluid>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Mobifone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <Card className="info">
            <Container>
              <Row>
                <Col>
                  <Form
                    className="infor__title"
                    style={{ padding: "20px" }}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Nhập Thông Tin Nội Dung Vào Đây</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="sms"
                        value={value}
                      />
                      <Form.File id="exampleFormControlFile1" label="" />
                    </Form.Group>
                    <Button type="button">Gởi Thông Tin</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Card>
        </Container>
      </div>
    );
  }
}
