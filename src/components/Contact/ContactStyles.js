import styled from "styled-components";
import { colors, rules } from "../../globalStyles";

export const ContactSection = styled.section`
  padding: ${rules.sectionPadding};
  padding-bottom: 2rem;
  text-align: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: ${rules.sectionPaddingMobile};
    padding-bottom: 2rem;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const ContactHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
`;

export const ContactEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ContactEmail = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${colors.purple};
  }
`;
