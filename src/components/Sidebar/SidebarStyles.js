import styled from "styled-components";
import { colors } from "../../globalStyles";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(9px);
  display: grid;
  transition: 0.3s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background: transparent;
  font-size: 2rem;
  color: ${colors.white};
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  position: fixed;
`;

export const SidebarNav = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 200px;
  width: 100%;
  height: 75%;
  background-color: transparent;
`;

export const SidebarLinks = styled.div`
  display: block;
  background-color: transparent;
`;

export const SidebarLinkWrapper = styled.div`
  background-color: transparent;
  display: flex;
`;

export const SidebarLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.white};
  text-decoration: none;
  background-color: transparent;
  padding: 16px 16px 42px 42px;
  cursor: pointer;
`;
