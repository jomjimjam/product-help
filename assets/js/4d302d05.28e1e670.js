"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[203],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={title:"Updating",hide_title:!0,sidebar_position:1},s="Updating Your Cado Response Instance",c={unversionedId:"cado-response/guides/updating",id:"cado-response/guides/updating",title:"Updating",description:"You can view version information and trigger updates by clicking Updates from the Settings menu.",source:"@site/docs/cado-response/guides/updating.md",sourceDirName:"cado-response/guides",slug:"/cado-response/guides/updating",permalink:"/docs/cado-response/guides/updating",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/guides/updating.md",tags:[],version:"current",lastUpdatedAt:1647514549,formattedLastUpdatedAt:"3/17/2022",sidebarPosition:1,frontMatter:{title:"Updating",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Applying a License",permalink:"/docs/cado-response/guides/licenses"},next:{title:"Summary",permalink:"/docs/cado-host/intro"}},p={},d=[],l={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"updating-your-cado-response-instance"},"Updating Your Cado Response Instance"),(0,a.kt)("p",null,"You can view version information and trigger updates by clicking ",(0,a.kt)("strong",{parentName:"p"},"Updates")," from the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," menu."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For AWS, the default update mechanism requires the ability for the Cado Response instance to connect outbound to a URL hosted at cado-public.s3.amazonaws.com and then deploy a public AMI in the same region in which Cado Response is deployed."),(0,a.kt)("li",{parentName:"ul"},"For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. ")),(0,a.kt)("p",null,"Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.  In all cases, upgrades to Cado Response are user-initiated and will not be initiated automatically by Cado."),(0,a.kt)("p",null,"If you have deployed with Terraform, update the AMI ID (AWS) or VHD URL (Azure) and run ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply"),"."))}f.isMDXComponent=!0}}]);