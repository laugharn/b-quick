const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withPurgeCSS = require("next-purgecss");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const config = {
  dev: process.env.NODE_ENV !== "production",
  dir: process.env.NODE_ENV !== "production" ? "./workspaces/www" : ".",
  env: {
    PORT: process.env.PORT
  },
  purgeCss: {
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ["html", "js", "css"]
      }
    ],
    whitelist: ["body", "html"]
  },
  target: "serverless"
}

module.exports = withFonts(
  withCSS( process.env.NODE_ENV == 'production' ? withPurgeCSS(config) : config
  )
);
