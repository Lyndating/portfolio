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
    height: 100px;
    align-items: center;


    @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    margin: 0 auto;
    @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`

export const Div2 = styled.div `
    grid-area: 1/2/2/4;
    display: flex;
    flex-direction: space-around;
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-area: 2 / 2 / 3 / 5;
        margin-left: -4rem;
    }
    @media ${(props)=> props.theme.breakpoints.xs} {
            margin-left: -7rem;
    }
    
`

export const Div3 = styled.div `
    grid-area: 1/5/2/6;
    display:flex;
    just-content: space-around;
    align-items:center;
    @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`
//nav section
export const NavLinks = styled.a`
    font-size: 2rem;
    line-height: 30px;
    text-decoration: none;
    color: rgba(255,255,255,0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding-right: 1rem;
        font-size: 1.8rem;
    }
`

// Header Links underline animation
export const HeaderLi= styled.li`
	display: inline-block;
  	position: relative;
	color: ${props=> props.theme.colors.primary1};
    margin-right: 45px;
    list-style-type: none;
	&:after {
  		content: '';
  		position: absolute;
  		width: 100%;
  		transform: scaleX(0);
  		height: 2px;
  		bottom: 0;
  		left: 0;
  		background-color: ${props=> props.theme.colors.primary1};
  		transform-origin: bottom right;
  		transition: transform 0.25s ease-out;
	}

	&:hover:after {
  		transform: scaleX(1);
  		transform-origin: bottom left;
	}

    @media ${props => props.theme.breakpoints.md} {
        margin-right: 15px;
    }
    @media ${props => props.theme.breakpoints.sm} {
        margin-right: 30px;
    }
    @media ${props=> props.theme.breakpoints.xs} {
        margin-right: 15px;
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