import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { ReactSVG } from "react-svg";

import getIconSRC from "../utilities/getIconSRC";

import "./footer.scss";

const buildSocialLinks = (socialData) => {
  const socialLinks = [];

  socialData.forEach((social) => {
    const { title, href, icon } = social;
    const helperText = `Open my ${title} in new tab`;
    const iconSRC = getIconSRC(icon);

    socialLinks.push(
      <li key={title} className="max-w-24">
        <a className="text-charcoal" href={href} target="_blank" rel="noopener noreferrer" title={helperText}>
          <span className="sr-only">{helperText}</span>
          <ReactSVG src={iconSRC} />
        </a>
      </li>
    );
  });

  return socialLinks;
};

const buildNavigationLinks = (navigationData) => {
  const navLinks = [];

  navigationData.forEach((link) => {
    const { title, href } = link;

    navLinks.push(
      <li className="pt-6" key={`footer-list-item-${title}`}>
        <Link className="text-off-white" to={href}>{title}</Link>
      </li>
    );
  });

  return navLinks;
};

const Footer = ({ siteTitle, navigationData, socialData }) => {
  const navLinks = buildNavigationLinks(navigationData);
  const socialLinks = buildSocialLinks(socialData);
  const brandLogoSRC = getIconSRC("brand-logo");

  return (
    <footer className="footer w-full md:h-300">
      <section className="stretch-bg py-16 h-3/4 bg-charcoal">
        <h1 className="text-off-white font-normal text-26 flex items-center">
          <ReactSVG
            src={brandLogoSRC}
            className="flex items-center pr-10"
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 30px; margin-bottom: -0.35rem");
            }}
          />
          {siteTitle}
        </h1>
        <nav>
          <ul className="pt-10">
            {navLinks}
          </ul>
        </nav>
      </section>
      <section className="stretch-bg py-16 h-1/4 bg-white flex flex-col-reverse md:flex-row md:items-center">
        <small className="text-8 w-full pt-16 text-center md:pt-0 md:text-left md:w-1/3">
          &copy; Bryce Sayers-Kwan.  All rights reserved.
        </small>
        <ul className="w-full flex flex-row justify-around md:w-1/3">
          {socialLinks}
        </ul>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  navigationData: PropTypes.arrayOf(PropTypes.object).isRequired,
  socialData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Footer;
