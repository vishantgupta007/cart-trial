import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.css";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 0,
      img: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sweat-shirts",
      oldPrice: 550,
      price: 350,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1777479/pexels-photo-1777479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Casuals",
      isNew: true,
      oldPrice: 650,
      price: 500,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1684079/pexels-photo-1684079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Skirts",
      isNew: true,
      oldPrice: 250,
      price: 150,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Overcoat",
      isNew: true,
      oldPrice: 400,
      price: 250,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1620812/pexels-photo-1620812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Kids-Wear",
      oldPrice: 600,
      price: 300,
    },
    {
      id: 6,
      img: "https://img.freepik.com/premium-photo/travel-accessories-costumes-passports-luggage-cost-travel-maps-prepared-trip_11304-359.jpg",
      title: "Accessories",
      oldPrice: 800,
      price: 650,
    },
  ];

  return (
    <div className="featured">
      {/* ------TOP----- */}
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          omnis animi qui, velit, atque eius placeat sunt, illo minima quod
          accusantium fuga ipsa amet eligendi ducimus possimus ipsam quas
          cupiditate labore quos commodi quo ab sequi? Iusto cum vero
          accusantium!
        </p>
      </div>

      {/* ------BOTTOM----- */}

      <div className="bottom">
        {data.map((item) => {
          return <Card item={item} id={item.id} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
