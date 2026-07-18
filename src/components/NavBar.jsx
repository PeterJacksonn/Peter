import { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import "../styles/NavBar.css";

const links = [
  { label: "Home", href: "#intro" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const scrollPos = useRef(0);

  useEffect(() => {
    if (expanded) {
      scrollPos.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos.current}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [expanded]);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={"navbar"}
      data-bs-theme="dark"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand href="/" className="brand">
          Peter Jackson
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto" onSelect={() => setExpanded(false)}>
            {links.map((link) => (
              <Nav.Link key={link.href} href={link.href} className="link">
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link href="mailto:you@pjacksonn03@gmail.com" className="link">
              <EmailRoundedIcon style={{ fontSize: 20 }} />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/PeterJacksonn"
              target="_blank"
              className="link"
            >
              <GitHubIcon style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link
              href="https://linkedin.com/in/pjacksonn"
              target="_blank"
              className="link"
            >
              <LinkedInIcon style={{ fontSize: 21 }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
