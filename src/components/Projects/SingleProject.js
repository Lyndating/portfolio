import React,{useState,useEffect} from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';

const SingleProject = ({id, image,title,description, tags, source, demo}) => {
    const [isDemo,setIsDemo]=useState(true);
    useEffect(()=>{
        if(description.toLowerCase().includes("ongoing")){
            setIsDemo(false);
        }else{
            setIsDemo(true);
        }
    },[]);

  return (
        <BlogCard key={id} className="project-card">
          <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={demo} target="_blank">{!isDemo? "Doc Link" : "Live Demo"}</ExternalLinks>
              <ExternalLinks href={source} target="_blank">Github Source</ExternalLinks>
            </UtilityList>
        </BlogCard>
  )
}

export default SingleProject;