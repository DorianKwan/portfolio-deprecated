import React from "react";

import Header from "../header";

import bgSrc from "../../images/test-images/test-bg.jpg";

export default { title: "Header" };

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

export const defaultOptions = () => {
  return (
    <>
      <Header siteTitle="BSK" navigationData={navigationData} />
      <div className="h-900 w-full -z-1">
        <img src={bgSrc} alt="text-bg" className="h-full w-full" />
      </div>
    </>
  );
};
