import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/Section';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { projectList } from '../data/Data';


const Projects = () => (

    <Section nopadding id="projects">
        <SectionDivider/>
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projectList.map(project => (
                <BlogCard key={project.id}>
                    <Img src={project.image}/>
                    <TitleContent>
                        <HeaderThree title>
                            {project.title}
                        </HeaderThree>
                        <Hr/>
                    </TitleContent>
                    <CardInfo>
                        {project.description}
                    </CardInfo>
                    <div>
                        <TitleContent>Technologies</TitleContent>
                        <TagList>
                            {project.tags.map((tag, i)=>(
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                    </div>
                    <UtilityList>
                        <ExternalLinks href={project.demo}>Demo</ExternalLinks>
                        <ExternalLinks href={project.source}>Source</ExternalLinks>
                    </UtilityList>
                </BlogCard>
            ))

            }
        </GridContainer>
    </Section>
);

export default Projects;