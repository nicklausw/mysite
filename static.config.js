// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org

import path from 'path';

export default {
  siteRoot:"https://nicklausw.com",
  getRoutes: async () => {

    return [
    ]
  },
  plugins: [
    ["react-static-plugin-sass"],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ]
}
