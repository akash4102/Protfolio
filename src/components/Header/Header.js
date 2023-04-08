import Link from 'next/link';
import React from 'react';
import { AiFillCode, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
          <a style={{display: "flex", alignItems: "center", color: "white"}}>
            <DiCssdeck size="4rem" /> <Span>Portfolio</Span>
          </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
        <SocialIcons href='https://github.com/akash4102'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/akash-verma-4538971ab/'>
            <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://leetcode.com/akash4102/'>
            <AiFillCode size="3rem" />
        </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
