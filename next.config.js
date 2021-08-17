const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = {
  basePath: '/jiasheng98.github.io',
  assetPrefix: '/jiasheng98.github.io'
}

module.exports = withImages(
  withFonts({
    poweredByHeader: false,
  }),
);