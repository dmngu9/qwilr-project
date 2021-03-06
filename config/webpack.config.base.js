const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
    context: paths.clientSrc,
    entry: paths.clientIndexJs,
    output: {
        pathinfo: true,
        path: paths.clientBuild,
        filename: 'bundle.[hash].js',
        publicPath: '/',
    },
    resolve: {
        modules: [paths.nodeModules, paths.clientSrc],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: paths.clientTsConfig })
        ],
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: require.resolve('source-map-loader'),
                enforce: 'pre',
                include: paths.clientSrc,
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                        limit: 10000,
                            name: 'dist/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.react.svg$/,
                        loader: require.resolve('svg-react-loader')
                    },
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
                    },
                    {
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'dist/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ProgressBarPlugin({
            format: 'Building front end: [:bar] :percent (:elapsed seconds)'
        }),

        new HtmlWebpackPlugin({
            template: paths.clientHtml,
        }),

        new ForkTsCheckerWebpackPlugin({
            async: false,
            checkSyntacticErrors: true,
            watch: paths.clientSrc,
            tsconfig: paths.clientTsConfig,
            tslint: paths.clientTsLint,
        }),
    ],

    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },

    performance: {
        hints: false,
    },
};