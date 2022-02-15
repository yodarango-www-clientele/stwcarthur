// core
import React from "react";

// styles
import footerStyles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.mainWrapper}>
      <p>
        Designed and maintained by{" "}
        <a
          href='https://www.xharcoal.com'
          target={`_blank`}
          rel={`noopener noreferrer`}
          className={footerStyles.footerAtag}
        >
          Xharcoal
        </a>
      </p>
    </div>
  );
};

export default Footer;
