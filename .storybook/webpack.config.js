const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const paths = require('../config/paths');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: paths.clientTsConfig })
        ],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: paths.clientSrc,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            transpileOnly: true,
                            configFile: paths.clientTsConfig
                        },
                    },
                ],
            }
        ]
    }
};