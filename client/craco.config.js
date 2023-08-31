const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@public": "./public",
          "@api": "./src/api",
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@constants": "./src/constants",
          "@utils": "./src/utils",
        },
      },
    },
  ],
};
