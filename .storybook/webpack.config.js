const paths = require('../config/paths');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
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