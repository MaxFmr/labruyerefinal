/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      'res.cloudinary.com',
      'www.maximekerlidou.fr',
      'www.istockphoto.com',
      'media.istockphoto.com',
    ],
  },
};
