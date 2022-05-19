// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
  trailingSlash: true,
  images: {
    loader: "custom"
  }
}

module.exports = nextConfig