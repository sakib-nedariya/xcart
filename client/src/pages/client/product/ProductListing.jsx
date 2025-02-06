import React from 'react'

const ProductListing = () => {
  return (
    <>
      <nav className="navbar">
      <input type="text" placeholder="Search..." className="search-input" />
      <select className="sort-dropdown">
        <option value="popular">Popular</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </nav>
    </>
  )
}

export default ProductListing
