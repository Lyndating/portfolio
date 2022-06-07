import React from 'react';
import Link from 'next/link';
import { Container, Div1, Div2,Div3, NavLinks,SocialIcons ,HeaderLi} from './HeaderStyles';
import { AiFillSmile, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ThemeToggle from '../../styles/themeToggle';

const Header = () => { 
    return(
    <Container>
        <Div1>
            <Link href="/">
                <a style={{display: "flex", alignItems:"center", color:"white",}}>
                    <AiFillSmile size="3rem"/><span style={{fontSize:"2rem", marginLeft:"5px"}}> &lt;Ting&gt; </span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <HeaderLi >
                <Link href='#about'>
                    <NavLinks>
                        About
                    </NavLinks>
                </Link>
            </HeaderLi>
            <HeaderLi >
                <Link href='#projects'>
                    <NavLinks>
                        Projects
                    </NavLinks>
                </Link>
            </HeaderLi>
            <HeaderLi >
                <Link href='#technologies'>
                    <NavLinks>
                        Technologies
                    </NavLinks>
                </Link>
            </HeaderLi>
            <HeaderLi >
                <NavLinks href='/resume-Ting-Luo.pdf' alt="resume" target="_blank" download>
                        Resume
                </NavLinks>
            </HeaderLi>
        </Div2>
        <Div3>
            <SocialIcons href='https://github.com/Lyndating'>
                <AiFillGithub size="2.5rem"/>
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/lynn-ting-luo/'>
                <AiFillLinkedin size="2.5rem"/>
            </SocialIcons>
            <SocialIcons >
                <ThemeToggle size="2.5rem" />
            </SocialIcons>
        </Div3>
    </Container>

)};

export default Header; 