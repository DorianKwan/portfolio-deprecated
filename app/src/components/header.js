import React, { useState } from "react";
import PropTypes from "prop-types";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ReactSVG } from "react-svg";
import { Link } from "gatsby";

import "./header.scss";

import brandLogoSRC from "../images/icons/brand-logo.svg";

const getRandomNumber = (min = 1, max = 9999) => {
  return Math.random() * (max - min) + min;
};

const buildNavlinks = (navigationData) => {
  const navLinks = [];
  const linkClasses = "px-8 py-2 text-inherit uppercase font-medium";

  navigationData.forEach((link) => {
    const { title, href } = link;
    const linkKey = `${title}-${getRandomNumber()}`;
    navLinks.push(
      <li className="pl-28"><Link to={href} key={linkKey} className={linkClasses}>{title}</Link></li>
    );
  });

  return navLinks;
};

const Header = ({ siteTitle, navigationData }) => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 500ms linear",
    color: "white",
  });

  useScrollPosition(
    (position) => {
      const { currPos } = position;
      const isTransparent = currPos.y > -1;

      const shouldBeStyle = {
        transition: "all 500ms linear",
        color: isTransparent ? "white" : "#544C4A", // harbor
        "background-color": isTransparent ? "transparent" : "white",
        "box-shadow": isTransparent ? "none" : "0px 0px 15px -5px rgba(0,0,0,0.25)",
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

      setHeaderStyle(shouldBeStyle);
    }
  );

  const links = buildNavlinks(navigationData);

  return (
    <header
      className="navbar w-full max-w-1600 h-80 flex flex-row justify-between items-center fixed -top-1"
      style={{ ...headerStyle }}
    >
      <Link to="/" className="text-inherit flex flex-row">
        <span className="sr-only">Go to home:</span>
        <ReactSVG
          src={brandLogoSRC}
          className="flex items-center mb-4 pr-8"
          beforeInjection={(svg) => {
            svg.setAttribute("style", "width: 30px;");
          }}
        />
        <h1 className="font-normal">{siteTitle}</h1>
      </Link>
      <nav>
        <ul className="flex flex-row">
          {links}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
  navigationData: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  siteTitle: "",
  navigationData: [],
};
