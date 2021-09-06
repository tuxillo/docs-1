"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17350],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51353:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"examples",title:"Examples"},o=void 0,s={unversionedId:"examples",id:"version-0.7.0/examples",isDocsHomePage:!1,title:"Examples",description:"DDL",source:"@site/versioned_docs/version-0.7.0/5b.examples.md",sourceDirName:".",slug:"/examples",permalink:"/examples",tags:[],version:"0.7.0",frontMatter:{id:"examples",title:"Examples"},sidebar:"version-0.7.0/docs",previous:{title:"DDL",permalink:"/ddl"},next:{title:"Index of actions",permalink:"/all-actions"}},c=[{value:"DDL",id:"ddl",children:[]}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ddl"},"DDL"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a keymap table called 'cats' in a keyspace 'animals'. The cat's name will be the key\nwhich as an ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," value while the value would be the cat's image in a binary format, so it'll be\nof the ",(0,l.kt)("inlineCode",{parentName:"p"},"binstr")," type."),(0,l.kt)("p",{parentName:"li"},"a. Let's create the keyspace"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE KEYSPACE animals\n")),(0,l.kt)("p",{parentName:"li"},"b. Let's create the table:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE animals:cat keymap(str,binstr)\n")),(0,l.kt)("p",{parentName:"li"},"c. Let's switch to the table:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"USE animals:cat\n")),(0,l.kt)("p",{parentName:"li"},"d. Let's inspect it:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSPECT TABLE animals:cat\n")),(0,l.kt)("p",{parentName:"li"},"e. Let's drop the table:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE animals:cat\n")),(0,l.kt)("p",{parentName:"li"},"f. Let's drop the keyspace"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP KEYSPACE animals\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a keymap table called 'favorites' in the 'default' keyspace. This will store a favorite\nname, an ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," and an URL, also an ",(0,l.kt)("inlineCode",{parentName:"p"},"str"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE favorites keymap(str,str)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a keymap table called 'cache' in the 'default' keyspace that is volatile. Our cache key is an ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," while the value would be some binary data, so ",(0,l.kt)("inlineCode",{parentName:"p"},"binstr"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE cache keymap(str,binstr) volatile\n")))))}u.isMDXComponent=!0}}]);