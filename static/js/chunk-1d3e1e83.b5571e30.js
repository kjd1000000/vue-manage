(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d3e1e83"],{"1f00":function(t,e,n){"use strict";n("6d7e")},"3c34":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container documentation-container"},[n("iframeDseign"),n("div",{staticClass:"block1"})],1)},o=[],a=n("7c70"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"designPage"},[n("iframe",{staticClass:"designPage",attrs:{src:"https://dream2023.gitee.io/f-render/",frameborder:"0"},on:{load:t.load}})])},r=[],c={components:{},data:function(){return{loading:!0,timmer:null}},activated:function(){console.log("CRE"),this.loading=!0,window.onkeydown=window.onkeyup=window.onkeypress=function(t){(t.keyCode=123)&&(t.preventDefault(),window.event.returnValue=!1)},window.oncontextmenu=function(){return event.preventDefault(),!1};var t=160;this.timmer=window.setInterval((function(){(window.outerWidth-window.innerWidth>t||window.outerHeight-window.innerHeight>t)&&window.location.reload()}),1e3)},deactivated:function(){clearTimeout(this.timmer),window.onkeydown=window.onkeyup=window.onkeypress=function(t){t.keyCode=123},window.oncontextmenu=function(){}},methods:{load:function(){this.loading=!1,console.log(12312)}}},u=c,d=(n("ee54"),n("4ac2")),l=Object(d["a"])(u,s,r,!1,null,"d2d05cb8",null),f=l.exports,p={name:"Documentation",components:{DropdownMenu:a["a"],iframeDseign:f},data:function(){return{articleList:[{title:"基础篇",href:"https://juejin.im/post/59097cd7a22b9d0065fb61d2"},{title:"登录权限篇",href:"https://juejin.im/post/591aa14f570c35006961acac"},{title:"实战篇",href:"https://juejin.im/post/593121aa0ce4630057f70d35"},{title:"vue-admin-template 篇",href:"https://juejin.im/post/595b4d776fb9a06bbe7dba56"},{title:"v4.0 篇",href:"https://juejin.im/post/5c92ff94f265da6128275a85"},{title:"自行封装 component",href:"https://segmentfault.com/a/1190000009090836"},{title:"优雅的使用 icon",href:"https://juejin.im/post/59bb864b5188257e7a427c09"},{title:"webpack4（上）",href:"https://juejin.im/post/59bb864b5188257e7a427c09"},{title:"webpack4（下）",href:"https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc"}]}},methods:function(){}},m=p,w=(n("1f00"),Object(d["a"])(m,i,o,!1,null,"3728b319",null));e["default"]=w.exports},"3d19":function(t,e,n){},"4ba3":function(t,e,n){"use strict";n("65f3")},"65f3":function(t,e,n){},"6d7e":function(t,e,n){},"7c70":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-dropdown-menu",class:{active:t.isActive}},[n("div",{staticClass:"share-dropdown-menu-wrapper"},[n("span",{staticClass:"share-dropdown-menu-title",on:{click:function(e){return e.target!==e.currentTarget?null:t.clickTitle(e)}}},[t._v(t._s(t.title))]),t._l(t.items,(function(e,i){return n("div",{key:i,staticClass:"share-dropdown-menu-item"},[e.href?n("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))]):n("span",[t._v(t._s(e.title))])])}))],2)])},o=[],a={props:{items:{type:Array,default:function(){return[]}},title:{type:String,default:"vue"}},data:function(){return{isActive:!1}},methods:{clickTitle:function(){this.isActive=!this.isActive}}},s=a,r=(n("4ba3"),n("4ac2")),c=Object(r["a"])(s,i,o,!1,null,null,null);e["a"]=c.exports},ee54:function(t,e,n){"use strict";n("3d19")}}]);