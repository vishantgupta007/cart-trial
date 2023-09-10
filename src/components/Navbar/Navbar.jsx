import { IoIosArrowDown, IoIosCart } from "react-icons/io";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { links, genders } from "../../data";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeToggle, setActiveToggle] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="left-item">
          <div className="flag">
            <img
              src="/img/india.jpg"
              alt="image"
              style={{ height: "30px", width: "35px" }}
            />
            <IoIosArrowDown />
          </div>
          <ul className="gender-links">
            {genders.map((gender, index) => {
              const { name, path } = gender;
              return (
                <li key={index}>
                  <Link to="/products/1">{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="center-item">
          <Link to="/">Trendy Threads</Link>
        </div>

        <ul className={`right-item ${activeToggle ? "showNav" : "hideNav"}`}>
          {links.map((link, index) => {
            const { path, name } = link;
            return (
              <li key={index}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="icons">
          <div className="cart-icon">
            <IoIosCart />
            <span>0</span>
          </div>
          <span
            className="nav-toggle"
            onClick={() => setActiveToggle((prev) => !prev)}
          >
            {activeToggle ? <HiOutlineX /> : <HiMenuAlt3 />}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
