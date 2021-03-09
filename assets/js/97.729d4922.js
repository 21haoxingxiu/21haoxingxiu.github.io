(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{519:function(t,e,o){"use strict";o.r(e);var r=o(15),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"如何避免生命周期中的坑"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#如何避免生命周期中的坑"}},[t._v("#")]),t._v(" 如何避免生命周期中的坑")]),t._v(" "),o("h3",{attrs:{id:"避免生命周期中的坑需要做好两件事"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#避免生命周期中的坑需要做好两件事"}},[t._v("#")]),t._v(" 避免生命周期中的坑需要做好两件事：")]),t._v(" "),o("ul",[o("li",[t._v("不在恰当的时候调用了不该调用的代码；")]),t._v(" "),o("li",[t._v("在需要调用时，不要忘了调用。")])]),t._v(" "),o("h3",{attrs:{id:"那么主要有这么-7-种情况容易造成生命周期的坑。"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#那么主要有这么-7-种情况容易造成生命周期的坑。"}},[t._v("#")]),t._v(" 那么主要有这么 7 种情况容易造成生命周期的坑。")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("getDerivedStateFromProps 容易编写反模式代码，使受控组件与非受控组件区分模糊。")])]),t._v(" "),o("li",[o("p",[t._v("componentWillMount 在 React 中已被标记弃用，不推荐使用，主要原因是新的异步渲染架构会导致它被多次调用。所以网络请求及事件绑定代码应移至 componentDidMount 中。")])]),t._v(" "),o("li",[o("p",[t._v("componentWillReceiveProps 同样被标记弃用，被 getDerivedStateFromProps 所取代，主要原因是性能问题。")])]),t._v(" "),o("li",[o("p",[t._v("shouldComponentUpdate 通过返回 true 或者 false 来确定是否需要触发新的渲染。主要用于性能优化。")])]),t._v(" "),o("li",[o("p",[t._v("componentWillUpdate 同样是由于新的异步渲染机制，而被标记废弃，不推荐使用，原先的逻辑可结合 - getSnapshotBeforeUpdate 与 componentDidUpdate 改造使用。")])]),t._v(" "),o("li",[o("p",[t._v("如果在 componentWillUnmount 函数中忘记解除事件绑定，取消定时器等清理操作，容易引发 bug。")])]),t._v(" "),o("li",[o("p",[t._v("如果没有添加错误边界处理，当渲染发生异常时，用户将会看到一个无法操作的白屏，所以一定要添加。")])])]),t._v(" "),o("h3",{attrs:{id:"react-的请求应该放在哪里-为什么"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#react-的请求应该放在哪里-为什么"}},[t._v("#")]),t._v(" “React 的请求应该放在哪里，为什么?”")]),t._v(" "),o("p",[t._v("对于异步请求，应该放在 componentDidMount 中去操作。从时间顺序来看，除了 componentDidMount 还可以有以下选择：")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("constructor：可以放，但从设计上而言不推荐。constructor 主要用于初始化 state 与函数绑定，并不承载业务逻辑。而且随着类属性的流行，constructor 已经很少使用了。")])]),t._v(" "),o("li",[o("p",[t._v("componentWillMount：已被标记废弃，在新的异步渲染架构下会触发多次渲染，容易引发 Bug，不利于未来 React 升级后的代码维护。")])])]),t._v(" "),o("p",[t._v("所以React 的请求放在 componentDidMount 里是最好的选择。")]),t._v(" "),o("p",[t._v("来源："),o("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=566#/detail/pc?id=5793",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kaiwu.lagou.com/course/courseInfo.htm?courseId=566#/detail/pc?id=5793"),o("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);