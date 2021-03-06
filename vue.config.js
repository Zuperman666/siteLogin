const SitemapPlugin = require('sitemap-webpack-plugin').default;
const CompressionPlugin = require("compression-webpack-plugin");
const paths = [
    {
        path: '/',
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.8,
        changefreq: 'hourly'
    },
];

module.exports = {
    configureWebpack: {
        plugins: [
            new CompressionPlugin(),
            new SitemapPlugin({
                base:'https://logingaming.com',
                paths,
                options:{
                filename: 'sitemap.xml',
                lastmod: true,
                changefreq: 'hourly',
                priority: 0.8
            }})
        ]
    }
}