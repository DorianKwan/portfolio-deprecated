import React from "react";

import Header from "../header";

import bgSrc from "../../images/test-images/test-bg.jpg";

export default { title: "Header" };

const navigationData = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/work",
    title: "Work",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

export const defaultOptions = () => {
  return (
    <div className="">
      <Header siteTitle="BSK" navigationData={navigationData} />
      <div className="h-800 w-full -z-1">
        <img src={bgSrc} alt="text-bg" className="h-full w-full" />
      </div>
    </div>
  );
};
