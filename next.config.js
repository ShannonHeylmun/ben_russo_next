const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  unstable_staticImage: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
	images: {
        unoptimized: true
    }

};

module.exports = withNextra(nextConfig);
