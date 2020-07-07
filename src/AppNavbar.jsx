import React from "react";
import { Nav, Navbar, NavDropdown, Modal, MenuItem } from "react-bootstrap";

export const appName = "Blindfold chess";

export class AppNavbar extends React.Component {
  constructor(props){
    super(props);
    this.state = { showAbout: false }
  }
  setAbout = val => this.setState({ showAbout: val })
  render = () => {
    return (
      <div style={{ marginBottom: 0 }}>
        <Navbar bg="light" expand="lg" style={{ marginBottom: 0, borderRadius: 0 }}>
          <Navbar.Brand href="#brand">
            Blindfold chess
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link onClick={ () => this.setAbout(true) }>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.showAbout} onHide={() => this.setAbout(false)}>
          <Modal.Header closeButton>
            <Modal.Title>About</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>A minimalist tool to play blindfold chess.</p>
            <p>Click on a move to make it, that is really all there is to it!</p>
            <p>All free and <a target="_blank" href="https://github.com/cgoldammer/chess-blindfold">open-source</a> - happy for your contributions.</p>
            <p>Send me an <a href="mailto:goldammer.christian@gmail.com">email</a>!</p>
            <p>Check out <a target="_blank" href="https://www.chrisgoldammer.com">my homepage</a>!</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
