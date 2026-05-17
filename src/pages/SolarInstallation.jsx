import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactBanner from "../sections/aboutSections/AboutCTA";

const SolarInstallation = () => {
  return (
    <>
      <Helmet>
        <title>Solar Panel Installation in Gujarat | Sunray Energy</title>

        <meta
          name="description"
          content="Sunray Energy provides professional solar panel installation services across Gujarat including Ahmedabad and Mehsana. Reliable, efficient and affordable solar solutions."
        />

        <meta
          name="keywords"
          content="solar panel installation Gujarat, solar installation Ahmedabad, solar installation Mehsana, solar service Gujarat, Sunray Energy"
        />

        <link
          rel="canonical"
          href="https://www.sunray-energy.in/solar-panel-installation-gujarat"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Solar Panel Installation in Gujarat | Sunray Energy"
        />
        <meta
          property="og:description"
          content="Professional solar panel installation services across Gujarat including Ahmedabad and Mehsana."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.sunray-energy.in/solar-panel-installation-gujarat"
        />
      </Helmet>

      <Navbar />

      <main className="px-6 md:px-20 py-10 max-w-6xl mx-auto mt-20">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-500">
          Solar Panel Installation in Gujarat
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-6">
          Sunray Energy offers professional solar panel installation services
          across Gujarat, including Ahmedabad and Mehsana. We ensure safe,
          efficient, and long-lasting solar system setup for residential and
          commercial properties.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Our Solar Installation Services
        </h2>
        <p className="text-gray-700 mb-4">
          We provide complete solar installation services including system
          design, panel mounting, inverter setup, wiring, and testing. Our team
          ensures that every installation meets industry standards and delivers
          optimal performance.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Installation Process
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Site inspection and requirement analysis</li>
          <li>Custom solar system design</li>
          <li>Professional installation</li>
          <li>Testing and quality check</li>
          <li>After-installation support</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why Choose Sunray Energy?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Experienced installation team</li>
          <li>High-quality components</li>
          <li>Affordable pricing</li>
          <li>Reliable service across Gujarat</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Service Areas
        </h2>
        <p className="text-gray-700 mb-4">
          We provide solar panel installation services across Gujarat including
          Ahmedabad, Mehsana, Gandhinagar, and nearby regions.
        </p>

        {/* Internal Link */}
        <p className="text-gray-700 mt-6">
          Looking for complete solar kits? Explore our{" "}
          <a
            href="/"
            className="text-blue-600 underline"
          >
            solar kit solutions
          </a>.
        </p>

        {/* CTA */}
        <div className="mt-10 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">
            Need Solar Installation Service?
          </h3>
          <p className="text-gray-700">
            Contact Sunray Energy today for professional solar panel installation
            anywhere in Gujarat.
          </p>
        </div>

      </main>

      <ContactBanner />
      <Footer />
    </>
  );
};

export default SolarInstallation;