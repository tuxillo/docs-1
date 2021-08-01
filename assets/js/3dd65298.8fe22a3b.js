(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4250],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(a),u=r,d=k["".concat(o,".").concat(u)]||k[u]||c[u]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},92831:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i={id:"ddl",title:"DDL"},p=void 0,o={unversionedId:"ddl",id:"ddl",isDocsHomePage:!1,title:"DDL",description:"DDL or Data Definition Language is a way to interact with containers. Skytable lets you interact with containers with the following DDL actions:",source:"@site/docs/5.ddl.md",sourceDirName:".",slug:"/ddl",permalink:"/next/ddl",version:"current",sidebarPosition:5,frontMatter:{id:"ddl",title:"DDL"},sidebar:"docs",previous:{title:"Containers",permalink:"/next/containers"},next:{title:"Index of actions",permalink:"/next/all-actions"}},s=[{value:"CREATE",id:"create",children:[{value:"Keyspaces",id:"keyspaces",children:[]},{value:"Tables",id:"tables",children:[]}]},{value:"DROP",id:"drop",children:[{value:"Keyspaces",id:"keyspaces-1",children:[]},{value:"Tables",id:"tables-1",children:[]}]},{value:"INSPECT",id:"inspect",children:[{value:"Entire database",id:"entire-database",children:[]},{value:"Keyspaces",id:"keyspaces-2",children:[]},{value:"Tables",id:"tables-2",children:[]}]},{value:"USE",id:"use",children:[{value:"Keyspaces",id:"keyspaces-3",children:[]},{value:"Tables",id:"tables-3",children:[]}]}],m={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"DDL or ",(0,l.kt)("em",{parentName:"p"},"Data Definition Language")," is a way to interact with ",(0,l.kt)("a",{parentName:"p",href:"containers"},"containers"),". Skytable lets you interact with containers with the following DDL actions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create"},(0,l.kt)("inlineCode",{parentName:"a"},"CREATE"))," to create containers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#use"},(0,l.kt)("inlineCode",{parentName:"a"},"USE"))," to switch to containers and run actions in them"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inspect"},(0,l.kt)("inlineCode",{parentName:"a"},"INSPECT"))," to inspect containers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#drop"},(0,l.kt)("inlineCode",{parentName:"a"},"DROP"))," to delete containers")),(0,l.kt)("h2",{id:"create"},"CREATE"),(0,l.kt)("h3",{id:"keyspaces"},"Keyspaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Time complexity"),": O(1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Transactional"),": Not yet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Syntax"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE KEYSPACE <name>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Okay if the keyspace was created"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"err-already-exists")," if it already existed"),(0,l.kt)("li",{parentName:"ul"},"server error if something unpredictable has happened on the server side")))),(0,l.kt)("h3",{id:"tables"},"Tables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Time complexity"),": O(1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Transactional"),": Not yet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Syntax"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE <entity> <model>(modelargs) <properties>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Okay if the table was created"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"err-already-exists")," if it already existed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default-container-unset")," if the connection level default keyspace has not been set"),(0,l.kt)("li",{parentName:"ul"},"server error if something unpredictable has happened on the server side"))),(0,l.kt)("li",{parentName:"ul"},"Refer to the ",(0,l.kt)("a",{parentName:"li",href:"containers#models"},"model section")," to know what to pass for ",(0,l.kt)("inlineCode",{parentName:"li"},"<model>")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"modelargs")),(0,l.kt)("li",{parentName:"ul"},"Refer to the ",(0,l.kt)("a",{parentName:"li",href:"containers#properties"},"table properties section")," to know what to pass for ",(0,l.kt)("inlineCode",{parentName:"li"},"properties")),(0,l.kt)("li",{parentName:"ul"},"Refer to the ",(0,l.kt)("a",{parentName:"li",href:"containers#entities"},"entity section")," to know what to pass for ",(0,l.kt)("inlineCode",{parentName:"li"},"entity"),". It is\nsimply your ",(0,l.kt)("inlineCode",{parentName:"li"},"tablename")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"yourkeyspacename:yourtablename"))),(0,l.kt)("h2",{id:"drop"},"DROP"),(0,l.kt)("h3",{id:"keyspaces-1"},"Keyspaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Time complexity"),": O(1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Transactional"),": Not yet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Syntax"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP KEYSPACE <name>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Okay if the keyspace was deleted"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"container-not-found")," if the keyspace wasn't found"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"still-in-use")," if clients are still connected to the keyspace or the keyspace is not empty"),(0,l.kt)("li",{parentName:"ul"},"server error if something unpredictable has happened on the server side")))),(0,l.kt)("h3",{id:"tables-1"},"Tables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Transactional"),": Not yet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE <entity>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Okay if the table was deleted"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"container-not-found")," if the keyspace wasn't found"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"still-in-use")," if clients are still connected to the table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default-container-unset")," if the connection level default keyspace has not been set"),(0,l.kt)("li",{parentName:"ul"},"server error if something unpredictable has happened on the server side"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"containers#entities"},"entity section")," to know what to pass for ",(0,l.kt)("inlineCode",{parentName:"p"},"entity"),". It is\nsimply your ",(0,l.kt)("inlineCode",{parentName:"p"},"tablename")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"yourkeyspacename:yourtablename")))),(0,l.kt)("h2",{id:"inspect"},"INSPECT"),(0,l.kt)("h3",{id:"entire-database"},"Entire database"),(0,l.kt)("p",null,"To inspect the entire database, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSPECT KEYSPACES\n")),(0,l.kt)("p",null,"This will return a flat array with all the keyspace names"),(0,l.kt)("h3",{id:"keyspaces-2"},"Keyspaces"),(0,l.kt)("p",null,"To inspect a keyspace, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSPECT KEYSPACE <name>\n")),(0,l.kt)("p",null,"This will return a flat array with all the table names"),(0,l.kt)("h3",{id:"tables-2"},"Tables"),(0,l.kt)("p",null,"To inspect a table, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSPECT TABLE <entity>\n")),(0,l.kt)("p",null,"This will return a string with the table's ",(0,l.kt)("em",{parentName:"p"},"syntactical description"),". For example, the keymap model\n",(0,l.kt)("em",{parentName:"p"},"can")," return:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Keymap { data: (binstr,binstr), volatile: true }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Refer to the ",(0,l.kt)("a",{parentName:"li",href:"containers#entities"},"entity section")," to know what to pass for ",(0,l.kt)("inlineCode",{parentName:"li"},"entity"),". It is\nsimply your ",(0,l.kt)("inlineCode",{parentName:"li"},"tablename")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"yourkeyspacename:yourtablename"))),(0,l.kt)("h2",{id:"use"},"USE"),(0,l.kt)("h3",{id:"keyspaces-3"},"Keyspaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Time complexity"),": O(1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Transactional"),": Not applicable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Syntax"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"USE <keyspace_name>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Okay if the keyspace was switched"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"container-not-found")," if the keyspace wasn't found")))),(0,l.kt)("h3",{id:"tables-3"},"Tables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Time complexity"),": O(1)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Transactional"),": Not applicable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"USE <entity>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Okay if the table was switched"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"container-not-found")," if the keyspace wasn't found"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default-container-unset")," if the connection level default keyspace has not been set"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"containers#entities"},"entity section")," to know what to pass for ",(0,l.kt)("inlineCode",{parentName:"p"},"entity"),". It is\nsimply your ",(0,l.kt)("inlineCode",{parentName:"p"},"tablename")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"yourkeyspacename:yourtablename")))))}c.isMDXComponent=!0}}]);