import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Hey! There<br/>
          I am Akash <br />
          A full Stack Developer
      </SectionTitle>
      <SectionText>
        The purpose of this website is just to showcase my skills to recrutier and make my development skills better
      </SectionText>
      <Button onClick={()=>window.location= 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;