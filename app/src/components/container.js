import React from "react";
import PropTypes from "prop-types";

const Container = ({ children, className, type }) => {
  let container = "";

  switch (type) {
  case "article":
    container = <article className={className}>{children}</article>;
    break;
  case "section":
    container = <section className={className}>{children}</section>;
    break;
  case "div":
    container = <div className={className}>{children}</div>;
    break;
  case "header":
    container = <header className={className}>{children}</header>;
    break;
  case "footer":
    container = <footer className={className}>{children}</footer>;
    break;
  default:
    container = <div className={className}>{children}</div>;
    break;
  }

  return container;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

Container.defaultTypes = {
  className: "",
  type: "div",
};

export default Container;
