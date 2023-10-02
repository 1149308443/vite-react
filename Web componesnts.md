# Web component

## 前言

**组件化**已经成为目前主流的前端开发模式，组件的复用性给我们前端开发带来了巨大的便利。目前我们实现组件化主要是依托于各大框架如 Vue， React， Angular等。这些框架基本都是在遵从浏览器的规则下制定出自己的一套开发规则和书写语法使开发者的项目获得组件化的能力。如何实现一套代码，一个组件能够同时支持不同的技术框架呢？随着近年来组件化框架的盛行，官方也推行了一套组件化的解决方案和原生API上的支持 —— Web Component。

## 什么是 Web Component

Web Components 是一组 Web 平台 API，建立在 Web 标准之上，不需要经过*编译*就能够被浏览器直接支持，它允许开发人员创建新的自定义、可重用、被封装的 HTML 标记在网页和 Web 应用程序中使用。使用 Web Component 编写的组件是脱离框架的，换言之，也就是说使用 Web Component 开发的组件库，是适配所有框架的，不会像 Antd 这样需要对 Vue、React等框架出不同的版本。

Web Components 不是一门单一的技术，而是四个技术的组合，这四个技术分别是：
* HTML Imports（被废弃，被 ES Modules 取而代之）
* Custom Elements
* Shadow DOM
* HTML templates

### HTML Imports

HTML imports 提供了一种在一个 HTML中包含和重用另一个 HTML 的方法，使用 HTML imports，我们可以很容易的在一个 HTML 引入其他 HTML，实现复用。
> 备注： 由于 HTML Imports 已经废弃（被 ES Modules 代替），所以不能使用这种方式。如果想正常使用 HTML Imports 体验效果，可以安装低版本浏览器使用。不管是使用 ES Modules 还是 HTML Imports，在调试时都需要开启一个 WEB 服务。如果直接打开 HTML 文件，会以文件协议（file://）的方式打开，控制台会报跨域错误。

### Custom Elements

从字面意思理解，就知道 Custom Elements 是用来创建自定义 HTML 标签。Cumtom elements 这个概念对于写过 Vue、React组件的应该非常熟悉，在框架中通过组件的形式，使用自己定义的标签。对于Web Componet，可以使用 CustomElementRegistry.define方法用来注册一个 custom element

```
  customElements.define(name, constructor, options)
```
* name：表示创建的元素的名称，不能是单个单词，必须要有短横线
* constructor：定义元素行为的类
* options（可选）：可选的其所继承自的元素

这边关于第三个参数是否传入继承的元素，与我们自定义元素的写法形式有关系，自定义元素有两种类型：

1. 独立元素，在html中可用直接使用自定义的标签，需要继承 HTMLElement, 本质上其实是完全自定义的一个组件。
2. 继承基本元素， 它依赖于 HTML 中基本元素标签（p、div、span...），通过继承对应的标签，来拓展其功能，具体使用的时候，通过 is 属性来区分原生标签。需要继承 HTMLParagraphElement。

### Shadow DOM

Shadow DOM 允许将隐藏的 DOM 树附加到常规的 DOM 树中——它以 shadow root 节点为起始根节点，在这个根节点的下方，可以是任意元素，和普通的 DOM 元素一样。

但是请注意，虽然 Shadow DOM 允许在文档（document）渲染时插入一棵 DOM 元素子树，但是这棵子树不在主 DOM 树中。

Shadow DOM 内部的元素不会影响到它外部的元素。Web components 的封装能力 Shadow DOM 是最关键的一环，Shadow DOM 可以将标记结构、样式和行为隐藏起来，并与页面上的其他代码相隔离，保证不同的部分不会混在一起，可使代码更加干净、整洁。

### HTML templates 

template 模板想必用过 Vue 的同学，对它一定不陌生，我们在使用 Vue 项目的单页面组件时会经常使用到 template。

template 也是 Web Components API 提供的一个标签，它的特性就是包裹在 template 中的 HTML 片段不会在页面加载的时候解析渲染，但是可以被 js 访问到，进行一些插入显示等操作。所以它作为自定义组件的核心内容，用来承载 HTML 模板，是不可或缺的一部分。

template 元素有一个只读的属性 content，用于返回这个 template 里边的内容，返回的结果是一个 DocumentFragment。使用 DocumentFragment 的 clone 方法以 template 里的代码为基础创建一个元素节点，然后可以操作这个元素节点，最后在需要的时候插入到 document 中特定位置便可以了。 *cloneNode**方法传入的参数true表示深复制，整颗数都复制，这么做是为了避免多个自定义元素使用同一个模板导致数据覆盖的问题。

### slots插槽

尽管我们使用 template已经把想要封装的元素封装起来了，但是它还是不够灵活，如果想要元素丰富起来，我们可以使用 slot 让它能在单个实例中通过声明式的语法展示不同的文本或元素。

slot使用 name 为 slot 定义一个唯一标识，并且允许您在模板中定义占位符，当在标记中使用该元素时，该占位符可以填充所需的任何 HTML 标记片段。

slot 中的默认内容，是在浏览器不支持 slot 属性或者是元素未定义相关插槽内容时进行的展示。

## Web Component组件生命周期函数

当我们在使用如 Vue、React、Angular 等等这些框架时，它们具有一些生命周期钩子函数，你可以利用这些钩子函数做出不同的动作，Web Components 也有属于自己的生命周期钩子函数，当我们定义一个元素时，它会在元素的不同阶段触发它们。

* connectedCallback：当 custom element首次被插入文档 DOM 时，被调用
* disconnectedCallback：当元素从文档DOM中失去连接时触发。
* adoptedCallback：当 custom element 被移动到新的文档时，被调用。
* attributeChangedCallback: 当 custom element 增加、删除、修改自身属性时，被调用。

## Web component 的兼容性

https://caniuse.com/?search=%20Web%20Component

对于不兼容的浏览器我们除了可以做降级处理，官方团队也推出了轻量的npm包作为polyfill垫片，https://github.com/webcomponents/polyfills

## Web component 现有的一些框架

* Ionic Framework团队推出的一款基于web component开发组件的框架 stencil， 详细资料可以查看 [stencil官网](https://stenciljs.com/docs/introduction)

* 腾讯也推出了一款web componet开发组件的框架 [omi官网](https://tencent.github.io/omi/)

## 总结

web component 从原生js层面实现了组件化，总的来说是web标准提供了一套完整的封装机制来把 Web 组件化这个东西标准化，每个框架实现的组件都统一标准地进行输入输出，这样可以更好推动组件的复用。个人觉得组件化的各个 API 不够简洁易用，依旧有 我们使用原生js去操作DOM元素节点的味道，但是交由各个类库框架去简化其实也是可以接受。




<!-- 备份下参考文档  -->
> https://www.zhihu.com/question/460605613/answer/2748844102?utm_id=0

> https://zhuanlan.zhihu.com/p/611306395
