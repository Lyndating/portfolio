import React from 'react';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/Section';
import Button from '../../styles/GlobalComponents/Button';
import { MainSection } from './HomeStyles';

const HomeSection = (props) => (
    <Section row nopadding marginbottom>
        <MainSection>
            <SectionTitle main center>
                Hello <br/>
                I am Ting Luo
            </SectionTitle>
            <SectionText>
                Software Engineer | Love to learn & improve everyday 
            </SectionText>
            <Button onClick={()=> window.location ="https://github.com/Lyndating"}>
                Explore!
            </Button>
        </MainSection>
    </Section>
)

export default HomeSection;