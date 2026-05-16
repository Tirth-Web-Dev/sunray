import React from 'react';
import AboutHero from '../sections/aboutSections/AboutHero';
import AboutStats from '../sections/aboutSections/AboutStats';
import AboutBento from '../sections/aboutSections/AboutBento';
import AboutTimeline from '../sections/aboutSections/AboutTimeline';
import AboutFounder from '../sections/aboutSections/AboutFounder';
import AboutCTA from '../sections/aboutSections/AboutCTA';

const About = () => {
    return (
        <>
        <Helmet>
  <title>About Us | Sunray Energy</title>

  <meta
    name="description"
    content="Learn about Sunray Energy, our mission, and our expertise in solar installation kits and renewable energy solutions."
  />

  <meta
    name="keywords"
    content="about Sunray Energy, solar company, renewable energy experts"
  />
</Helmet>
            <AboutHero />
            <AboutStats />
            <AboutBento />
            <AboutTimeline />
            <AboutFounder />
            <AboutCTA />
        </>
    );
};

export default About;