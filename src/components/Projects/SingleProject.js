import React,{useState,useEffect} from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';

const SingleProject = ({id, image,title,description, tags, source, demo}) => {
    const [disabled,setDisabled]=useState(false);
    useEffect(()=>{
        if(demo ==="#"){
            setDisabled(true);
        }else{
            setDisabled(false);
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
              <ExternalLinks disabled={disabled} href={demo} target="_blank">Live Demo</ExternalLinks>
              <ExternalLinks href={source} target="_blank">Github Source</ExternalLinks>
            </UtilityList>
        </BlogCard>
  )
}

export default SingleProject;