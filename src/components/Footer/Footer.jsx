import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* -----------TOP---------- */}
      
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Men</span>
            <span>Women</span>
            <span>Children</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>

          <div className="item">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              consequatur deleniti, soluta amet quibusdam atque dolor voluptate
              aspernatur, quis placeat sed a sequi totam quod harum veniam et
              odio sunt!
            </p>
          </div>
          <div className="item">
            <h1>Contacts</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              consequatur deleniti, soluta amet quibusdam atque dolor voluptate
              aspernatur, quis placeat sed a sequi totam quod harum veniam et
              odio sunt!
            </p>
          </div>
        </div>

        {/* -----------BOTTOM---------- */}
        <div className="bottom">
        <div className="left">
          <span className="logo">Trendy Threads</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.jpg" alt="payemnt" />
        </div>
      </div>
      </div>
    
  );
};

export default Footer;
