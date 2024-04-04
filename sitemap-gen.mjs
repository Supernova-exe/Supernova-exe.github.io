// Import the required modules
import fs from "fs";
import routes from './src/routes.json' assert { type: 'json' };

// Function to generate the sitemap
function generateSitemap() {
    // Initialize the sitemap with the XML declaration and opening tag for the urlset
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

    // The base URL for your website
    const url = 'https://supernova-exe.github.io';

    // Loop over each route
    for (const route of routes) {
        // Add each URL to the sitemap
        sitemap += `<url>\n<loc>${url}/#${route.path === '/' ? '' : route.path}</loc>\n<changefreq>${route.changefreq}</changefreq>\n<priority>${route.priority}</priority>\n</url>\n`;
    }

    // Close the urlset tag
    sitemap += '</urlset>';

    // Write the sitemap to a file
    fs.writeFileSync('./public/sitemap.xml', sitemap);
}

// Call the function to generate the sitemap
generateSitemap();