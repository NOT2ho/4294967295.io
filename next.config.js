const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    experimental: { 
  },
    webpack: (config, { isServer }) => {
        if (!isServer) {

            config.resolve.fallback = {
                fs: false,
            };
        }

        return config;
    },

};

module.exports = nextConfig;