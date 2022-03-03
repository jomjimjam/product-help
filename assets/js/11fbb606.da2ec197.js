"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[357],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4809:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Overview",hide_title:!0,sidebar_position:1},c="Overview",l={unversionedId:"cado-response/integrations/api-overview",id:"cado-response/integrations/api-overview",title:"Overview",description:"The Cado API enables third party tools and automation scripts to integrate with the Cado Response platform.",source:"@site/docs/cado-response/integrations/api-overview.md",sourceDirName:"cado-response/integrations",slug:"/cado-response/integrations/api-overview",permalink:"/docs/cado-response/integrations/api-overview",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/integrations/api-overview.md",tags:[],version:"current",lastUpdatedAt:1632844909,formattedLastUpdatedAt:"9/28/2021",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"General Settings",permalink:"/docs/cado-response/settings/general-settings"},next:{title:"AWS Lambda",permalink:"/docs/cado-response/integrations/aws-lambda"}},p=[{value:"Creating and Storing an API Access Key",id:"creating-and-storing-an-api-access-key",children:[],level:3},{value:"Platform Base URL",id:"platform-base-url",children:[],level:3}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Cado API enables third party tools and automation scripts to integrate with the Cado Response platform."),(0,a.kt)("p",null,"You can use the API and the pre-made out-of-the-box integrations to trigger operations in the platform (e.g. acquire instances from your cloud environments), retrieve data that our system captured (e.g. suspicious events), manage and control investigation projects, and more."),(0,a.kt)("p",null,"This section provides a quick onboarding flow that is required for every integration followed in this section."),(0,a.kt)("h3",{id:"creating-and-storing-an-api-access-key"},"Creating and Storing an API Access Key"),(0,a.kt)("p",null,"Before diving into any of the integrations we have with the Cado Response platform - we first need to understand the correct way to authenticate and access the Cado API."),(0,a.kt)("p",null,"To be able to access the different resources of the API, any request must be provided with a valid API Key generated by our authentication server."),(0,a.kt)("p",null,"To generate that key you can do the following inside Cado Repsonse:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Settings")," in the bottom left and click the ",(0,a.kt)("strong",{parentName:"li"},"API")," tab."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Access Tokens")," click the ",(0,a.kt)("strong",{parentName:"li"},"Create New Key")," button."),(0,a.kt)("li",{parentName:"ol"},"Take note of the ",(0,a.kt)("strong",{parentName:"li"},"Public Key"),", this is the identifer that we can use for revoking the key later on if needed."),(0,a.kt)("li",{parentName:"ol"},"Take note of the ",(0,a.kt)("strong",{parentName:"li"},"Secret Key"),", you'll need to save this somewhere private (like a password manager), as you won't be able to see it again after you close the dialog. This is the key we need to provide to the third-party integration providers.")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The API Secret Key will only be shown once, so it is recommended to save it to a secure place, like password manager."))),(0,a.kt)("h3",{id:"platform-base-url"},"Platform Base URL"),(0,a.kt)("p",null,'Often you\'ll see in the following tutorials that we are referring to "Platform Base URL" - which is the IP or Domain of where the platform was deployed, for example:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://ec2example.compute.amazonaws.com\n")))}u.isMDXComponent=!0}}]);