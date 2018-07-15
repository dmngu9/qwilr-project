const paths = require('./config/paths');

module.exports = {
    roots: [paths.clientSrc, paths.serverSrc],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    reporters: [
        'default', 
        ['jest-junit', { suiteName: 'unit tests', output: './test-results/results.xml' }]
    ],
    setupTestFrameworkScriptFile: paths.enzymeSetup,
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    coverageDirectory: paths.testCoverage,
    notify: true,
    verbose: true
};