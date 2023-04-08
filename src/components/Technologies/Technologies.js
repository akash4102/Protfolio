import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the web development world from backend to design
    </SectionText>
    <List>
        <ListItem>
           <DiReact size="3rem"/>
           <ListContainer>
              <ListTitle>
                Front-End
              </ListTitle>
              <ListParagraph>
                Experience with <br />
                React.js , React-Native , Jquery , HTML , CSS , JavaScript,  bootstrap <br />
                familiar with Next.js and materialUI

              </ListParagraph>
           </ListContainer>
        </ListItem>
        <ListItem>
           <DiFirebase size="3rem"/>
           <ListContainer>
              <ListTitle>
                Backend-End
              </ListTitle>
              <ListParagraph>
                Experience with <br />
                Node.js , C++ , Python , mongoDb
              </ListParagraph>
           </ListContainer>
        </ListItem>
        <ListItem>
           <DiZend size="3rem"/>
           <ListContainer>
              <ListTitle>
                UI/UX
              </ListTitle>
              <ListParagraph>
                familiar with <br />
                Tools like figma , Canva
              </ListParagraph>
           </ListContainer>
        </ListItem>
    </List>
  </Section>
);

export default Technologies;
