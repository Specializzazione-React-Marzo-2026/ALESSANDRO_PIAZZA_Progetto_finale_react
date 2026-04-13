import { FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa6";
import "./Footer.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Link to="/" className="site-footer__brand-link">
          <div className="site-footer__brand">
            <img
              src="/favicon.svg"
              alt="Square Games logo"
              className="site-footer__logo"
            />
            <div>
              <p className="site-footer__title">Square Games</p>
              <p className="site-footer__tagline">
                Gaming picks, clean and sharp.
              </p>
            </div>
          </div>
        </Link>

        <div className="site-footer__actions">
          

          <div
            className="site-footer__socials"
            aria-label="External gaming links"
          >
            <a
              href="https://www.instagram.com/everyeyeit/"
              target="_blank"
              rel="noreferrer"
              aria-label="Everyeye Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitch.tv/everyeye"
              target="_blank"
              rel="noreferrer"
              aria-label="Everyeye Twitch"
            >
              <FaTwitch />
            </a>
            <a
              href="https://www.youtube.com/@Everyeye"
              target="_blank"
              rel="noreferrer"
              aria-label="Everyeye YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span> Powered By: </span>
        <Link
          to="https://www.linkedin.com/in/alessandro-michele-piazza-13b751171/"
          target="_blank"
          rel="noreferrer"
        >
          <span className=" powered_by"> Alessandro Michele Piazza </span>
        </Link>
      </div>
    </footer>
  );
}
