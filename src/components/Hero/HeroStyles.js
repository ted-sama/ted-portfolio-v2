import styled from "styled-components";
import { colors, rules } from "../../globalStyles";

export const HeroSection = styled.section`
  padding: ${rules.sectionPadding};

  @media (max-width: 768px) {
    padding: ${rules.sectionPaddingMobile};
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const HeroHeading = styled.h1`
  font-size: 5rem;
  font-weight: 600;
`;

export const HeroTed = styled.span`
  color: ${colors.purple};
  font-weight: 700;
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1rem;
`;
