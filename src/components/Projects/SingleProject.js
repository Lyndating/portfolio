import React from 'react'
import { projectList } from '../data/Data';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';

const SingleProject = ({id, image,title,description, tags, source, demo}) => {
  return (
        <BlogCard key={id} className="project-card">
          <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{description}</CardInfo>
            <div>
              {/* <TitleContent>Stack</TitleContent> */}
              <TagList>
                {tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={demo}>Live Demo</ExternalLinks>
              <ExternalLinks href={source}>Github Source</ExternalLinks>
            </UtilityList>
        </BlogCard>
  )
}

export default SingleProject;