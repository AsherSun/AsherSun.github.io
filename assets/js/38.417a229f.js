(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{535:function(v,_,t){"use strict";t.r(_);var e=t(4),o=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[t("strong",[v._v("缓存的意义在于减少请求 ，更多的使用本地资源，给用户更好的体验同时也减轻服务器压力。")])]),v._v(" "),t("h3",{attrs:{id:"强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[v._v("#")]),v._v(" 强缓存")]),v._v(" "),t("blockquote",[t("p",[v._v("使用本地缓存的时候，不会去向服务端询问缓存是否依旧有效")])]),v._v(" "),t("p",[t("strong",[v._v("控制强缓存方式")])]),v._v(" "),t("ul",[t("li",[t("p",[t("code",[v._v("Cache-Control")]),v._v(" http1.1")]),v._v(" "),t("p",[v._v("设置"),t("code",[v._v("Cache-Control")]),v._v("的值为"),t("code",[v._v("public,max-age=xxx")]),v._v("，表示在"),t("code",[v._v("xxx")]),v._v("秒内再次访问该资源，均使用本地缓存，不再向服务器发起请求。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("Expire")]),v._v(" http1.0")])])]),v._v(" "),t("p",[t("strong",[v._v("存在的问题")])]),v._v(" "),t("ul",[t("li",[v._v("在"),t("code",[v._v("xxx")]),v._v("秒内，如果服务器上的资源更新了，在客户端没有强制刷新的情况下，看到的内容还是旧的。")])]),v._v(" "),t("h3",{attrs:{id:"协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[v._v("#")]),v._v(" 协商缓存")]),v._v(" "),t("blockquote",[t("p",[v._v("使用本地缓存的时候，会先向服务端询问缓存是否有效，最终确定是否使用本地缓存")])]),v._v(" "),t("p",[t("strong",[v._v("控制协商缓存的方式")])]),v._v(" "),t("p",[v._v("http 响应头设置")]),v._v(" "),t("ul",[t("li",[v._v("ETag ？")]),v._v(" "),t("li",[v._v("Last-Modified ？")])]),v._v(" "),t("p",[t("strong",[v._v("存在的问题")])]),v._v(" "),t("ul",[t("li",[v._v("每次都要向服务器验证一下缓存的有效性")])]),v._v(" "),t("h3",{attrs:{id:"最佳实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[v._v("#")]),v._v(" 最佳实践")]),v._v(" "),t("blockquote",[t("p",[v._v("尽可能的命中强缓存，同时，能在更新版本的时候让客户端的缓存失效。")])]),v._v(" "),t("p",[t("strong",[v._v("如何做？")])]),v._v(" "),t("ul",[t("li",[v._v("HTML: 使用协商缓存")]),v._v(" "),t("li",[v._v("CSS&JS&图片：使用强缓存，文件名携带"),t("code",[v._v("hash")]),v._v("值")])])])}),[],!1,null,null,null);_.default=o.exports}}]);