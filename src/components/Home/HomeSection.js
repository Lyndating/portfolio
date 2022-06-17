import React from 'react';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/Section';
import Button from '../../styles/GlobalComponents/Button';
import { MainSection } from './HomeStyles';
import {AiFillSmile } from 'react-icons/ai';
import {FaLaptopCode} from 'react-icons/fa';

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
                Software Engineer<br/><FaLaptopCode size="2.5rem" style={{paddingTop:"0.5rem", paddingRight:"0.5rem"}}/>  Love to learn  &amp; improve everyday
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