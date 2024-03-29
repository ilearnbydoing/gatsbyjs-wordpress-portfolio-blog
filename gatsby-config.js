// loading env
const path = require(`path`);
const activeEnv = process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

let siteConfig;
let wordpressConfig;

try {
  siteConfig = require(`./siteConfig`);
  wordpressConfig = require(`./.wordpress-config`);
} catch (e) {
  console.log(e);
}

console.log(typeof process.env.WP_HOSTING_WPCOM);
const hostingWPCOM = process.env.WP_HOSTING_WPCOM &&  process.env.WP_HOSTING_WPCOM === "true" ? true: false; 
if (process.env.WP_BASE_URL) {
  wordpressConfig.baseUrl = process.env.WP_BASE_URL; 
  wordpressConfig.protocol = process.env.WP_PROTOCOL ? process.env.WP_PROTOCOL : "https";
  if (hostingWPCOM) {
    wordpressConfig.hostingWPCOM = true;
    wordpressConfig.auth = {};
    wordpressConfig.auth.wpcom_app_clientSecret = process.env.WP_CLI_SEC;
    wordpressConfig.auth.wpcom_app_clientId = process.env.WP_CLI_ID;
    wordpressConfig.auth.wpcom_user = process.env.WP_USER;
    wordpressConfig.auth.wpcom_pass = process.env.WP_PASS;
    wordpressConfig.includedRoutes.push("**/settings");
  }
}

console.log(wordpressConfig);

let gatsbyPlugins = [
  {
    resolve: `@ilearnbydoing/gatsby-wordpress-deva-theme`,
    // resolve: `@draftbox-co/gatsby-wordpress-balsa-theme`,
        // resolve: `./src/@draftbox-co/gatsby-wordpress-balsa-theme/gatsbyjs-config.js1`,
        // resolve: require.resolve(`src/@draftbox-co/gatsby-wordpress-balsa-theme`),
    // resolve: require(`./src/@draftbox-co/gatsby-wordpress-balsa-theme/gatsbyjs-config/configOptions`),
    options: {
      wordpressConfig,
      siteConfig: siteConfig,
    },
  },
];
// 
gatsbyPlugins.push(
  "gatsby-plugin-sharp",
  "gatsby-transformer-yaml",
  "gatsby-plugin-robots-txt",

);
// file system data
gatsbyPlugins.push(
  "gatsby-transformer-yaml",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/@ilearnbydoing/gatsby-wordpress-deva-theme/data/`,
      name: `data`,
    },
  },
);
// push gatsby-transformer-screenshot

gatsbyPlugins.push({
  resolve: `gatsby-transformer-screenshot`,
  options: {
    nodeTypes: [`SitesYaml`],
  },
});
  
gatsbyPlugins.push({
    resolve: `gatsby-plugin-purgecss`,
    options: {
        printRejected: true, // Print removed selectors and processed file names
        //develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        ignore: ["/ignored.css", "prismjs/", "docsearch.js/"],
        purgeOnly: ["components/", "styles/", "templates/", "pages"],
        // content: [path.join(__dirname, "src/**/!(*.d).{ts,js,jsx,tsx}")],
        content: [
            path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}'),
            path.join(process.cwd(), 'node_modules/@ilearnbydoing/gatsby-wordpress-deva-theme/src/**/!(*.d).{ts,js,jsx,tsx}')
            ],
    },
});

gatsbyPlugins.push({
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://wp-gatsbyjs.netlify.app',
      sitemap: 'https://wp-gatsbyjs.netlify.app/sitemap.xml',
      policy: [{ userAgent: '*', disallow: ['/'] }]
    }
})

if (process.env.SEGMENT_KEY) {
  gatsbyPlugins.push({
    resolve: `gatsby-plugin-segment-js`,
    options: {
      prodKey: process.env.SEGMENT_KEY,
      devKey: process.env.SEGMENT_KEY,
      trackPage: true,
      delayLoad: true,
      delayLoadTime: 1000,
    },
  });
}

if (process.env.GA) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GA,
      head: true,
    },
  });
}

if (process.env.FB_PIXEL) {
  gatsbyPlugins.push({
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: process.env.FB_PIXEL,
    },
  });
}

if (process.env.GATSBY_MIXPANEL_TOKEN) {
  gatsbyPlugins.push({
    resolve: `gatsby-plugin-mixpanel`,
    options: {
      apiToken: process.env.GATSBY_MIXPANEL_TOKEN,
      enableOnDevMode: true,
      pageViews: 'all'
    },
  });
}

if (process.env.GATSBY_HOTJAR_ID) {
  gatsbyPlugins.push({
    resolve: `@draftbox-co/gatsby-plugin-hotjar-lazy`,
    options: {
      id: process.env.GATSBY_HOTJAR_ID,
      sv: 6,
      optimize: true,
    }
  });
}

if (process.env.GATSBY_GTAG_MANAGER_ID) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: process.env.GATSBY_GTAG_MANAGER_ID,
      includeInDevelopment: true
    },
  });
}

if (process.env.GATSBY_TAWK_ID) {
  gatsbyPlugins.push({
    resolve: `@draftbox-co/gatsby-plugin-tawk-lazy`,
    options: {
      tawkId: process.env.GATSBY_TAWK_ID,
      optimize: true,
    }
  });
}

if (process.env.GATSBY_CRISP_ID) {
  gatsbyPlugins.push({
    resolve: `@draftbox-co/gatsby-plugin-crisp-chat-lazy`,
    options: {
      websiteId: process.env.GATSBY_CRISP_ID,
      enableDuringDevelop: true,
      optimize: true,
    }
  });
}

if (process.env.GATSBY_OLARK_ID) {
  gatsbyPlugins.push({
    resolve: `@draftbox-co/gatsby-plugin-olark-lazy`,
    options: {
      olarkSiteID: process.env.GATSBY_OLARK_ID,
      optimize: true,
    }
  });
}

module.exports = {
  plugins: gatsbyPlugins,
};
