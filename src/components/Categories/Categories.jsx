import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/2962239/pexels-photo-2962239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <button>
            <Link to="products/1">Men</Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/9595073/pexels-photo-9595073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <button>
            <Link to="products/1">Accessories</Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/11034416/pexels-photo-11034416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <button>
            <Link to="products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row same">
              <img src="https://images.pexels.com/photos/7543637/pexels-photo-7543637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <button>
                <Link to="products/1">Shoes</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row same">
              <img src="https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <button>
                <Link to="products/1">Kids</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <img src="https://www.realmenrealstyle.com/wp-content/uploads/2021/08/4-1.jpg" />
          <button>
            <Link to="products/1">Formals</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
