module.exports = (api) => {
    api.cache(true);
  
    return {
      sourceType: 'unambiguous',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              chrome: 100,
            },
          },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [],
    };
  };
  