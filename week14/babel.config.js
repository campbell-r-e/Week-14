module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }], // Handles JSX
      '@babel/preset-typescript', // If using TypeScript
    ],
  };
  