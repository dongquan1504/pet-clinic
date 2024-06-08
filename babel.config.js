module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['src'], // Specify the root directories of your project
          alias: {
            src: 'src',
          },
        },
      ],
    ],
  };
};
