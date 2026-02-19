/** @type {import('next').NextConfig} */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
};

export default nextConfig;
