import React, { useEffect } from "react";
import { Link } from "react-scroll";
import {
  SidebarContainer,
  CloseIcon,
  SidebarWrapper,
  SidebarNav,
  SidebarLinks,
  SidebarLink,
  SidebarLinkWrapper,
} from "./SidebarStyles";

const Sidebar = ({ isOpen, toggle }) => {
  const body = document.querySelector("body");

  useEffect(() => {
    if (isOpen) {
      body.classList.add("disable-scroll");
    }
    if (!isOpen) {
      body.classList.remove("disable-scroll");
    }
  });

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <SidebarNav>
        <SidebarLinks>
          <SidebarLinkWrapper>
            <SidebarLink smooth spy to="intro" duration={450} onClick={toggle}>
              Acceuil
            </SidebarLink>
          </SidebarLinkWrapper>
          <SidebarLinkWrapper>
            <SidebarLink smooth spy to="about" duration={450} onClick={toggle}>
              À propos
            </SidebarLink>
          </SidebarLinkWrapper>
          <SidebarLinkWrapper>
            <SidebarLink
              smooth
              spy
              to="projects"
              duration={450}
              onClick={toggle}
            >
              Projets
            </SidebarLink>
          </SidebarLinkWrapper>
          <SidebarLinkWrapper>
            <SidebarLink
              smooth
              spy
              to="contact"
              duration={450}
              onClick={toggle}
            >
              Contact
            </SidebarLink>
          </SidebarLinkWrapper>
        </SidebarLinks>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
