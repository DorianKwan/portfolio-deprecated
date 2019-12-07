import React from "react";
import PropTypes from "prop-types";

const Footer = ({ siteTitle }) => {
  return <footer><p>{siteTitle}</p></footer>;
};

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Footer;
