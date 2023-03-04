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
            Hey, c'est <HeroTed>Ted</HeroTed>.
          </HeroHeading>
          <HeroText>
            Je suis un développeur principalement web qui crée souvent d'autres
            choses.
          </HeroText>
        </div>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
