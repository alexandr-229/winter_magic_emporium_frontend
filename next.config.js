/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack']
		});

		return config;
	},
	images: {
		domains: ['localhost', 'winter-magic-emporium-backend.onrender.com']
	},
}

module.exports = nextConfig
