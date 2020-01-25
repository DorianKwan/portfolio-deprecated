/**
 * https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md#react-app-polyfill
 *
 * This is add support of the following to IE 11
 *
 * - Promise (for async / await support)
 * - window.fetch (a Promise-based way to make web requests in the browser)
 * - Object.assign (a helper required for Object Spread, i.e. { ...a, ...b })
 * - Symbol (a built-in object used by for...of syntax and friends)
 * - Array.from (a built-in static method used by array spread, i.e. [...arr])
 */
import "react-app-polyfill/ie11";

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.scss";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
