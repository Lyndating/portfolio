import React from 'react';
import styled from 'styled-components';

export const ButtonFront = styled.button`
    border:none;
    border-radius: 50px;  
    display:flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    font-size: ${({alt})=> alt? '20px' : '24px'};
    font-weight: 600;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    box-shadow: ${({disabled})=> disabled? 'inset 0px 2px 1px rgba(46,49,55,0.15), inset 0px 0px 4px rgba(20,20,55,0.3)' : "none"};

    opacity: ${({disabled})=> disabled? "0.5" : "1"};
    transition: 0.4s ease;

    &:hover {
        opacity: 0;
    }
    &:focus {
        outline: none;
    }
    &:active{
        opacity: 1;
        box-shadow: inset 0px 2px 1px rgba(46,49,55,0.15), inset 0px 0px 4px rgba(20,20,55,0.3);
    }
    &:disabled {
        background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
        opacity: 0.5;
        box-shadow: inset 0px 2px 1px rgba(46,49,55,0.15), inset 0px 0px 4px rgba(20,20,55,0.3);
    }

`

export const ButtonBack = styled.div`
    width: ${({ alt }) => alt ? '150px' : '262px'};
    height: ${({ alt }) => alt ? '52px' : '64px'};
    border-radius: 50px;
    font-size: ${({ alt }) => alt ? '20px' : '24px'};
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
    color: #fff;
    background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
    cursor: pointer;
    transition: 0.5s ease;
    position: relative;
    overflow: hidden;
    opacity: ${({ disabled }) => disabled ? '.5' : '1'};
`

const Button = (props) => (
    <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
        {props.children}
        <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </ButtonFront>
    </ButtonBack>
    
  
)

export default Button;

