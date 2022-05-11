module.exports = (api) => {
  const isProd = api.cache(() => process.env.MODE === 'production');
  return {
    presets: [
      [
        'next/babel',
        {
          'preset-env': {
            targets: {
              browsers: ['cover 99.5%', 'not ie <= 10'],
            },
          },
          'transform-runtime': {
            corejs: 3,
          },
        },
      ],
    ],
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: isProd ? false : true,
          fileName: isProd ? false : true,
          pure: true,
          minify: isProd ? true : false,
          transpileTemplateLiterals: false,
        },
      ],
    ],
  };
};
