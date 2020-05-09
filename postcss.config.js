// postCSS的配置文件

// postCSS 配置文件需要导出一个对象
module.exports = {
  // 配置要使用的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同浏览器
    /// vueCLI 已经在内部默认配置了  autoprefixer
    autoprefixer: {
      // browsers 用来配置要兼容到的系统（浏览器环境）
      // 这个配置没有问题，但是写到这里会有控制台编译警告
      // 因为vueCLI是通过项目中的.browserslistrc文件来
      // 配置要兼容的环境信息的
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    // 把px转为rem
    'postcss-pxtorem': {
      // 转换的根元素基准值
      // 正常情况下是按照你的设计搞来
      // 750宽的设计稿 750/10=75
      // 350宽的设计稿 375/10=37.5
      // vant组件库是基于375的宽写的
      // 设计稿都是基于物理像素750宽设计写的
      // 所以如果设置成75，那么我们可以在设计稿中测量多少就写多少
      // 但是vant的样式就会变得很小，小了一半
      // 所以我们还必须设置成37.5
      rootValue: 37.5,
      // 需要转换的cSS属性，*就是所有属性都要转换
      propList: ['*']
    }
  }
}
