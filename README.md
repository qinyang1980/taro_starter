# 基于Taro的小程序起步框架 说明文档

- [功能描述](#功能描述)
- [主要技术栈](#主要技术栈)
- [目录结构](#目录结构)

## 功能描述

1. 合理配置了目录，划分了层次
2. 使用gulp任务，自动生成了一些代码，方便使用
3. 使用zoro，简化了redux的繁琐操作
4. 提供了wx.request接口的封装类，简化后台接口操作
5. 将颜色定义和字体等定义封装在themes目录中，方便后期更换皮肤
6. 添加了2个小例子，计数器和就诊卡，演示了如何使用zoro做同步和异步数据操作

## 主要技术栈

1. Taro (小程序框架)
2. Zoro (基于Redux和Dva的状态管理框架，但是可以使用async/await)

## 目录结构

```js
.
├── conifg                      // Taro配置
├── dist                        // 生成的目标代码
├── doc                         // 文档
├── gulp                        // gulp任务代码
├── src                         // 源代码
│   ├── common                  // 存放各模块都需要的公共代码和工具类
│       ├── assets              // 存放静态资源，比如图片文件
│       ├── config              // 配置文件
│       ├── utils               // 公共工具类
│   ├── components              // 小程序组件
│       ├── counter             // 组件目录
│           ├── presenter.js    // 组件的主体定义文件
│           ├── style.scss      // 组件的风格定义文件
│   ├── constants               // 存放系统的常量
│       ├── themes              // 系统皮肤存放目录
│           ├── colors.scss     // 系统中各种颜色的定义
│           ├── fonts.scss      // 系统中各种字体的定义
│       ├── images.js           // 由gulp任务自动产生的文件，里面包含所有图片的引用
│       ├── models.js           // 由gulp任务自动产生的文件，里面包含所有模型的namespace常量定义
│       ├── pages.js            // 由gulp任务自动产生的文件，里面包含页面的常量定义
│   ├── models                  // 模型层
│   ├── services                // 数据获取层
│   ├── pages                   // 小程序页面
│   ├── app.js                  // 主程序入口
│   ├── index.html              // 主页面

```


# 如果觉得对你有帮助，请给个赞呗:)
<p align="left"><img src="https://github.com/qinyang1980/income_tax/blob/master/doc/reward.jpg" alt="微信赞赏码" width="380" height="380">
