import React from "react";
import {
  ContactSection,
  ContactContainer,
  ContactHeading,
  ContactEmailWrapper,
  ContactEmail,
} from "./ContactStyles";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactHeading>Si vous souhaitez me contacter !</ContactHeading>
      <ContactContainer>
        <ContactEmailWrapper>
          <ContactEmail href="mailto:teddynsoki@gmail.com">
            teddynsoki@gmail.com
          </ContactEmail>
          <ContactEmail
            href="https://www.linkedin.com/in/teddy-nsoki-507138245/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </ContactEmail>
        </ContactEmailWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
