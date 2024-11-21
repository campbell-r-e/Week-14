module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Ensure this matches the actual path
    testEnvironment: 'jsdom', // Required for DOM-based testing
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    
    
  };
  