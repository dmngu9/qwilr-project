const path = require('path');
const fs = require('fs');

const appDir = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDir, relativePath);

module.exports = {
    clientBuild: resolveApp('dist'),
    clientHtml: resolveApp('client/index.html'),
    clientIndexJs: resolveApp('client/index.tsx'),
    clientSrc: resolveApp('client'),
    clientTsConfig: resolveApp('tsconfig.client.json'),
    clientTsLint: resolveApp('tslint.json'),
    nodeModules: resolveApp('node_modules'),
    enzymeSetup: resolveApp('config/enzyme-setup.js'),
    serverSrc: resolveApp('server'),
    testCoverage: resolveApp('coverage')
};