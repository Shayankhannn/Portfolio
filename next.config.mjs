/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
      images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*",
          }
        ]
      },
};

export default nextConfig;
