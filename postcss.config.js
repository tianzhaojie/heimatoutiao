module.exports = {
  plugins: {
    "postcss-pxtorem": {//把px转换为rem
        //vant 默认是37.5制作的
      rootValue({file}) {
        return file.indexOf('vant') !== -1 ?37.5 : 75
       
    },//设计稿宽度十分之一
      propList: ["*"],//配置转换的css属性 ['height]只转换高 *表示所有
    },
  },
};
