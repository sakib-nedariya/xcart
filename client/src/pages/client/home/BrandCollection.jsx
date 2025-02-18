import React from "react";
import BrandImage from "../../../assets/image/brand-image.png";

const BrandCollection = () => {
  return (
    <section className="brand_collection_section">
      <div className="container brand_collection padding-main">
        <h2>Brand Collection Available</h2>

        <div className="brands_collection_images">
          <div className="brands-collection-with-name">
            <img src={BrandImage} alt="hero-image" />
            <p>Dell</p>
          </div>
          <div className="brands-collection-with-name">
            <img src={BrandImage} alt="hero-image" />
            <p>Dell</p>
          </div>
          <div className="brands-collection-with-name">
            <img src={BrandImage} alt="hero-image" />
            <p>Dell</p>
          </div>
          <div className="brands-collection-with-name">
            <img src={BrandImage} alt="hero-image" />
            <p>Dell</p>
          </div>
          <div className="brands-collection-with-name">
            <img src={BrandImage} alt="hero-image" />
            <p>Dell</p>
          </div>
          <div className="brands-collection-with-name">
            <img src={BrandImage} alt="hero-image" />
            <p>Dell</p>
          </div>
          <div className="brands-collection-with-name">
            <img src={BrandImage} alt="hero-image" />
            <p>Dell</p>
          </div>
          <div className="brands-collection-with-name">
            <img src={BrandImage} alt="hero-image" />
            <p>Dell</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCollection;
