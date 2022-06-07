import React,{useState,useEffect} from 'react';
import {MdBrightness5, MdBedtime} from 'react-icons/md';
import styled from 'styled-components';

const Div = styled.div `
    & svg: {
        display:block,
        cursor: pointer,
    }
`



const ThemeToggle = (props) => {
    const [colorMode, setColorMode]= useState('dark');
    const changeModeHandler =()=>{
        setColorMode(colorMode==="dark"? "light" : "dark");
    }
    useEffect(()=>{
        document.body.dataset.theme = colorMode;
    },[colorMode]);

  return (
    <Div onClick={changeModeHandler}>
        {colorMode==="dark"? <MdBrightness5 size="2.5rem"/> : <MdBedtime size="2.5rem"/>}
    </Div>
  ) 
}

export default ThemeToggle;