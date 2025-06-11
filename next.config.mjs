// import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { hostname } from 'os';

const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      }
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
