(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{311:function(s,e,n){"use strict";n.r(e);var t=n(14),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"第一题执行结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一题执行结果"}},[s._v("#")]),s._v(" 第一题执行结果")]),s._v(" "),e("blockquote",[e("p",[s._v("执行主程序代码：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("settimeout挂起到宏任务队列")])]),s._v(" "),e("li",[e("p",[s._v("打印**（eventLoop）**")])]),s._v(" "),e("li",[e("p",[s._v("执行async1  打印**（async1 start）及（async2）** 遇到await等待跳出？")])]),s._v(" "),e("li",[e("p",[s._v("执行new promise, 打印**（promise 2）**， 挂起.then到微任务队列？")])]),s._v(" "),e("li",[e("p",[s._v("再执行第二个new promise, 打印**（promise 4）**， 挂起.then到微任务队列？")])]),s._v(" "),e("li",[e("p",[s._v("打印**（eventLoop end）**")])]),s._v(" "),e("li",[e("p",[s._v("此时其它代码执行完毕后，")])]),s._v(" "),e("li",[e("p",[s._v("回到async1函数去执行剩下的代码，先打印**(async1 end)** 接着执行async3，打印**（async3）**")])])]),s._v(" "),e("p",[s._v("执行产生的微任务")]),s._v(" "),e("ul",[e("li",[s._v("执行第一个.then微任务 打印**（promise2 then）**")]),s._v(" "),e("li",[s._v("执行第二个.then微任务 打印**（promise4 then）**")])]),s._v(" "),e("p",[s._v("执行宏任务")]),s._v(" "),e("ul",[e("li",[s._v("执行setTimeout，")]),s._v(" "),e("li",[s._v("打印(setTimeout 1)")]),s._v(" "),e("li",[s._v("打印（promise 1）")]),s._v(" "),e("li",[s._v("遇到.then产生微任务")]),s._v(" "),e("li",[s._v("执行.then微任务，打印(promise then)")])])]),s._v(" "),e("p",[s._v("最终结果是：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("eventLoop\nasync1 start\nasync2\npromise "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\npromise "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\neventLoop end\nasync1 end\nasync3\npromise2 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\npromise4 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\nsetTimeout "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\npromise "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\npromise "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n")])])]),e("h5",{attrs:{id:"如果将async1-变成await-执行结果会有不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果将async1-变成await-执行结果会有不同"}},[s._v("#")]),s._v(" 如果将async1(), 变成await，执行结果会有不同")]),s._v(" "),e("blockquote",[e("p",[s._v("原因：遇到await的时候，会阻塞后面的代码，会将当前async1产生的同步代码执行完后再往下，所以会先打印 "),e("strong",[s._v("（async1 end）")]),s._v("、  "),e("strong",[s._v("（async3）")]),s._v("   再打印**（promise 2）** 、"),e("strong",[s._v("（promise 4）")]),s._v("、 **（eventLoop end）**其它的不变，最终顺序是：")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("eventLoop\nasync1 start\nasync2\nasync1 end\nasync3\npromise "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\npromise "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\neventLoop end\npromise2 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\npromise4 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\nsetTimeout "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\npromise "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\npromise "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);