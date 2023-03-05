import styled from "styled-components";
import { colors, rules } from "../../globalStyles";

export const ProjectsSection = styled.section`
  padding: ${rules.sectionPadding};

  @media (max-width: 768px) {
    padding: ${rules.sectionPaddingMobile};
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectsTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export const ProjectsHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const ProjectsLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 3rem;
  justify-content: end;

  & a {
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 10px;
    border: 3px solid ${colors.white};
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: ${colors.purple};
      background-color: rgba(130, 35, 240, 0.2);
      color: ${colors.purple};
    }
  }
`;
