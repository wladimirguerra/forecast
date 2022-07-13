module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$":
      "<rootDir>/__mocks__/fileMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  globals: {
    "ts-jest": {
      // https://huafu.github.io/ts-jest/user/config/#options for details on cofiguration

      // Due to the nature of Next.Js of autoconfigure tsconfig.json file,
      // it is a must to split the ts-jest typescript configuration
      tsconfig: "tsconfig.test.json",
    },
  },
};
