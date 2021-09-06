"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98552],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21662:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"index",title:"Introduction",sidebar_label:"Home",slug:"/"},c=void 0,l={unversionedId:"index",id:"version-0.1.0/index",isDocsHomePage:!1,title:"Introduction",description:"Welcome to TerrabaseDB's docs! You will find information about how you can get started with TerrabaseDB, installation options, configuration and clients.",source:"@site/versioned_docs/version-0.1.0/1.index.md",sourceDirName:".",slug:"/",permalink:"/0.1.0/",tags:[],version:"0.1.0",sidebarPosition:1,frontMatter:{id:"index",title:"Introduction",sidebar_label:"Home",slug:"/"},sidebar:"version-0.1.0/docs",next:{title:"Getting Started",permalink:"/0.1.0/getting-started"}},u=[{value:"Users",id:"users",children:[]},{value:"Developers",id:"developers",children:[]},{value:"Contributing",id:"contributing",children:[]},{value:"License",id:"license",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to TerrabaseDB's docs! You will find information about how you can get started with TerrabaseDB, installation options, configuration and clients."),(0,i.kt)("h2",{id:"users"},"Users"),(0,i.kt)("p",null,"We have an easy-to-follow guide for ",(0,i.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started"),". Once you've got everything up and running, you can take a look at the available actions ",(0,i.kt)("a",{parentName:"p",href:"actions/overview"},"here"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This documentation version is for TerrabaseDB v0.1.0. For the latest documentation, visit ",(0,i.kt)("a",{parentName:"p",href:"/next"},"this link"),"."))),(0,i.kt)("h2",{id:"developers"},"Developers"),(0,i.kt)("p",null,"You can find information on how to build your own clients ",(0,i.kt)("a",{parentName:"p",href:"terrapipe"},"here"),". The primary idea is to implement the Terrapipe Protocol."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"If you find any typos, mistakes or any other scope of improvement - please don't hesitate to bring it up ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skytable/docs/issues"},"here"),". Thank you \u2764\ufe0f!"),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"The documentation is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skytable/docs/tree/master/LICENSE"},"CC-BY-SA-4.0 License")))}d.isMDXComponent=!0}}]);