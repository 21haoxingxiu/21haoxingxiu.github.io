(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{521:function(t,e,r){"use strict";r.r(e);var a=r(15),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"透过现象看本质-react-16-缘何两次求变"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#透过现象看本质-react-16-缘何两次求变"}},[t._v("#")]),t._v(" 透过现象看本质：React 16 缘何两次求变？")]),t._v(" "),r("h3",{attrs:{id:"fiber-架构简析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fiber-架构简析"}},[t._v("#")]),t._v(" Fiber 架构简析")]),t._v(" "),r("p",[t._v("Fiber 是 React 16 对 React 核心算法的一次重写。关于 Fiber，我将在“模块二：核心原理”花大量的篇幅来介绍它的原理和细节。在本课时，你只需要 get 到这一个点：Fiber 会使原本同步的渲染过程变成异步的。")]),t._v(" "),r("p",[t._v("在 React 16 之前，每当我们触发一次组件的更新，React 都会构建一棵新的虚拟 DOM 树，通过与上一次的虚拟 DOM 树进行 diff，实现对 DOM 的定向更新。这个过程，是一个递归的过程。下面这张图形象地展示了这个过程的特征：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/21haoxingxiu/picture/master/blog/20210302145404.png",alt:""}})]),t._v(" "),r("p",[t._v("如图所示，同步渲染的递归调用栈是非常深的，只有最底层的调用返回了，整个渲染过程才会开始逐层返回。这个漫长且不可打断的更新过程，将会带来用户体验层面的巨大风险：同步渲染一旦开始，便会牢牢抓住主线程不放，直到递归彻底完成。在这个过程中，浏览器没有办法处理任何渲染之外的事情，会进入一种无法处理用户交互的状态。因此若渲染时间稍微长一点，页面就会面临卡顿甚至卡死的风险。")]),t._v(" "),r("p",[t._v("而 React 16 引入的 Fiber 架构，恰好能够解决掉这个风险：Fiber 会将一个大的更新任务拆解为许多个小任务。每当执行完一个小任务时，渲染线程都会把主线程交回去，看看有没有优先级更高的工作要处理，确保不会出现其他任务被“饿死”的情况，进而避免同步渲染带来的卡顿。在这个过程中，渲染线程不再“一去不回头”，而是可以被打断的，这就是所谓的“异步渲染”，它的执行过程如下图所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/21haoxingxiu/picture/master/blog/20210302145438.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"换个角度看生命周期工作流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#换个角度看生命周期工作流"}},[t._v("#")]),t._v(" 换个角度看生命周期工作流")]),t._v(" "),r("p",[t._v("Fiber 架构的重要特征就是可以被打断的异步渲染模式。但这个“打断”是有原则的，根据“能否被打断”这一标准，React 16 的生命周期被划分为了 render 和 commit 两个阶段，而 commit 阶段又被细分为了 pre-commit 和 commit。每个阶段所涵盖的生命周期如下图所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/21haoxingxiu/picture/master/blog/20210302145601.png",alt:""}})]),t._v(" "),r("p",[t._v("我们先来看下三个阶段各自有哪些特征（以下特征翻译自上图）。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("render 阶段：纯净且没有副作用，可能会被 React 暂停、终止或重新启动。")])]),t._v(" "),r("li",[r("p",[t._v("pre-commit 阶段：可以读取 DOM。")])]),t._v(" "),r("li",[r("p",[t._v("commit 阶段：可以使用 DOM，运行副作用，安排更新。")])])]),t._v(" "),r("h3",{attrs:{id:"总的来说-render-阶段在执行过程中允许被打断-而-commit-阶段则总是同步执行的。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总的来说-render-阶段在执行过程中允许被打断-而-commit-阶段则总是同步执行的。"}},[t._v("#")]),t._v(" 总的来说，render 阶段在执行过程中允许被打断，而 commit 阶段则总是同步执行的。")]),t._v(" "),r("p",[t._v("为什么这样设计呢？简单来说，由于 render 阶段的操作对用户来说其实是“不可见”的，所以就算打断再重启，对用户来说也是零感知。而 commit 阶段的操作则涉及真实 DOM 的渲染，再狂的框架也不敢在用户眼皮子底下胡乱更改视图，所以这个过程必须用同步渲染来求稳。")]),t._v(" "),r("h3",{attrs:{id:"细说生命周期-废旧立新-背后的思考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#细说生命周期-废旧立新-背后的思考"}},[t._v("#")]),t._v(" 细说生命周期“废旧立新”背后的思考")]),t._v(" "),r("p",[t._v("在 Fiber 机制下，render 阶段是允许暂停、终止和重启的。当一个任务执行到一半被打断后，下一次渲染线程抢回主动权时，这个任务被重启的形式是“重复执行一遍整个任务”而非“接着上次执行到的那行代码往下走”。这就导致 render 阶段的生命周期都是有可能被重复执行的。")]),t._v(" "),r("p",[t._v("带着这个结论，我们再来看看 React 16 打算废弃的是哪些生命周期：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("componentWillMount；")])]),t._v(" "),r("li",[r("p",[t._v("componentWillUpdate；")])]),t._v(" "),r("li",[r("p",[t._v("componentWillReceiveProps。")])])]),t._v(" "),r("h4",{attrs:{id:"这些生命周期的共性-就是它们都处于-render-阶段-都可能重复被执行-而且由于这些-api-常年被滥用-它们在重复执行的过程中都存在着不可小觑的风险。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#这些生命周期的共性-就是它们都处于-render-阶段-都可能重复被执行-而且由于这些-api-常年被滥用-它们在重复执行的过程中都存在着不可小觑的风险。"}},[t._v("#")]),t._v(" 这些生命周期的共性，就是它们都处于 render 阶段，都可能重复被执行，而且由于这些 API 常年被滥用，它们在重复执行的过程中都存在着不可小觑的风险。")]),t._v(" "),r("h4",{attrs:{id:"总的来说-react-16-改造生命周期的主要动机是为了配合-fiber-架构带来的异步渲染机制。在这个改造的过程中-react-团队精益求精-针对生命周期中长期被滥用的部分推行了具有强制性的最佳实践。这一系列的工作做下来-首先是确保了-fiber-机制下数据和视图的安全性-同时也确保了生命周期方法的行为更加纯粹、可控、可预测。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总的来说-react-16-改造生命周期的主要动机是为了配合-fiber-架构带来的异步渲染机制。在这个改造的过程中-react-团队精益求精-针对生命周期中长期被滥用的部分推行了具有强制性的最佳实践。这一系列的工作做下来-首先是确保了-fiber-机制下数据和视图的安全性-同时也确保了生命周期方法的行为更加纯粹、可控、可预测。"}},[t._v("#")]),t._v(" 总的来说，React 16 改造生命周期的主要动机是为了配合 Fiber 架构带来的异步渲染机制。在这个改造的过程中，React 团队精益求精，针对生命周期中长期被滥用的部分推行了具有强制性的最佳实践。这一系列的工作做下来，首先是确保了 Fiber 机制下数据和视图的安全性，同时也确保了生命周期方法的行为更加纯粹、可控、可预测。")]),t._v(" "),r("p",[t._v("来源："),r("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=510#/detail/pc?id=4852",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kaiwu.lagou.com/course/courseInfo.htm?courseId=510#/detail/pc?id=4852"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);