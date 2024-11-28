import type { NextConfig } from "next";
// /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'], // Add your allowed domains here
  },
  // Other config options
};

module.exports = nextConfig;

