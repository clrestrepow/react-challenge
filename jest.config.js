module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: ["/node_modules/(?!reactstrap)"],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom"
};