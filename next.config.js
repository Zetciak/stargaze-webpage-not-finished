/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	images: {
		domains: [
			'imgur.com',
			'i.imgur.com',
			'res.cloudinary.com',
			'cloudinary.com',
		],
	},
};

module.exports = nextConfig;
