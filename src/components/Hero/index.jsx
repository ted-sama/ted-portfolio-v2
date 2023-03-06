import React from "react";
import {
  HeroSection,
  HeroContainer,
  HeroHeading,
  HeroTed,
  HeroText,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection id="intro">
      <HeroContainer>
        <div>
          <HeroHeading>
            Salut, c'est <HeroTed>Ted</HeroTed>.
          </HeroHeading>
          <HeroText>
            Je suis un développeur web qui aime créer des choses.
          </HeroText>
        </div>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
