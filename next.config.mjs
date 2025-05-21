const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES'

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath: isGithubPages ? '/grahaayoe' : '',
  assetPrefix: isGithubPages ? '/grahaayoe/' : '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
