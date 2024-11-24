import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      // hostname: 's3.us-east-2.amazonaws.com',
      hostname: 'andresaugusto-aa-media.s3.amazonaws.com',
      port: '',
      pathname: '/images/**'
    }]
  },
};

export default nextConfig;
