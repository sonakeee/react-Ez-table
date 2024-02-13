const path = require('path');

module.exports = {
    entry: './src/lib/index.tsx', // 변경된 부분
    output: {
        path: path.resolve(__dirname, 'dist'), // 번들링된 파일의 출력 경로
        filename: 'my-library.js', // 번들 파일의 이름
        library: 'myLibrary', // 패키지 라이브러리의 전역 변수명
        libraryTarget: 'umd', // 번들 파일 형식 설정
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};
