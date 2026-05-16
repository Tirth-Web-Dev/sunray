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