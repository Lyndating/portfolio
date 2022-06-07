import React from 'react';

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ScrollButton from '../components/ScrollButton/ScrollButton';
import { Container } from './LayoutStyles';



export const Layout = ({children}) => {
  return (
    <Container>
 
     <Header/>
     
     <main>{children}</main> 
     <ScrollButton/>
     <Footer/>
    </Container>
  )
};