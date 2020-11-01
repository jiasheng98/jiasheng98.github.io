// module.exports = {
//   exportPathMap: async function() {
//     const paths = {
//       "/": { page: "/" },
//       "/about": { page: "/about.html" },
//       "/portfolio": { page: "/portfolio.html" },
//       "/pricing": { page: "/pricing.html" },
//       "/landing/app-cn": { page: "/landing/app-cn.html" },
//       "/landing/app-en": { page: "/landing/app-en.html" }
//     };

//     return paths;
//   }
// };

const withImages = require("next-images");
const withFonts = require("next-fonts");

// const withCSS = require("@zeit/next-css");
// const withPurgeCss = require("next-purgecss");

// // module.exports = withImages(
// //   withFonts(
// //     withCSS(
// //       withPurgeCss({
// //         cssLoaderOptions: {
// //           url: false
// //         }
// //       })
// //     )
// //   )
// // );

// module.exports = withImages(withFonts());

module.exports = withImages(withFonts(
  {
    poweredByHeader: false,
  }
  ));

// module.exports = {
//   poweredByHeader: false,
//   //  compress: false,  //offload compression to NGINX from Node.js on production
// }