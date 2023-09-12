import styled from "styled-components";
import { colors, rules } from "../../globalStyles";

export const Header = styled.header`
  background-color: ${colors.navbar};
  backdrop-filter: blur(9px);
  border-bottom: 1px solid #ffffff1f;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${rules.navBarPadding};
  align-items: center;
  z-index: 10;

  @media (max-width: 768px) {
    padding: ${rules.navBarPaddingMobile};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const NavLogo = styled.a`
  display: flex;
  text-decoration: none;
  background-color: transparent;
  color: ${colors.white};
  font-size: 2rem;
  font-weight: 600;
`;

export const TedLogo = styled.span`
  background-color: transparent;
  color: ${colors.purple};
`;

export const DotLogo = styled.span`
  background-color: transparent;
  color: ${colors.white};
`;

export const MobileNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: none;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;

  a {
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;

    li {
      list-style: none;

      a {
        transition: all 0.25s ease;

        &:hover {
          cursor: pointer;
          color: ${colors.purple};
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
