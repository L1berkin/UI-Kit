/** @type {import('next').NextConfig} */
const path = require("path");


const corePath = path.resolve(__dirname, 'node_modules/@prosv/core/src/lib');
const srcPath = path.resolve(__dirname, 'src');

const nextConfig = {
  webpack: (config, { webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@prosv/app': srcPath + '/prosv',
      '@prosv/core': corePath,
      '@core.module.scss': corePath + '/theme/scss/theme.module.scss',
    };

    // чтобы работал watch на node_modules/@prosv/core
    config.snapshot.managedPaths = [/^(.+?[\\/]node_modules[\\/](?!(@prosv[\\/]core)))/];
    config.watchOptions = {
      aggregateTimeout: 5,
      // @see https://github.com/vercel/next.js/pull/52238/commits/e5ef508624b91bd87503c4ee5bdca93e0db2cf07
      ignored: ['**/.git/**', '**/.next/**'],
    };

    const patchExclude = (originalExclude) => (file) => {
      if (/@prosv[\\/]core[\\/]src[\\/]lib/.test(file)) return false;
      return typeof originalExclude === 'function' ? originalExclude(file) : originalExclude;
    };

    const prosvRule = (rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.map(prosvRule);
      } else if (!rule.issuerLayer && !!rule.exclude && rule.test?.test?.('.tsx')) {
        rule.exclude = Array.isArray(rule.exclude)
          ? rule.exclude.map(patchExclude)
          : patchExclude(rule.exclude);
      }
      return rule;
    };

    // убираем из exclude "@prosv/core" чтобы можно было импортировать исходники (ts/tsx и тд)
    config.module.rules.forEach(prosvRule);

    // Grab the existing rule that handles SVG imports
    const svgRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...svgRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
      },
    );
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    svgRule.exclude = /\.svg$/i;

    config.plugins.push(
      new webpack.ProvidePlugin({
        cn: 'classnames',
      }),
    );

    return config;
  },

}

module.exports = nextConfig
