import React from 'react';
import ContactHero from '../sections/contactSections/ContactHero';
import ContactMain from '../sections/contactSections/ContactMain';

const Contact = () => {
    return (
        <>
        <Helmet>
  <title>Contact Us | Sunray Energy</title>

  <meta
    name="description"
    content="Contact Sunray Energy for solar installation kits, product inquiries, and renewable energy solutions."
  />

  <meta
    name="keywords"
    content="contact Sunray Energy, solar inquiry, solar installation support"
  />
</Helmet>
            <ContactHero />
            <ContactMain />
        </>
    );
};

export default Contact;