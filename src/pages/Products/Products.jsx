import React from "react";

const Products = () => {
  return (
    <div className="products">
      <div className="left">
        <div className="filter-item">
          <h2>Product Catogories</h2>
          <div className="input-item">
            <input type="checkbox" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="input-item">
            <input type="checkbox" value={2} />
            <label htmlFor="2">Coats</label>
          </div>
          <div className="input-item">
            <input type="checkbox" value={3} />
            <label htmlFor="3">Shirts</label>
          </div>
        </div>

        <div className="filter-item">
          <h2>Filter by price</h2>
          <div className="input-item">
            <span>0</span>
            <input type="range" min={0} max={2000} />
            <span>2000</span>
          </div>
        </div>

        <div className="filter-item">
          <h2>Sort By</h2>
          <div className="input-item">
            <input type="radio" value="asc" name="price" />
            <label htmlFor="asc"> Price (Lowest First)</label>
          </div>
          <div className="input-item">
            <input type="radio" value="desc" name="price" />
            <label htmlFor="desc"> Price (Highest First)</label>
          </div>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
};
export default Products;
