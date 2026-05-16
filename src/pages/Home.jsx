import React from 'react';
import Hero from '../sections/homeSections/Hero';
import Category from '../sections/homeSections/Category';
import WhyChoose from '../sections/homeSections/WhyChoose';
import KeyProducts from '../sections/homeSections/KeyProducts';
import Testimonials from '../sections/homeSections/Testimonials';
import DistributorStrip from '../sections/homeSections/DistributorStrip';

const Home = () => {
    return (
        <>
          <Hero />
          <Category />
          <WhyChoose />
          <KeyProducts />
          <Testimonials />
          <DistributorStrip />
        </>
    );
};

export default Home;