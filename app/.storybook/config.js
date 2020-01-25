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

import { configure, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

// Add cssReset by default
import "../src/styles/cssReset.scss";

// Add tailwind css utility classes by default
import "../src/styles/tailwind.css";

addDecorator(withA11y);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context("../src/components/stories", true, /\.stories\.js$/), module);

global.__PATH_PREFIX__ = ""
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
