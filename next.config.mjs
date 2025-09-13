/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' https://platform.linkedin.com 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://*.licdn.com https://*.linkedin.com",
              "frame-src https://badges.linkedin.com https://www.linkedin.com https://*.licdn.com",
              "connect-src 'self' https://*.linkedin.com https://*.licdn.com",
            ].join("; "),
          },
        ],
      },
    ]
  },
}

export default nextConfig
