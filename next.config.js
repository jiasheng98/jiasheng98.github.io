const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withImages(
  withFonts({
    poweredByHeader: false,
  }),
);

module.exports = {
  basePath: '/',
  assetPrefix: '/'
}