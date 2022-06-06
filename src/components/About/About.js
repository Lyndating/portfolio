import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents/Section';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = () => {
  return (
    <Section id="about">
    <SectionDivider/>
    <br/>
    <br/>
    <SectionTitle>About Me</SectionTitle>

    <RoughNotationGroup show={true}>
        <SectionText>
        I love building tools that are <RoughNotation type="underline" color="red" > user-friendly, simple and delightful.  
        </RoughNotation>
        </SectionText>
        <SectionText>
         I was just graduated from General Assembly SEI Bootcamp course where I spent  3 months (500+ hours) learning the fundamentals of both <RoughNotation type="highlight" color="#d057a1" >front-end</RoughNotation> and <RoughNotation type="highlight" color="#d057a1" >back-end</RoughNotation> web development. 
        </SectionText>
        <SectionText>
         As a <RoughNotation type="box" color="red"> highly motivated</RoughNotation> and proactive developer with passion and a growth mindset, I bring a balance of critical thinking, problem-solving and creativity into life.
        Through <RoughNotation type="circle" color="red" > 8+ years</RoughNotation> of experience in customer-facing businesses, I have the opportunity to work with both small and large, specialised and cross-functional teams and developed a working style that leans towards <RoughNotation type="highlight" color="#13ADC7" >flexibility</RoughNotation>, <RoughNotation type="highlight" color="#945DD6" >clarity</RoughNotation> and <RoughNotation type="highlight" color="#d057a1" >collaboration</RoughNotation>. 
        </SectionText>
    </RoughNotationGroup>
        <br/>
        <br/>
    </Section>
  )
}

export default About;