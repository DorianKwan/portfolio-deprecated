const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [
            require("postcss-import"),
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
          ]
        }
      }
    ],
    include: path.resolve(__dirname, "../"),
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
  });

  return config;
};
