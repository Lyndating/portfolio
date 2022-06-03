import React from "react";
import styled from "styled-components";
import {IoIosArrowDropdownCircle } from 'react-icons/io';

// main wrapper
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 1rem;
    padding-top: 2rem;

`;

export const Div1 = styled.div`
    grid-area: 1/1/2/2;
    display: flex;
    flex-direction: row;
    align-content: center;

`

export const Div2 = styled.div `
    grid-area: 1/2/2/4;
    display: flex;
    flex-direction: space-around
`

export const Div3 = styled.div `
    grid-area: 1/5/2/6;
    display:flex;
    just-content: space-around;
    align-items:center;
`
//nav section
export const NavLinks = styled.a`
    font-size: 2rem;
    line-height: 30px;
    color: rgba(255,255,255,0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
`

// dropdown list
export const ContactList = styled.button`
    border: none;
    display:flex;
    position: relative;
    background: none;
    font-size: 2rem;
    line-height: 30px;
    color: rgba(255,255,255,0.75);
    cursor: pointer;
    transition: 0.3s ease;

    &:focus {
        outline:none;
    }

    &:hover {
        color: #fff;
    }
`
export const NavIcons = styled(IoIosArrowDropdownCircle)`
    display: flex;
    align-self: center;
    transition: 0.3s ease;
    margin-left: 10px;
    opacity: 0.75;
    transform: scaleY(1);

    &:hover {
        opacity: 1;
    }  
`

export const SocialIcons = styled.a`
    color: white;
    padding: 10px;
    border-radius: 50px;
    transition: 0.3s ease;

    &:hover {
        background-color: rgba(255,255,255,0.75);
        transform: scale(1.2);
        cursor: pointer;
    }
`;