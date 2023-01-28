import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import * as routes from "../../routes/routes";
import BadgeComponent from "../badge";

function OffcanvasExample() {
  const linkButtons = [
    { id: 1, title: "| about hooks", link: routes.ROUTES_HOME_PAGE },
    { id: 2, title: "| useState and useEffect", link: routes.ROUTES_USEEFFECT },
    { id: 3, title: "| useRef", link: routes.ROUTES_USEREF },
    {
      id: 4,
      title: "| useCallBack and useMemo",
      link: routes.ROUTES_USECALLBACK,
    },
    {
      id: 5,
      title: "| useContext",
      link: routes.ROUTES_ORDERS,
    },
  ];

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          bg="dark"
          variant="dark"
          key={expand}
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#">Hooks</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Hooks
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {linkButtons.map((item) => (
                    <Nav.Link key={item.id} href={item.link}>
                      {item.title}
                    </Nav.Link>
                  ))}
                </Nav>
                <BadgeComponent />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
