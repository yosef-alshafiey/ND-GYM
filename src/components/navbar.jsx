import "./../css/nav.css";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CgGym } from "react-icons/cg";

function Navbar() {
  return (
    <div className="nav">
      <Dropdown>
        <Dropdown.Toggle variant="" className="dropdown">
          <span>More</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dr-menu">
          <Dropdown.Item href="#" className="drop-item">
            Home
          </Dropdown.Item>
          <Dropdown.Item href="#section-service" className="drop-item">
            Service
          </Dropdown.Item>
          <Dropdown.Item href="#section-about" className="drop-item">
            About{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#section-contact" className="drop-item">
            Contact US
          </Dropdown.Item>
          <Dropdown.Item href="/login" className="drop-item">
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <CgGym className="gym-icon" />
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="">
          {" "}
          <span>Search</span>
        </Button>
      </Form>
    </div>
  );
}

export default Navbar;
