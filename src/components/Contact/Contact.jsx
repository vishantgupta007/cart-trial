import "./Contact.css";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoPinterest,
  BiLogoGoogle
} from "react-icons/bi";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span className="text">BE IN TOUCH WITH US</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <span>JOIN US</span>
        </div>

        <div className="contact-socials">
          <a
            href="http://twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BiLogoTwitter />
          </a>
          <a
            href="http://facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BiLogoFacebook />
          </a>
          <a
            href="http://pinterest.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BiLogoPinterest />
          </a>
          <a
            href="http://instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BiLogoInstagramAlt />
          </a>
          <a
            href="http://google.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BiLogoGoogle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
