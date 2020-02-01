import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.scss";

import Header from "./header";
import Footer from "./footer";

const navigationData = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const socialData = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/brycesayerskwan",
    icon: "linked-in",
  },
  {
    title: "Github",
    href: "https://github.com/DorainKwan",
    icon: "github",
  },
  {
    title: "Email",
    href: "mailto:bryce.sayers-kwan@live.ca",
    icon: "envelope",
  },
  {
    title: "Online CV",
    href: "https://resume.creddle.io/resume/jamk759y7a4",
    icon: "document",
  },
];

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

  const { title: siteTitle } = data.site.siteMetadata;

  return (
    <>
      <Header siteTitle={siteTitle} navigationData={navigationData} />
      <main>
        <section className="h-screen stretch-bg bg-pink flex items-center">
          <h1 className="text-32">Test Hero</h1>
        </section>
        <section className="h-300 stretch-bg bg-light-grey">
          <h2>Content goes here</h2>
          {children}
        </section>
      </main>
      <Footer siteTitle={siteTitle} navigationData={navigationData} socialData={socialData} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
