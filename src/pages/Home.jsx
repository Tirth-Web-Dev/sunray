import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../sections/homeSections/Hero';
import Category from '../sections/homeSections/Category';
import WhyChoose from '../sections/homeSections/WhyChoose';
import KeyProducts from '../sections/homeSections/KeyProducts';
import Testimonials from '../sections/homeSections/Testimonials';
import DistributorStrip from '../sections/homeSections/DistributorStrip';

const Home = () => {
    return (
        <>
        <Helmet>
  <title>Sunray Energy | Solar Installation Kits & Solar Solutions</title>

  <meta
    name="description"
    content="Sunray Energy provides high-quality solar installation kits, solar panels, inverters, and renewable energy solutions for homes and businesses."
  />

  <meta
    name="keywords"
    content="Sunray Energy, solar installation kit, solar panels, solar solutions, solar inverter, renewable energy, solar system"
  />

  <meta property="og:title" content="Sunray Energy" />

  <meta
    property="og:description"
    content="Premium solar installation kits and renewable energy solutions."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://www.sunray-energy.in/"
  />
</Helmet>
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