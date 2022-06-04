import React from 'react';
import { Layout } from '../layout/Layout';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import HomeSection from '../components/Home/HomeSection';
import { Section } from '../styles/GlobalComponents/Section';

const Home = (props) => {
  return (
    
      <Layout>
        <Section grid>
          <HomeSection/>
        </Section> 
        <Projects/>
        <Technologies/>
      </Layout>

    
  );
};

export default Home;