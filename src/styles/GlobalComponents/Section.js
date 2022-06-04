import React from 'react';
import styled from 'styled-components';

export const Section = styled.section`
    display: ${(props)=> props.grid? "grid" : "flex"};
    flex-direction: ${(props)=> props.row? "row": "column"};
    padding: ${(props)=> props.noPadding? "0": '32px 48px 0'};
    margin: 0 auto;
    max-width: 1040px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;
    margin-bottom: ${props=> props.marginbottom? "120px" : "0"};
`

export const SectionTitle = styled.h2`
    font-weight: 800;
    font-size: ${(props)=> props.main? "65px":"56px"};
    line-height: ${(props)=> props.main? "72px": "56px"};
    width: max-content;
    max-width: 100%;
    background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    padding: ${(props) => props.main ? '58px 0 16px' : '0'};
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
`

export const SectionDivider = styled.div`
    width: 64px;
    height: 6px;
    border-radius: 10px;
    background-color: #fff;
    background: ${props =>  props.colorAtl?
        'linear-gradient(270deg, #F46737 0%, #945DD6 100%)':
        'linear0gradient(270deg, #133ADC7 0%, #945DD6 100%)'
    };
    margin: $(props=> props.divider? "4rem 0): " "};
`