export default {
  //本地开发测试
  mock: {
    exclude: [
      'mock/**.js',
      'mock/**/*.js',
    ],
  },
  define: {
    'process.env.UMI_ENV': process.env.UMI_ENV,
  },
};
