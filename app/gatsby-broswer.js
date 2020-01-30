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

exports.onClientEntry = () => {
  // Don't need to do anything here, but if you don't export something, the import won't work.
};
