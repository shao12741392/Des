const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
    mode:'development',
    entry:{
        car:'./js/car.js',
        index:'./js/index.js'},
    output:{
        path:__dirname+'/dist',
        filename:'[name].js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new CopyPlugin({
          patterns: [
            { from: './img', to: 'img' },          
          ],
        }),
        new HtmlWebpackPlugin({
          filename:'index.html',
          template:'./index.html',
          minify:true
        }),
        new HtmlWebpackPlugin({
          filename:'car.html',
          template:'./car.html',
          minify:true
        }),
        new MiniCssExtractPlugin({
          filename:'./style.css',
          template:'./style.css'
        })
      ],
    devServer:{
      host:'localhost',
      port:8099,
      open:true,      
    
    }
      
}