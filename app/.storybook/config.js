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
