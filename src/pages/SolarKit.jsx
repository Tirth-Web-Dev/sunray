import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactBanner from "../sections/aboutSections/AboutCTA";

const SolarKit = () => {
  return (
    <>
      <Helmet>
        <title>Solar Kit Solutions in Gujarat | Sunray Energy</title>

        <meta
          name="description"
          content="Sunray Energy provides complete solar kit solutions across Gujarat, including Ahmedabad and Mehsana. Reliable and affordable solar energy systems for homes and businesses."
        />

        <meta
          name="keywords"
          content="solar kit Gujarat, solar energy Gujarat, solar panel kit Gujarat, solar kit Ahmedabad, solar kit Mehsana, Sunray Energy"
        />

        <link rel="canonical" href="https://www.sunray-energy.in/solar-kit" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Solar Kit Solutions in Gujarat | Sunray Energy"
        />
        <meta
          property="og:description"
          content="Complete solar kit solutions across Gujarat including Ahmedabad and Mehsana."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.sunray-energy.in/solar-kit"
        />
      </Helmet>

      <Navbar />

      <main className="px-6 md:px-20 py-10 max-w-6xl mx-auto mt-20">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-500">
          Solar Kit Solutions in Gujarat
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-6">
          Sunray Energy provides complete solar kit solutions across Gujarat,
          including Ahmedabad and Mehsana. Our solar kits are designed for
          efficiency, durability, and long-term savings for both residential and
          commercial use.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          What is a Solar Kit?
        </h2>
        <p className="text-gray-700 mb-4">
          A solar kit is a complete package that includes solar panels,
          inverter, wiring, mounting structure, and other components required
          to generate solar power. These kits simplify installation and provide
          a ready-to-use energy solution.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Types of Solar Kits We Offer
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Residential Solar Kits</li>
          <li>Commercial Solar Systems</li>
          <li>Off-Grid Solar Kits</li>
          <li>On-Grid Solar Solutions</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why Choose Sunray Energy?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>High-quality solar components</li>
          <li>Expert installation and support</li>
          <li>Affordable and cost-effective solutions</li>
          <li>Trusted solar provider across Gujarat</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Solar Kit Installation in Gujarat
        </h2>
        <p className="text-gray-700 mb-4">
          We provide complete solar installation services across Gujarat,
          including Ahmedabad, Mehsana, and nearby areas. Our team ensures safe
          installation, proper setup, and maximum performance of your solar
          system.
        </p>

        {/* Service Areas */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Service Areas in Gujarat
        </h2>
        <p className="text-gray-700 mb-4">
          Sunray Energy serves multiple locations across Gujarat including
          Ahmedabad, Mehsana, Gandhinagar, and surrounding regions with reliable
          solar energy solutions.
        </p>

        {/* CTA */}
        <div className="mt-10 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">
            Looking for Solar Kit Solutions?
          </h3>
          <p className="text-gray-700">
            Contact Sunray Energy today to get the best solar kit solutions
            tailored to your needs in Gujarat.
          </p>
        </div>

      </main>

      <ContactBanner />
      <Footer />
    </>
  );
};

export default SolarKit;