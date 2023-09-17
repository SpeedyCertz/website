/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    backend_dev_url: 'http://localhost:3001',
    backend_prod_url: '',
  },
}

module.exports = nextConfig
