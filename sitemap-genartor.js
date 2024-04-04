const { Sitemap } = require('react-router-sitemap');
const { routes } = require('./src/routes'); // import your routes

// Extract paths from routes
const paths = routes.map(route => route.path);

// Generate sitemap
const sitemap = new Sitemap(routes).build('https://supernova-exe.github.io/', paths);
sitemap.save('./public/sitemap.xml');
