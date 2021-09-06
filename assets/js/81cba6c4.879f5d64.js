"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10539],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,h=f["".concat(c,".").concat(d)]||f[d]||l[d]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66951:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),s=["components"],a={id:"persistence",title:"Persistence"},c=void 0,u={unversionedId:"persistence",id:"version-0.3.0/persistence",isDocsHomePage:!1,title:"Persistence",description:"TerrabaseDB supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how persistence works.",source:"@site/versioned_docs/version-0.3.0/4.persistence.md",sourceDirName:".",slug:"/persistence",permalink:"/0.3.0/persistence",tags:[],version:"0.3.0",sidebarPosition:4,frontMatter:{id:"persistence",title:"Persistence"},sidebar:"version-0.3.0/docs",previous:{title:"UPDATE",permalink:"/0.3.0/Actions/update"},next:{title:"Building from source",permalink:"/0.3.0/building-from-source"}},p=[{value:"How persistence works",id:"how-persistence-works",children:[]},{value:"Caveats",id:"caveats",children:[]}],l={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TerrabaseDB supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how persistence works."),(0,o.kt)("h3",{id:"how-persistence-works"},"How persistence works"),(0,o.kt)("p",null,"As per the current design, TDB on startup will check if a data.bin file exists in the working directory. If it does, then the existing key/value pairs are restored, otherwise an empty HashMap<K, V> is loaded into memory. When the database shuts down, the keys are written to disk."),(0,o.kt)("h3",{id:"caveats"},"Caveats"),(0,o.kt)("p",null,"However, the current persistence strategy is not very efficient since it rewrites the entire in-memory table back onto disk, regardless of changes, that is, even if no changes are made, TDB still rewrites the same data to disk. This will change in the future with a better disk storage format."))}f.isMDXComponent=!0}}]);