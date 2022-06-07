import React from "react";
import { Section, SectionTitle, SectionDivider, SectionText } from "../../styles/GlobalComponents/Section";
import { List, ListRow, ListItem, ListTitle } from "./TechnologiesStyles";
import {DiRuby, DiReact, DiRor,DiPython,DiPostgresql, DiNodejsSmall,DiJavascript, DiJqueryLogo,DiHtml5,DiFirebase,DiCss3,DiBootstrap} from 'react-icons/di';
import {RiVuejsFill} from 'react-icons/ri';
import {SiDocker, SiAmazonaws, SiFirebase} from 'react-icons/si';


const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider/>
    <br/>
    <br/>
    <SectionTitle>Skills & Tools</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web developement world. From back-end to Design and still keep learning new ones.
    </SectionText>
      <List>
        <ListRow>
          <ListItem>
            <DiHtml5 size="8rem"/>
            <ListTitle>HTML</ListTitle>
          </ListItem>
          <ListItem>
            <DiCss3 size="8rem"/>
          <ListTitle>CSS</ListTitle>
          </ListItem>
          <ListItem>
            <DiJavascript size="8rem"/>
          <ListTitle>JavaScript</ListTitle>
          </ListItem>
          <ListItem>
            <DiJqueryLogo size="8rem"/>
            <ListTitle>JQuery</ListTitle>
          </ListItem>
        </ListRow>


        <ListRow>
          <ListItem>
            <DiReact size="8rem"/>
          <ListTitle>React</ListTitle>
          </ListItem>
          <ListItem>
            <DiNodejsSmall size="8rem"/>
          <ListTitle>Node</ListTitle>
          </ListItem>
          <ListItem>
            <RiVuejsFill size="8rem"/>
            <ListTitle>Vue</ListTitle>
          </ListItem>
          <ListItem>
            <DiBootstrap size="8rem"/>
          <ListTitle>Bootstrap</ListTitle>
          </ListItem>
        </ListRow>


        <ListRow>
          <ListItem>
            <DiRor size="8rem"/>
          <ListTitle>Rails</ListTitle>
          </ListItem>
          <ListItem>
            <DiRuby size="8rem"/>
          <ListTitle>Ruby</ListTitle>
          </ListItem>
          <ListItem>
            <DiPostgresql size="8rem"/>
          <ListTitle>PostgresSQL</ListTitle>
          </ListItem>
          <ListItem>
            <DiFirebase size="8rem"/>
          <ListTitle>Firebase</ListTitle>
          </ListItem>
        </ListRow>


        <ListRow>
          <ListItem >
            <SiFirebase size="8rem"/>
          <ListTitle>Cloud Function</ListTitle>
          </ListItem>
          <ListItem >
            <DiPython size="8rem"/>
          <ListTitle>Python</ListTitle>
          </ListItem>
          <ListItem >
            <SiDocker size="8rem"/>
          <ListTitle>Docker</ListTitle>
          </ListItem>
          <ListItem >
            <SiAmazonaws size="8rem"/>
            <ListTitle>Coming Soon</ListTitle>
          </ListItem>
        </ListRow>
      </List>

  </Section>
);

export default Technologies;