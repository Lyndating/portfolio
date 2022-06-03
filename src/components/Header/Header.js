import React from 'react';
import Link from 'next/link';
import { Container, Div1, Div2,Div3, NavLinks,SocialIcons } from './HeaderStyles';
import { AiFillSmile, AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const Header = () => ( 
    <Container>
        <Div1>
            <Link href="/">
                <a style={{display: "flex", alignItems:"center", color:"white", top:"0", left:"0",position:"absolute"}}>
                    <AiFillSmile size="3.5rem"/><span></span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href='/projects'>
                    <NavLinks>
                        Projects
                    </NavLinks>
                </Link>
            </li>
            <li>
                <Link href='/projects'>
                    <NavLinks>
                        Technologies
                    </NavLinks>
                </Link>
            </li>
            <li>
                <Link href='/projects'>
                    <NavLinks>
                        About
                    </NavLinks>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href='https://github.com/Lyndating'>
                <AiFillGithub size="2.5rem"/>
            </SocialIcons>
            <SocialIcons href='https://github.com/Lyndating'>
                <AiFillLinkedin size="2.5rem"/>
            </SocialIcons>
        </Div3>
    </Container>

);

export default Header; 