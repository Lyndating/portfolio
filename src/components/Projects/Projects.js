import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/Section';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { projectList } from '../data/Data';
import SingleProject from './SingleProject';

const Projects = () => (
  <Section  id="projects">
    <SectionDivider id="section_divider"/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer >
      {projectList.map(({id, image,title,description, tags, source, demo}) => {
        return (
            <SingleProject
                key={id}
                id={id}
                image={image}
                title={title}
                description={description}
                tags={tags}
                source={source}
                demo={demo}
            />
        );
      })}
    </GridContainer>
    <br/>
    <br/>
  </Section>
);

export default Projects;