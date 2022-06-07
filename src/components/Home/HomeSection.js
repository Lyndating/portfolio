import React from 'react';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/Section';
import Button from '../../styles/GlobalComponents/Button';
import { MainSection } from './HomeStyles';
import {AiFillSmile } from 'react-icons/ai';

const HomeSection = (props) => (
    <Section row nopadding marginbottom>
        <MainSection>
            <br/>
            <br/>
            <SectionTitle main center>
                Hello <br/>
                I am Ting Luo 
            </SectionTitle>
            <SectionText>
                Software Engineer<br/> | Love to learn & improve everyday <span><AiFillSmile size="2.5rem"/></span>
            </SectionText>
            <br/>
            <br/>
            <br/>
            <Button onClick={()=> window.location ="/#projects"}>
                Explore!
            </Button>
        </MainSection>
    </Section>
)

export default HomeSection;