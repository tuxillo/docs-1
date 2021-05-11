(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{179:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"metadata",(function(){return o})),n.d(e,"toc",(function(){return i})),n.d(e,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(411)),b={id:"data-types",title:"Data Types"},o={unversionedId:"protocol/data-types",id:"protocol/data-types",isDocsHomePage:!1,title:"Data Types",description:"This table lists all data types supported by Skytable and their corresponding",source:"@site/docs/protocol/data-types.md",slug:"/protocol/data-types",permalink:"/next/protocol/data-types",version:"current",sidebar:"docs",previous:{title:"Terrapipe 1.0",permalink:"/next/protocol/terrapipe"},next:{title:"Response Codes",permalink:"/next/protocol/response-codes"}},i=[],c={toc:i};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This table lists all data types supported by Skytable and their corresponding\ntype symbols ( ",Object(l.b)("inlineCode",{parentName:"p"},"tsymbol")," s) and additional information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type symbol (tsymbol)"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Additional notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"+"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"the next line is a string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"!"),Object(l.b)("td",{parentName:"tr",align:null},"Response Code"),Object(l.b)("td",{parentName:"tr",align:null},"the next line is a response code")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"&"),Object(l.b)("td",{parentName:"tr",align:null},"Array"),Object(l.b)("td",{parentName:"tr",align:null},"Arrays that can be recursive")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_"),Object(l.b)("td",{parentName:"tr",align:null},"Flat array"),Object(l.b)("td",{parentName:"tr",align:null},"An array that only has strings")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"$"),Object(l.b)("td",{parentName:"tr",align:null},"JSON"),Object(l.b)("td",{parentName:"tr",align:null},"the next line is a ",Object(l.b)("inlineCode",{parentName:"td"},"JSON")," value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"."),Object(l.b)("td",{parentName:"tr",align:null},"smallint"),Object(l.b)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 255]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"smallint signed"),Object(l.b)("td",{parentName:"tr",align:null},"An integer in the range: ","[-128, 127]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},":"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"An integer in the range: ","[0, 4,294,967,295]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},";"),Object(l.b)("td",{parentName:"tr",align:null},"int signed"),Object(l.b)("td",{parentName:"tr",align:null},"An integer in the range: ","[-2,147,483,647, 2,147,483,647]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%"),Object(l.b)("td",{parentName:"tr",align:null},"float"),Object(l.b)("td",{parentName:"tr",align:null},"A 32-bit floating point value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"?"),Object(l.b)("td",{parentName:"tr",align:null},"binary"),Object(l.b)("td",{parentName:"tr",align:null},"the next line contains binary data (often called a blob)")))),Object(l.b)("p",null,"Do keep the matching for this symbol ",Object(l.b)("em",{parentName:"p"},"non-exhaustive")," since we might add more types in future revisions of the protocol."))}p.isMDXComponent=!0},411:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=a.a.createContext({}),p=function(t){var e=a.a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},s=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,b=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),s=r,m=d["".concat(b,".").concat(s)]||d[s]||u[s]||l;return n?a.a.createElement(m,o(o({ref:e},c),{},{components:n})):a.a.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,b=new Array(l);b[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,b[1]=o;for(var c=2;c<l;c++)b[c]=n[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);