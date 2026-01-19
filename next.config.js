/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'a.ppy.sh' },
      { protocol: 'https', hostname: 'assets.ppy.sh' },
    ],
  },
}
module.exports = nextConfig
