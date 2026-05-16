import React from 'react';
import { Helmet } from 'react-helmet-async';

import ProductHero from '../sections/productSections/ProductHero';
import ProductGrid from '../sections/productSections/ProductGrid';
import CustomKitStrip from '../sections/productSections/CustomKitStrip';

const Products = () => {
    return (
        <>
        <Helmet>
  <title>Solar Products & Installation Kits | Sunray Energy</title>

  <meta
    name="description"
    content="Explore solar installation kits, solar panels, inverters, batteries, and complete solar energy products from Sunray Energy."
  />

  <meta
    name="keywords"
    content="solar products, solar kit, solar inverter, solar battery, solar panel"
  />
</Helmet>
            <ProductHero />
            <ProductGrid />
            <CustomKitStrip />
        </>
    );
};

export default Products;