/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
  unoptimized: true,
  domains: ['images.unsplash.com'],
  formats: ['image/avif', 'image/webp'],
},
  webpack: (config, { isServer }) => {
    // Disable webpack caching to prevent ENOENT errors
    config.cache = false;
    
    // Enable tree shaking
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: true,
    };
    
    return config;
  },
};
