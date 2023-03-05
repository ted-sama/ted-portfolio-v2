import styled from "styled-components";
import { colors, rules } from "../../globalStyles";

export const AboutSection = styled.section`
  padding: ${rules.sectionPadding};

  @media (max-width: 768px) {
    padding: ${rules.sectionPaddingMobile};
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export const AboutHeading = styled.h2`
  font-size: 5rem;
  font-weight: 600;
  margin-top: 2rem;
  width: fit-content;
  height: 8rem;

  background-image: url("/wave.svg");
  background-repeat: no-repeat;
  background-position: 0 -3.6em;
  background-size: 100%;

  @media (max-width: 825px) {
    font-size: 4rem;
    height: 7rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    height: 5rem;
  }

  span {
    background: transparent;
  }
`;

export const AboutText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 35px;
  margin-top: 2rem;
`;
