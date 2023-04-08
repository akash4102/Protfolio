import React from 'react';
import { AiFillCode, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:9818032019'>9818032019</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mail:aakashverma4102@gmail.com'>aakashverma4102@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Build the Technology</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/akash4102'>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/akash-verma-4538971ab/'>
              <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://leetcode.com/akash4102/'>
              <AiFillCode size="3rem" />
          </SocialIcons>
        </SocialContainer>
       </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
