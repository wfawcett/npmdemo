module.exports = {
    rootDir: './',
    verbose: true,
    testMatch: ['./*.int.js'],

    reporters: ['default', 'jest-junit'],
    testPathIgnorePatterns: [
        'jest.config.js',
    ],
};
