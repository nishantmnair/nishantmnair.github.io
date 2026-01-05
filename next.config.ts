import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: './',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
