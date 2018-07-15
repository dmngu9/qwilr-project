const paths = require('./config/paths');

module.exports = {
    roots: [paths.clientSrc, paths.serverSrc],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    setupTestFrameworkScriptFile: paths.enzymeSetup,
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    notify: true,
    verbose: true
};