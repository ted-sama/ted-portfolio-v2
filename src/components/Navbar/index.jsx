import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Header,
  NavContainer,
  NavLogo,
  TedLogo,
  DotLogo,
  MobileNav,
  Nav,
} from "./NavbarStyles";

const Navbar = ({ toggle }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Header>
      <NavContainer>
        <NavLogo href="https://ted-sama.netlify.app/" rel="home">
          <TedLogo>Ted</TedLogo>
          <DotLogo>.</DotLogo>
        </NavLogo>
        {width <= breakpoint ? (
          <MobileNav onClick={toggle}>
            <FaBars />
          </MobileNav>
        ) : (
          <Nav>
            <ul>
              <li>
                <Link smooth spy to="intro" duration={450}>
                  Acceuil
                </Link>
              </li>
              <li>
                <Link smooth spy to="about" duration={450}>
                  À propos
                </Link>
              </li>
              <li>
                <Link smooth spy to="projects" duration={450}>
                  Projets
                </Link>
              </li>
              <li>
                <Link smooth spy to="contact" duration={450}>
                  Contact
                </Link>
              </li>
            </ul>
          </Nav>
        )}
      </NavContainer>
    </Header>
  );
};

export default Navbar;
