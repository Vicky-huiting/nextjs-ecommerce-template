/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/api/items",
            destination: "https://storecoresvc.stratus.qa.ebay.com/store/v1/items",
          },
        ];
      },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.devServer = {
            ...config.devServer,
            proxy: {
              "/api": {
                target: "https://storecoresvc.stratus.qa.ebay.com",
                changeOrigin: true,
                pathRewrite: { "^/api": "" },
              },
            },
          };
        }
        return config;
      },
      images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'i.qa.ebayimg.com',
          port: '',
          pathname: '/images/g/**'
        }]
      },
};

module.exports = nextConfig;
