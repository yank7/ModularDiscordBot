module.exports = {
    verbose: true,
    bail: false,
    cacheDirectory: "./tmp/",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        "**/test/**/*.test.(ts|js)"
    ],
    testEnvironment: "node"
}