module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
    devServer: {
    port: 3000,
    public: "localhost:3000",
    publicPath: "http://localhost:3000/", 
    disableHostCheck: true
  },
}
