import React from 'react';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/Section';
import Button from '../../styles/GlobalComponents/Button';
import { MainSection } from './HomeStyles';

const HomeSection = (props) => (
    <Section row nopadding marginbottom>
        <MainSection>
            <SectionTitle main center>
                Hi I'm Ting Luo <br/>
                Software Engineer
            </SectionTitle>
            <SectionText>
                Believe Technology is changing our life | Love to learn & improve everyday 
            </SectionText>
            <Button onClick={()=> window.location ="https://github.com/Lyndating"}>
                Learn More
            </Button>
        </MainSection>
    </Section>
)

export default HomeSection;