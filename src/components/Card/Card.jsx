// Creating Card component for individual items for men women and children
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`product/${item.id}`} className="link">
        <div className="image">
          <img src={item.img} alt="featured" className="mainimg" />
          {item.isNew && <span>New Season</span>}
        </div>
      </Link>
        <h1 className="title">{item.title}</h1>
      <div className="prices">
        <h3>&#8377; {item.oldPrice}</h3>
        <h3>&#8377; {item.price}</h3>
      </div>
    </div>
  );
};

export default Card;

//     <Link to={`product/${item.id}`} className="link">
//   <div className="card">
//   <div className="image">
//     <img src={item.img} alt="featured" className="mainimg" />
//     {item.isNew && <span>New Season</span>}
//   </div>
//   <h1 className="title">{item.title}</h1>
//   <div className="prices">
//     <h3>&#8377; {item.oldPrice}</h3>
//     <h3>&#8377; {item.price}</h3>
//   </div>
// </div>
// </Link>
