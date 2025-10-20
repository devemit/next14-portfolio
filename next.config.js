/** @type {import('next').NextConfig} */

const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'user-images.githubusercontent.com',
         },
         {
            protocol: 'https',
            hostname: 'github.com',
         },
         {
            protocol: 'https',
            hostname: 'i.postimg.cc',
         },
         {
            protocol: 'https',
            hostname: 'i.ibb.co',
         },
      ],
   },
};
module.exports = nextConfig;
