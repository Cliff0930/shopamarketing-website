/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  async headers() {
    return [
      {
        // Long-lived cache for versioned static assets (CSS, JS, images, fonts)
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Logos and other public images
        source: '/:file(.*\\.(?:webp|png|jpg|jpeg|gif|svg|ico|woff|woff2))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
