const paths = require('./paths');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const resolve = require('resolve');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
    mode: 'production', //프로덕션 모드로 설정하여 최적화 옵션들을 활성화
    entry: paths.ssrIndexJs, //엔트리 경로
    target: 'node', //node환경에서 실행될 것이라는 점을 명시
    output: {
        path: paths.ssrBuild, //빌드경로
        filename: 'server.js', //파일 이름
        chunkFilename: 'js/[name].chunk.js', //청크 파일 일므
        publicPath: paths.publicUrlOrPath, //정적 파일이 제공될 경로
    },
    module: {
        rules: [
            {
                oneOf: [
                    //자바스크립트를 위한 처리
                    //기존 webpack.config.js를 참고하여 작성
                    {
                        test: /\.(ts|mjs|jsx|ts|tsx)$/,
                        include: paths.appSrc,
                        loader: require > resolve('babel-loader'),
                        options: {
                            customize: require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                            ),
                            presets: [
                                [
                                    require.resolve('babel-preset-react-app'),
                                    {
                                        runtime: 'automatic',
                                    },
                                ],
                            ],
                            plugins: [
                                [
                                    require.resolve('babel-plugin-named-asset-import'),
                                    {
                                        loaderMap: {
                                            svg: {
                                                ReactComponent: '@svgr/webpack?-svgo,+titleProp, +ref![path]',
                                            },
                                        },
                                    },
                                ],
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: false,
                        },
                    },
                    //CSS를 위한 처리
                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        //exportOnlyLocals: true옵션을 설정해야 실제 css파일을 생성하지 않는다
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                exportOnlyLocals: true,
                            },
                        },
                    },
                    //CSS모듈을 위한 처리
                    {
                        test: cssModuleRegex,
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                exportOnlyLocals: true,
                                getLocalIdent: getCSSModuleLocalIdent,
                            },
                        },
                    },
                    //Sass를 위한 처리
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 3,
                                    modules: {
                                        exportOnlyLocals: true,
                                    },
                                },
                            },
                            require.resolve('sass-loader'),
                        ],
                    },
                    //Sass + CSS Module을 위한 처리
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 3,
                                    modeuls: {
                                        exportOnlyLocals: true,
                                        getLocalIdent: getCSSModuleLocalIdent,
                                    },
                                },
                            },
                            require.resolve('sass-loader'),
                        ],
                    },
                    //url-loader를 위한 설정
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('resolve-url-loader'),
                        options: {
                            emitFile: false, //파일을 따로 저장하지 않는 옵션
                            limit: 10000, //원래는 9.76kb가 넘어가면 파일로 저장하는데 emitFile 값이 false일 땐 경로만 준비하고 파일을 저장하지 않는다
                            name: 'static/media/[name].[hash:8].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    //react, react-dom/server 같은 라이브러리를 import 구문으로 불러오면 node_modules에서 찾아 사용한다
    //라이브러리를 불러오면 빌드할 때 결과물 파일 안에 해당 라이브러리 관련 코드가 함께 번들링된다
    resolve: {
        modules: ['node_modules']
    }
}