if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '../.env' })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
