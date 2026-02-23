module.exports = {
    images: {
      domains: ['i.pinimg.com','images.unsplash.com'],
    },
    // Can be safely removed in newer versions of Next.js
  future: {

    // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
    webpack5: true,   
  },

  webpack(config) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,  

      fs: false, // the solution
    };
    
    return config;
  },

  publicRuntimeConfig: {
    NEXT_PUBLIC_FAV_TEAM: process.env.NEXT_PUBLIC_FAV_TEAM,
    HELLO: process.env.HELLO,
  }
};

