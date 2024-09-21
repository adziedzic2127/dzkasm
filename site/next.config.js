/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'LaxGodDeez Registry',
    description: 'My collection of Workspaces.',
    icon: 'https://kodestar.github.io/kasm-registry/1.0/icon.png',
    listUrl: 'https://adziedzic2127.github.io/dzkasm/',
    contactUrl: 'https://www.capstone-sh.net',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/dzkasm/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
