(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{551:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"scss中有取模运算吗-写一个依据取模运算的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss中有取模运算吗-写一个依据取模运算的例子"}},[s._v("#")]),s._v(" scss中有取模运算吗？写一个依据取模运算的例子")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("引用scss文档中说明")]),s._v(" "),a("p",[a("code",[s._v("SassScript")]),s._v(" 支持数字的标准运算（加 "),a("code",[s._v("+")]),s._v("、减 "),a("code",[s._v("-")]),s._v("、乘 "),a("code",[s._v("*")]),s._v("、除 "),a("code",[s._v("/")]),s._v("和取模 "),a("code",[s._v("%")]),s._v("），并且，如果需要的话，也可以在不同单位间做转换")]),s._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[a("a",{attrs:{href:"http://sass.bootcss.com/docs/sass-reference/#yun-suan",target:"_blank",rel:"noopener noreferrer"}},[s._v("中文文档地址"),a("OutboundLink")],1)])])]),s._v(" "),a("p",[a("strong",[s._v("例子")])]),s._v(" "),a("p",[s._v("假设共有6个颜色值，根据权重使用不同的颜色值")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看代码示例")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 颜色值有如下:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight1")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #FC7358"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight2")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #DF955C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight3")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #FC5886"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight4")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #CEA93B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight5")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #FD8684"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight6")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #5BA5D2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagNum")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagNum")]),s._v(" >= 0 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".tag--"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$tagNum}")]),s._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagNum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" 6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@else if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagNum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" 6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@else if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagNum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" 6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@else if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagNum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" 6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@else if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagNum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" 6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" 4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$weight6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagNum")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagNum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("div",{staticClass:"custom-block right"},[a("p",[a("a",{attrs:{href:"https://codepen.io/AsherSun/pen/YzPEKPj",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击查看运行效果示例"),a("OutboundLink")],1)])])]),s._v(" "),a("p",[a("strong",[s._v("其实上述代码示例中，在"),a("code",[s._v("if")]),s._v("条件判断这里再加一步取模运算算是写无用代码，不过问题本身要求实现一个取模运算的例子，那就先这样吧。")])]),s._v(" "),a("h2",{attrs:{id:"css-设置元素镜像的样式是"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-设置元素镜像的样式是"}},[s._v("#")]),s._v(" css 设置元素镜像的样式是？")]),s._v(" "),a("ul",[a("li",[s._v("方式一："),a("code",[s._v("-webkit-box-reflect: [ above | below | right | left ]? ? ?")])]),s._v(" "),a("li",[s._v("方式二："),a("code",[s._v("transform: scaleX(-1)")])]),s._v(" "),a("li",[s._v("方式三："),a("code",[s._v("transform: roateY(180deg)")])]),s._v(" "),a("li",[a("code",[s._v("svg")]),s._v("和"),a("code",[s._v("canvas")])])]),s._v(" "),a("p",[a("strong",[s._v("参考资料")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/08/webkit-box-reflect-moz-element/",target:"_blank",rel:"noopener noreferrer"}},[s._v("-webkit-box-reflect属性简介及元素镜像倒影实现"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2011/05/css%e5%ae%9e%e7%8e%b0%e5%90%84%e4%b8%aa%e6%b5%8f%e8%a7%88%e5%99%a8%e5%85%bc%e5%ae%b9%e7%9a%84%e5%9e%82%e7%9b%b4%e7%bf%bb%e8%bd%ac%e6%b0%b4%e5%b9%b3%e7%bf%bb%e8%bd%ac%e6%95%88%e6%9e%9c/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS垂直翻转/水平翻转提高web页面资源重用性"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://knightyun.github.io/2019/01/27/css-transform",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS3之2D与3D变换"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("后续思考")])]),s._v(" "),a("ul",[a("li",[s._v("理解坐标系中的四象限概念(初中数学知识,我已经忘的差不多了)")]),s._v(" "),a("li",[a("code",[s._v("css")]),s._v("中的角度单位有几种？每一种的概念和计算方式")]),s._v(" "),a("li",[s._v("以点入面, 将这一问题整理成一片文章")])])])}),[],!1,null,null,null);t.default=e.exports}}]);