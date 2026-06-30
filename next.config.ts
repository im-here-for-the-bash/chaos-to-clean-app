import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: [
      "camera=(self)",
      "microphone=()",
      "geolocation=()",
      "payment=(self)",
      "fullscreen=(self)",
    ].join(", "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  generateEtags: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  experimental: {
    typedRoutes: true,
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
    ],
  },

  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days

    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "chaostocalmcleaning.co.uk",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [];
  },

  async rewrites() {
    return [];
  },
};

export default nextConfig;
