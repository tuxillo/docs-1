(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{307:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(376)),c={id:"actions-overview",title:"Actions overview"},o={unversionedId:"actions-overview",id:"actions-overview",isDocsHomePage:!1,title:"Actions overview",description:"Actions are like shell commands",source:"@site/docs/actions.md",slug:"/actions-overview",permalink:"/next/actions-overview",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/next/getting-started"},next:{title:"Persistence",permalink:"/next/persistence"}},l=[],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Actions are like shell commands: they take arguments and do something! Skytable currently supports the following actions: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/dbsize"},"DBSIZE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/del"},"DEL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/exists"},"EXISTS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/flushdb"},"FLUSHDB")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/get"},"GET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/keylen"},"KEYLEN")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/mget"},"MGET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/mksnap"},"MKSNAP")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/mset"},"MSET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/mupdate"},"MUPDATE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/sdel"},"SDEL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/set"},"SET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/sset"},"SSET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/supdate"},"SUPDATE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/update"},"UPDATE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/next/Actions/uset"},"USET"))))}p.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(f,o(o({ref:t},b),{},{components:n})):a.a.createElement(f,o({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);