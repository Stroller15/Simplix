/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['wmtadllewbodozucjlpt.supabase.co'],
    },
  };
  
  module.exports = nextConfig;