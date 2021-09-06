"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15734],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41994:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"benchmarking",title:"Benchmarking"},u=void 0,c={unversionedId:"benchmarking",id:"version-0.4.0/benchmarking",isDocsHomePage:!1,title:"Benchmarking",description:"Once you've downloaded the bundle:",source:"@site/versioned_docs/version-0.4.0/5.benchmarking.md",sourceDirName:".",slug:"/benchmarking",permalink:"/0.4.0/benchmarking",tags:[],version:"0.4.0",sidebarPosition:5,frontMatter:{id:"benchmarking",title:"Benchmarking"},sidebar:"version-0.4.0/docs",previous:{title:"Persistence",permalink:"/0.4.0/persistence"},next:{title:"Building from source",permalink:"/0.4.0/building-from-source"}},s=[],p={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you've downloaded the bundle:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Unzip it and make the files executable"),(0,i.kt)("li",{parentName:"ol"},"Start the database server ",(0,i.kt)("inlineCode",{parentName:"li"},"tdb")),(0,i.kt)("li",{parentName:"ol"},"Now run ",(0,i.kt)("inlineCode",{parentName:"li"},"tdb-bench")," with the options, given in order:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connections")," : The number of clients you want to simulate (we recommend at least 2)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queries")," : The number of queries you want to run. A good number is ",(0,i.kt)("inlineCode",{parentName:"li"},"50000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packetsize")," : The key and value size. That is, if you set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"4"),", the key will have a size of 4 bytes and the corresponding value will also have a size of 4 bytes. A good size is ",(0,i.kt)("inlineCode",{parentName:"li"},"8"),", but it's really upto you")))),(0,i.kt)("p",null,"If you followed the advice above, then you should've run ",(0,i.kt)("inlineCode",{parentName:"p"},"tdb-bench 2 50000 8"),". Wait for the benchmarks to be run and see the results for yourself!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," The benchmark tool is currently experimental and may show TDB to be ",(0,i.kt)("em",{parentName:"p"},"slower"),"! If you've found any issues or you've got an idea - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skytable/skytable/issues/new"},"report 'em here"),"!"))}m.isMDXComponent=!0}}]);