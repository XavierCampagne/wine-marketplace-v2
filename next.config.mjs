/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for better error reporting
  env: {
    // Expose Supabase environment variables to the app
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  images: {
    // Allow images from Supabase Storage (for future image uploads)
    domains: ['*.supabase.co'], // Replace with your specific Supabase project domain if needed
  },
};

export default nextConfig;