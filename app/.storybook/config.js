import { configure, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

// automatically import all files ending in *.stories.js
configure(require.context("../src/components/stories", true, /\.stories\.js$/), module);
