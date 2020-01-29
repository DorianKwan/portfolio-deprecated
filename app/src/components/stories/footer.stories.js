import React from "react";

import Footer from "../footer";

export default { title: "Footer" };

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

export const defaultOptions = () => {
  return (
    <>
      <div className="h-500 bg-light-grey">
        Content here
      </div>
      <Footer siteTitle="BSK" navigationData={navigationData} socialData={socialData} />
    </>
  );
};
