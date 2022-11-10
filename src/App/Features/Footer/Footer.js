import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="social__icons-container">
          <a href="https://github.com/marcinzygan" className="footer__link">
            <Icon icon="fa-brands:github-square" className="footer__icon" />
          </a>

          <a
            href="https://www.facebook.com/ZyganDesign"
            className="footer__link"
          >
            <Icon icon="fa-brands:facebook-square" className="footer__icon" />
          </a>

          <a href="https://twitter.com/MarcinZygan" className="footer__link">
            <Icon icon="fa6-brands:twitter-square" className="footer__icon" />
          </a>

          <a
            href="https://www.behance.net/marcin-zygan"
            className="footer__link"
          >
            <Icon icon="fa-brands:behance-square" className="footer__icon" />
          </a>
        </div>
        <div className="footer__info">
          <p>
            This project is using{" "}
            <a href="https://hearthstoneapi.com">Hearthstone API</a>
          </p>
        </div>
        <div className="footer__date">
          <div>
            <p className="designed">Designed and developed by : </p>
            <span className="footer__span">
              <a className="footer__link" href="https://marcin-zygan.com">
                Marcin Zygan
              </a>
            </span>
          </div>
          <p className="date">2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
