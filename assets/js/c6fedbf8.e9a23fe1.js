(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[128],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25955:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"persistence",title:"Persistence"},s=void 0,l={unversionedId:"persistence",id:"version-0.6.4/persistence",isDocsHomePage:!1,title:"Persistence",description:"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works.",source:"@site/versioned_docs/version-0.6.4/4.persistence.md",sourceDirName:".",slug:"/persistence",permalink:"/persistence",version:"0.6.4",sidebarPosition:4,frontMatter:{id:"persistence",title:"Persistence"},sidebar:"version-0.6.4/docs",previous:{title:"Actions overview",permalink:"/actions-overview"},next:{title:"Configuration Files",permalink:"/config-files"}},u=[{value:"Data directory structure",id:"data-directory-structure",children:[]},{value:"How Skytable stores data",id:"how-skytable-stores-data",children:[{value:"Save failure during termination",id:"save-failure-during-termination",children:[]}]},{value:"Automated background saving",id:"automated-background-saving",children:[{value:"Reliability of BGSAVE",id:"reliability-of-bgsave",children:[]},{value:"BGSAVE Recovery",id:"bgsave-recovery",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Skytable supports the persistent storage of data, which is an inherently obvious need for any database. In this document we explore how Skytable's persistence works."),(0,i.kt)("h2",{id:"data-directory-structure"},"Data directory structure"),(0,i.kt)("p",null,"Whenever you start Skytable, it will create a number of directories under a root 'data' directory. This is what the\ndata directory structure looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"|__user-files (your other files)\n|__data\n   |__data.bin\n   |__snapshots\n      |__<YYYYMMDD>-<HHMMSS>.snapshot (many)\n      |__remote\n         |___<snapshotname>.snapshot (many)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"data.bin")," file is primarily used for persistence while the snapshots folder contains automatically created\nsnapshots and remotely created snapshots."),(0,i.kt)("h2",{id:"how-skytable-stores-data"},"How Skytable stores data"),(0,i.kt)("p",null,"As soon as you start Skytable, it will look for a ",(0,i.kt)("inlineCode",{parentName:"p"},"data.bin")," file in the data directory;\nif the data file is found and successfully read, then the previous data is moved into the in-memory table. If no\nfile was found, then the database server will create one. Once you terminate the daemon, it will flush all data\nto this file. All writes are ",(0,i.kt)("inlineCode",{parentName:"p"},"fsync"),"ed by the time they complete."),(0,i.kt)("h3",{id:"save-failure-during-termination"},"Save failure during termination"),(0,i.kt)("p",null,"The server would attempt to do a ",(0,i.kt)("em",{parentName:"p"},"final")," save operation before it terminates and if this fails, the\nserver would enter into a retry loop. It will try the save operation after every 10 seconds.\nExponential backoff was not chosen because it could increase to extremely large values that may hurt\na sysadmin's time and productivity."),(0,i.kt)("p",null,"You might be interested in more features like ",(0,i.kt)("a",{parentName:"p",href:"#automated-background-saving"},"BGSAVE")," and ",(0,i.kt)("a",{parentName:"p",href:"/snapshots"},"snapshots")," that\ncan be configured and used by users."),(0,i.kt)("h2",{id:"automated-background-saving"},"Automated background saving"),(0,i.kt)("p",null,"Skytable supports automated saving of data in the background, via ",(0,i.kt)("inlineCode",{parentName:"p"},"BGSAVE"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"BGSAVE"),", runs every two minutes to flush all the data in the in-memory table onto disk, unless customized through the ",(0,i.kt)("a",{parentName:"p",href:"config-files/#an-example-configuration"},"configuration file"),". BGSAVE is enabled by default and we don't recommend disabling it until you're sure that\nyour hardware will never fail; it is likely that this will never be the case. First BGSAVE will create a temporary\nfile and then flush the current in-memory table onto disk. It will then replace the old ",(0,i.kt)("inlineCode",{parentName:"p"},"data.bin")," file. The daemon automatically ",(0,i.kt)("inlineCode",{parentName:"p"},"fsync"),"s after every successful write (whether to the buffers or\nto the actual disk)."),(0,i.kt)("h3",{id:"reliability-of-bgsave"},"Reliability of BGSAVE"),(0,i.kt)("p",null,"It can happen that BGSAVE fails to flush data to the disk due to some unforeseen system issues (such as lack of\nempty disk space, permission errors, etc). But if we continue to accept modifications to the data, it is a bad idea\nbecause this data may never get updated! This is why if BGSAVE fails, it will automatically ",(0,i.kt)("em",{parentName:"p"},"poison")," the in-memory\ntable preventing it from accepting any write/update operations. Poisioning is nothing but a global flag set in the\ndatabase that indicates that the DB shouldn't accept any more updates/writes to data and in such a poisoned state,\nonly reads are permitted."),(0,i.kt)("h3",{id:"bgsave-recovery"},"BGSAVE Recovery"),(0,i.kt)("p",null,"BGSAVE will automatically try to recover on every 120s (or whatever duration was set). If the problem\nwas corrected (say it was a permissions issue), then the database server will automatically resume\nwrites and ",(0,i.kt)("em",{parentName:"p"},"unpoison")," the database."))}d.isMDXComponent=!0}}]);