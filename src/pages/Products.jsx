import React from 'react';
import ProductHero from '../sections/productSections/ProductHero';
import ProductGrid from '../sections/productSections/ProductGrid';
import CustomKitStrip from '../sections/productSections/CustomKitStrip';

const Products = () => {
    return (
        <div>
            <ProductHero />
            <ProductGrid />
            <CustomKitStrip />
        </div>
    );
};

export default Products;