"use strict";(self.webpackChunkpixelone=self.webpackChunkpixelone||[]).push([[974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i=void 0,l={unversionedId:"Classes/Boundary",id:"Classes/Boundary",title:"Boundary",description:"Methods",source:"@site/docs-api/Classes/Boundary.md",sourceDirName:"Classes",slug:"/Classes/Boundary",permalink:"/pixel-game-maker/docs-api/Classes/Boundary",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Crystal",permalink:"/pixel-game-maker/docs-api/Classes/Crystal"},next:{title:"Enemy",permalink:"/pixel-game-maker/docs-api/Classes/Enemy"}},s={},p=[{value:"<code>Methods</code>",id:"methods",level:2},{value:"collision()",id:"collision",level:3},{value:"cleanup()",id:"cleanup",level:3},{value:"proximity()",id:"proximity",level:3},{value:"inside()",id:"inside",level:3},{value:"draw()",id:"draw",level:3},{value:"<code>Properties</code>",id:"properties",level:2},{value:"zone",id:"zone",level:3},{value:"position",id:"position",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"methods"},(0,a.kt)("inlineCode",{parentName:"h2"},"Methods")),(0,a.kt)("h3",{id:"collision"},"collision()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:collision(sprite: sprite, x: int, y: int) -> boolean\n")),(0,a.kt)("p",null,"Returns true if the sprite collides with the boundary instance"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cleanup"},"cleanup()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:cleanup() -> none\n")),(0,a.kt)("p",null,"Removes all references of the instance"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"proximity"},"proximity()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:proximity(p1: array, amnt: int) -> boolean\n")),(0,a.kt)("p",null,"Returns true if p1 is within amnt of the instance"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inside"},"inside()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:inside(sprite: sprite) -> boolean\n")),(0,a.kt)("p",null,"Returns true if the sprite is within the instance"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"draw"},"draw()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:draw() -> none\n")),(0,a.kt)("p",null,"Draws the instance on the canvas"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"properties"},(0,a.kt)("inlineCode",{parentName:"h2"},"Properties")),(0,a.kt)("h3",{id:"zone"},"zone"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Type: zone\nDef:  A zone instance\n")),(0,a.kt)("h3",{id:"position"},"position"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Type: table\nDef:  Position of the sprite on the canvas\n")))}u.isMDXComponent=!0}}]);