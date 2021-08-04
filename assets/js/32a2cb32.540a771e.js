(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3522],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99424:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"getting-started",title:"Getting Started"},s=void 0,l={unversionedId:"getting-started",id:"version-0.6.4/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with native binaries (recommended) or by using the docker image.",source:"@site/versioned_docs/version-0.6.4/2.getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",version:"0.6.4",sidebarPosition:2,frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"version-0.6.4/docs",previous:{title:"Home",permalink:"/"},next:{title:"Actions overview",permalink:"/actions-overview"}},d=[{value:"Get started with bundles",id:"get-started-with-bundles",children:[{value:"Step 1: Download a bundle",id:"step-1-download-a-bundle",children:[]},{value:"Step 2: Make the files runnable",id:"step-2-make-the-files-runnable",children:[]},{value:"Step 3: Start the database server",id:"step-3-start-the-database-server",children:[]},{value:"Step 4: Run the shell <code>skysh</code>",id:"step-4-run-the-shell-skysh",children:[]}]},{value:"Get started with Docker",id:"get-started-with-docker",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Getting started with Skytable is easy \ud83d\ude0a (and fun!). You can get started with ",(0,i.kt)("a",{parentName:"p",href:"#get-started-with-bundles"},"native binaries (recommended)")," or by using the ",(0,i.kt)("a",{parentName:"p",href:"#get-started-with-docker"},"docker image"),"."),(0,i.kt)("h2",{id:"get-started-with-bundles"},"Get started with bundles"),(0,i.kt)("h3",{id:"step-1-download-a-bundle"},"Step 1: Download a bundle"),(0,i.kt)("p",null,"Head over to this ",(0,i.kt)("a",{parentName:"p",href:"https://dl.skytable.io/security/v0.6.4"},"page")," and download a version for your platform."),(0,i.kt)("h3",{id:"step-2-make-the-files-runnable"},"Step 2: Make the files runnable"),(0,i.kt)("p",null,"Unzip the ",(0,i.kt)("inlineCode",{parentName:"p"},"zip")," file that you just downloaded. If you're on a ","*","nix system, run ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x skyd skysh")," to make the files executable. If you're on Windows, right-click the files and then check the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNBLOCK")," checkbox and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"APPLY")," button."),(0,i.kt)("h3",{id:"step-3-start-the-database-server"},"Step 3: Start the database server"),(0,i.kt)("p",null,"In the directory where you extracted the files, run ",(0,i.kt)("inlineCode",{parentName:"p"},"./skyd")," on ","*","nix systems or simply ",(0,i.kt)("inlineCode",{parentName:"p"},"skyd")," on Windows systems. That's all there is to starting the database server!"),(0,i.kt)("h3",{id:"step-4-run-the-shell-skysh"},"Step 4: Run the shell ",(0,i.kt)("inlineCode",{parentName:"h3"},"skysh")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"skysh")," is the shell that is shipped with the bundle. Run it, just like you did with the database server. Now enter commands in the shell, and have fun! First run ",(0,i.kt)("inlineCode",{parentName:"p"},"HEYA")," to check if everything is fine - the server should reply with ",(0,i.kt)("em",{parentName:"p"},"HEY!"),".\nSee all the available actions ",(0,i.kt)("a",{parentName:"p",href:"actions-overview"},"here"),"."),(0,i.kt)("p",null,"You're done with setting up ",(0,i.kt)("inlineCode",{parentName:"p"},"skyd")," \ud83c\udf89!"),(0,i.kt)("h2",{id:"get-started-with-docker"},"Get started with Docker"),(0,i.kt)("p",null,"A docker image is not yet available for this release."))}c.isMDXComponent=!0}}]);