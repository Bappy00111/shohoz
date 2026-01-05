/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.shohoz.com',

      },
      {
        protocol: 'https',
        hostname: 's3-ap-south-1.amazonaws.com',

      },
      {
        protocol: 'https',
        hostname: 'shohoz-cms-content.s3.ap-south-1.amazonaws.com',

      },
      {
        protocol: 'https',
        hostname: 'bangladesh-railway.s3-ap-southeast-1.amazonaws.com',

      },
      {
        protocol: 'https',
        hostname: 'train.shohoz.com',

      },
      {
        protocol: 'https',
        hostname: 'shohoz-event-bucket.s3.ap-south-1.amazonaws.com',

      },
    ],
  },
};

export default nextConfig;
