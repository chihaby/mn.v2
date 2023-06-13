/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
}

module.exports = nextConfig

module.exports = {
  env: {
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
};
