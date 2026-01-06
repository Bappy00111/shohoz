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
        hostname: 'www.shutterstock.com',

      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',

      },
      {
        protocol: 'https',
        hostname: 'ecdn.dhakatribune.net',

      },
      {
        protocol: 'https',
        hostname: 'somogrobangladesh.com',

      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',

      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',

      },
    ],
  },
};

export default nextConfig;
