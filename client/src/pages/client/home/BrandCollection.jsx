import React, { useState, useEffect } from "react";
import axios from "axios";
const port = import.meta.env.VITE_SERVER_URL;

const BrandCollection = () => {
  const [brandData, setBrandData] = useState([]);

  const getBrandData = async () => {
    try {
      const res = await axios.get(`${port}getbranddata`);
      setBrandData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBrandData();
  })
  return (
    <section className="brand_collection_section">
      <div className="container brand_collection padding-main">
        <h2>Brand Collection Available</h2>

        <div className="brands_collection_images">
          {brandData.slice(0 , 7).map((brand) => (
            <div className="brands-collection-with-name">
            <img src={`/upload/${brand.image}`} alt="Image" />
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCollection;
