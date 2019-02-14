module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'css',
    'node'
  ],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    ".css": "jest-css-modules",
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFiles: [
    '<rootDir>/.jest/register-context.js',
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js"
  ]
};
