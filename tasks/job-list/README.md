
#  Job List 任务说明

实现下图中的 UI

![](https://github.com/FlipboardChina/webapp-exercise/blob/master/tasks/job-list/job-list.png)

## 需求

### 视觉需求

1. 如果你觉得设计图中的视觉部分（包括颜色、排版布局、间距、图标等等）不够好，可以把相应部分换成自己的设计
2. 否则，请在实现中做到尽可能一致的视觉效果（但不需要跟设计图中的像素尺寸完全一致）

### 交互需求

1. 点击职位条目左侧的 checkbox，toggle （选中或清空）当前点击的 checkbox
2. 点击部门条目左侧的 checkbox，toggle （选中或清空）当前点击的 checkbox 和这个部门中所有职位条目左侧的 checkbox
3. 点击部门条目右侧的箭头，toggle（隐藏或显示）这个部门下面的职位列表。列表隐藏时，箭头朝上，列表显示时，箭头朝下。列表在隐藏和显示状态之间切换的过渡效果（比如动画），请自行设计和实现
4. 点击顶部右侧的『清空』按钮，所有 checkbox 都要被重置成未选中状态

### 工程需求

1. 在 Github 上 fork [FlipboardChina/webapp-exercise](https://github.com/FlipboardChina/webapp-exercise) 项目，clone 到本地，按照 README 文档里的步骤进行初始安装、构建和调试，在 [app/job-list](https://github.com/FlipboardChina/webapp-exercise/tree/master/app/job-list) 目录里进行开发（注意 [app/job-list/index.js](https://github.com/FlipboardChina/webapp-exercise/tree/master/app/job-list/index.js) 不需要修改）
2. 要求使用 React 和 ES6
3. 要求使用 plain CSS、[SCSS](http://sass-lang.com/)、[CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) 中任意一种。项目中已启用 [Autoprefixer](https://github.com/postcss/autoprefixer)。对于 plain CSS 和 SCSS，项目中启用了 [CSS Modules](https://github.com/css-modules/css-modules)
4. 不需要写测试
4. 所有代码必须能通过静态检查（`npm run lint`）
3. 最终的实现需要能用 `npm run dev` 或 `npm run build` 运行，在浏览器中通过 http://localhost:8080/job-list/ 查看
3. 把最终实现用 git 提交，push 到自己 fork 的项目里，在回复邮件中提供项目链接

## 学习资源

* React: https://facebook.github.io/react/
* Airbnb JavaScript Style Guide: https://github.com/airbnb/javascript
* CSS Modules: https://github.com/css-modules/css-modules
* CSS in JS: https://speakerdeck.com/vjeux/react-css-in-js
* Styling React: https://survivejs.com/react/advanced-techniques/styling-react/
* MDN: https://developer.mozilla.org/en-US/docs/Web
* CSS-Tricks: https://css-tricks.com/snippets/css/
* CSS Reference: http://cssreference.io/
* Easing functions: http://easings.net/
* Learn ES2015: https://babeljs.io/learn-es2015/
* Webcube: https://github.com/dexteryy/webcube
