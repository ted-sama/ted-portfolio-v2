import styled from "styled-components";
import { colors, rules } from "../../globalStyles";

export const ProjectItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 300px;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1100px) {
    height: 400px;
  }
`;

export const ProjectItemImage = styled.div`
  width: 424px;
  height: 265px;
  margin-bottom: 50px;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1100px) {
      width: 40%;
      height: 80%;
    }
  }
`;

export const ProjectItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;

export const ProjectItemTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  padding-left: 2rem;

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${colors.linkHover};
    }
  }
`;

export const ProjectItemDescription = styled.div`
  padding: 2rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  height: 300px;
`;

export const ProjectItemTags = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
  padding: 0 2rem;

  li {
    padding: 5px 10px;
    font-weight: 600;
    border-radius: 10px;
    border: 2px solid ${colors.white};
  }
`;

export const ProjectItemLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
  padding-left: 2rem;

  svg {
    width: 24px;
    height: 24px;

    g {
      fill: ${colors.white};
      transition: all 0.3s ease-in-out;
    }
  }

  a {
    &:hover {
      svg {
        g {
          fill: ${colors.linkHover};
        }
      }
    }
  }
`;
