import React from "react";
import {
  AboutSection,
  AboutContainer,
  AboutTitle,
  AboutHeading,
  AboutText,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutSection id="about">
      <AboutTitle>À propos</AboutTitle>
      <AboutContainer>
        <AboutHeading>
          <span>Musique, </span>
          <span>films, </span>
          <span>code</span>
        </AboutHeading>
        <AboutText>
          Hey, je suis Teddy Nsoki ou Ted. Je suis principalement développeur
          web en alternance. Passionné par la musique, les films ou encore les
          jeux-vidéos, j'aime particulièrement ce qui est graphique et créatif.
          Ainsi j'aime beaucoup créer des expériences pleines de créativité pour
          apporter la meilleure expérience possible.
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
