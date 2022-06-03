import React from 'react';
import { Layout } from '../layout/Layout';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';

const Home = () => {
  return (
    
      <Layout>
        <Projects/>
        <Technologies/>
      </Layout>

    
  );
};

export default Home;