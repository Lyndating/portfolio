import React from "react";
import { Section, SectionTitle, SectionDivider, SectionText } from "../../styles/GlobalComponents/Section";
import { List, ListRow, ListItem, ListTitle } from "./TechnologiesStyles";
import {DiRuby, DiReact, DiRor,DiPython,DiPostgresql, DiNodejsSmall,DiJavascript, DiJqueryLogo,DiHtml5,DiFirebase,DiCss3,DiBootstrap} from 'react-icons/di';
import {RiVuejsFill} from 'react-icons/ri';
import {SiDocker, SiAmazonaws, SiFirebase} from 'react-icons/si';


const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider id="section_divider"/>
    <br/>
    <br/>
    <SectionTitle>Skills &amp; Tools</SectionTitle>
    <SectionText>
      I&apos;ve worked with a range of technologies in the web developement world. From back-end to Design and still keep learning new ones.
    </SectionText>
      <List>
        <ListRow>
          <ListItem id="skill_items">
            <DiHtml5 size="8rem"/>
            <ListTitle>HTML</ListTitle>
          </ListItem>
          <ListItem id="skill_items">
            <DiCss3 size="8rem"/>
          <ListTitle>CSS</ListTitle>
          </ListItem>
          <ListItem id="skill_items">
            <DiJavascript size="8rem"/>
          <ListTitle>JavaScript</ListTitle>
          </ListItem >
          <ListItem id="skill_items">
            <DiJqueryLogo size="8rem"/>
            <ListTitle>JQuery</ListTitle>
          </ListItem>
        </ListRow>


        <ListRow>
          <ListItem id="skill_items">
            <DiReact size="8rem"/>
          <ListTitle>React</ListTitle>
          </ListItem>
          <ListItem id="skill_items">
            <DiNodejsSmall size="8rem"/>
          <ListTitle>Node</ListTitle>
          </ListItem>
          <ListItem id="skill_items">
            <RiVuejsFill size="8rem"/>
            <ListTitle>Vue</ListTitle>
          </ListItem>
          <ListItem id="skill_items">
            <DiBootstrap size="8rem"/>
          <ListTitle>Bootstrap</ListTitle>
          </ListItem>
        </ListRow>


        <ListRow>
          <ListItem id="skill_items">
            <DiRor size="8rem"/>
          <ListTitle>Rails</ListTitle>
          </ListItem>
          <ListItem  id="skill_items">
            <DiRuby size="7rem"/>
          <ListTitle>Ruby</ListTitle>
          </ListItem>
          <ListItem id="skill_items"> 
            <DiPostgresql size="8rem"/>
          <ListTitle>PostgresSQL</ListTitle>
          </ListItem>
          <ListItem id="skill_items">
            <DiFirebase size="8rem"/>
          <ListTitle>Firebase</ListTitle>
          </ListItem>
        </ListRow>


        <ListRow>
          <ListItem id="skill_items">
            <SiFirebase size="8rem"/>
          <ListTitle coming>Cloud Function</ListTitle>
          </ListItem>
          <ListItem id="skill_items">
            <DiPython size="8rem"/>
          <ListTitle>Python</ListTitle>
          </ListItem>
          <ListItem id="skill_items">
            <SiDocker size="8rem"/>
          <ListTitle>Docker</ListTitle>
          </ListItem>
          <ListItem id="skill_items">
            <SiAmazonaws size="8rem"/>
            <ListTitle>Coming Soon</ListTitle>
          </ListItem>
        </ListRow>
      </List>

  </Section>
);

export default Technologies;