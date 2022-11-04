import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        Designed and developed by :
        <span className="footer__span">
          <a className="footer__link" href="https://marcin-zygan.com">
            Marcin Zygan
          </a>
        </span>
        <div className="footer__info">
          <p>
            This project is using{" "}
            <a href="https://hearthstoneapi.com">Hearthstone API</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
