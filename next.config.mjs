/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN, // Secure server-side variable
  },
};

export default nextConfig;
