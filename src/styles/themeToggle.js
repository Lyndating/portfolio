import React,{useState,useEffect} from 'react';
import {BsSun, BsMoonStars} from 'react-icons/bs';
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
    <Div onClick={changeModeHandler} >
        {colorMode==="dark"? <BsSun size="2.5rem"/> : <BsMoonStars size="2.5rem"/>}
    </Div>
  ) 
}

export default ThemeToggle;