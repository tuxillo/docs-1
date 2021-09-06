"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75480],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73131:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"response-codes",title:"Response Codes"},p=void 0,c={unversionedId:"protocol/response-codes",id:"version-0.6.4/protocol/response-codes",isDocsHomePage:!1,title:"Response Codes",description:"Skytable may return any of the response codes listed here:",source:"@site/versioned_docs/version-0.6.4/protocol/response-codes.md",sourceDirName:"protocol",slug:"/protocol/response-codes",permalink:"/0.6.4/protocol/response-codes",tags:[],version:"0.6.4",frontMatter:{id:"response-codes",title:"Response Codes"},sidebar:"version-0.6.4/docs",previous:{title:"Data Types",permalink:"/0.6.4/protocol/data-types"},next:{title:"Error Strings",permalink:"/0.6.4/protocol/errors"}},d=[],s={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Skytable may return any of the response codes listed here:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0")),(0,o.kt)("td",{parentName:"tr",align:null},"Okay"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1")),(0,o.kt)("td",{parentName:"tr",align:null},"Nil"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2")),(0,o.kt)("td",{parentName:"tr",align:null},"Overwrite Error"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"3")),(0,o.kt)("td",{parentName:"tr",align:null},"Action Error"),(0,o.kt)("td",{parentName:"tr",align:null},"The action didn't expect the arguments sent")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"4")),(0,o.kt)("td",{parentName:"tr",align:null},"Packet Error"),(0,o.kt)("td",{parentName:"tr",align:null},"The packet contains invalid data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"5")),(0,o.kt)("td",{parentName:"tr",align:null},"Server Error"),(0,o.kt)("td",{parentName:"tr",align:null},"An error occurred on the server side")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"6")),(0,o.kt)("td",{parentName:"tr",align:null},"Other error"),(0,o.kt)("td",{parentName:"tr",align:null},"Some other error response")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Error String")),(0,o.kt)("td",{parentName:"tr",align:null},"Other error with description"),(0,o.kt)("td",{parentName:"tr",align:null},"Some other error occurred and the server returned a description of this error. See ",(0,o.kt)("a",{parentName:"td",href:"errors"},"this document"))))))}u.isMDXComponent=!0}}]);