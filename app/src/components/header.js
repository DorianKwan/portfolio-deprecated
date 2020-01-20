import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Link to="/">
        {siteTitle}
      </Link>
    </header>
  );
};

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};
