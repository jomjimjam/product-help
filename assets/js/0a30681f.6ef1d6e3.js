"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[903],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3101:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={title:"File Types",hide_title:!0,sidebar_position:2},s="File Types",p={unversionedId:"cado-response/importing-data/filetypes",id:"cado-response/importing-data/filetypes",isDocsHomePage:!1,title:"File Types",description:"Cado Response supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform.",source:"@site/docs/cado-response/importing-data/filetypes.md",sourceDirName:"cado-response/importing-data",slug:"/cado-response/importing-data/filetypes",permalink:"/docs/cado-response/importing-data/filetypes",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/importing-data/filetypes.md",version:"current",lastUpdatedAt:1629831719,formattedLastUpdatedAt:"8/24/2021",sidebarPosition:2,frontMatter:{title:"File Types",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Importing Data",permalink:"/docs/cado-response/importing-data/importing-data"},next:{title:"Memory Forensics",permalink:"/docs/cado-response/importing-data/memory"}},u=[{value:"AWS Capture Formats",id:"aws-capture-formats",children:[]},{value:"Azure Capture Formats",id:"azure-capture-formats",children:[]},{value:"Storage Formats",id:"storage-formats",children:[]}],m={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-types"},"File Types"),(0,i.kt)("p",null,"Cado Response supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform."),(0,i.kt)("h3",{id:"aws-capture-formats"},"AWS Capture Formats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EC2"),(0,i.kt)("li",{parentName:"ul"},"S3 Storage (normal and glacier)"),(0,i.kt)("li",{parentName:"ul"},"AWS Kubernetes"),(0,i.kt)("li",{parentName:"ul"},"Kubernetes logs"),(0,i.kt)("li",{parentName:"ul"},"Cloud Trail logs"),(0,i.kt)("li",{parentName:"ul"},"Guard Duty logs"),(0,i.kt)("li",{parentName:"ul"},"VPC Flow logs"),(0,i.kt)("li",{parentName:"ul"},"SSM logs"),(0,i.kt)("li",{parentName:"ul"},"AWS Memory Capture")),(0,i.kt)("h3",{id:"azure-capture-formats"},"Azure Capture Formats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Virtual Machines "),(0,i.kt)("li",{parentName:"ul"},"Disks"),(0,i.kt)("li",{parentName:"ul"},"Storage Containers"),(0,i.kt)("li",{parentName:"ul"},"Container Blobs"),(0,i.kt)("li",{parentName:"ul"},"Kubernetes Disks")),(0,i.kt)("h3",{id:"storage-formats"},"Storage Formats"),(0,i.kt)("p",null,"In addition to native capture support for machines and data running/stored in the cloud, Cado Response also supports processing of the following local evidence formats.  "),(0,i.kt)("h4",{id:"storage-media"},"Storage Media"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"E01, and split E01"),(0,i.kt)("li",{parentName:"ul"},"VHD and VHDX"),(0,i.kt)("li",{parentName:"ul"},"VMDK"),(0,i.kt)("li",{parentName:"ul"},"DD (Optionally .GZ Compressed)"),(0,i.kt)("li",{parentName:"ul"},"GZ / Tar / Zip"),(0,i.kt)("li",{parentName:"ul"},"Other forensic triage artifacts collected by EDR Tools or Cado Host")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently, split E01 format disks are supported in AWS only."))),(0,i.kt)("p",null,"To import a compressed dd image, compress with Gzip and add .gz to the extension. (example: ",(0,i.kt)("inlineCode",{parentName:"p"},"disk.dd.gz"),")"),(0,i.kt)("p",null,"If you import a zip, it will be treated as a container of files. For example, if you compress a disk image with zip, it will not be processed as a disk image."),(0,i.kt)("h4",{id:"volume-systems"},"Volume Systems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GPT"),(0,i.kt)("li",{parentName:"ul"},"LVM"),(0,i.kt)("li",{parentName:"ul"},"MBR"),(0,i.kt)("li",{parentName:"ul"},"Volume Shadow Snapshots (VSS)")),(0,i.kt)("h4",{id:"file-systems"},"File Systems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ext version 2, 3, 4"),(0,i.kt)("li",{parentName:"ul"},"FAT"),(0,i.kt)("li",{parentName:"ul"},"NTFS version 3"),(0,i.kt)("li",{parentName:"ul"},"XFS version 4, 5"),(0,i.kt)("li",{parentName:"ul"},"Apple File System (APFS) ")),(0,i.kt)("h4",{id:"log-file-formats"},"Log File Formats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AppleSystemLog (ASL)"),(0,i.kt)("li",{parentName:"ul"},"Androidusage-history (appusage)"),(0,i.kt)("li",{parentName:"ul"},"BasicSecurityModule (BSM)"),(0,i.kt)("li",{parentName:"ul"},"Bencodefiles"),(0,i.kt)("li",{parentName:"ul"},"Chrome Disk Cache Format"),(0,i.kt)("li",{parentName:"ul"},"Chrome preferences"),(0,i.kt)("li",{parentName:"ul"},"CUPS IPP"),(0,i.kt)("li",{parentName:"ul"},"ExtensibleStorageEngine (ESE) DatabaseFile (EDB)"),(0,i.kt)("li",{parentName:"ul"},"Firefox Cache"),(0,i.kt)("li",{parentName:"ul"},"JavaWeb Start IDX"),(0,i.kt)("li",{parentName:"ul"},"JumpLists.customDestinations-msfiles"),(0,i.kt)("li",{parentName:"ul"},"MacOS Application firewall"),(0,i.kt)("li",{parentName:"ul"},"MacOS Keychain"),(0,i.kt)("li",{parentName:"ul"},"MacOS Securityd"),(0,i.kt)("li",{parentName:"ul"},"MacOS Wifi"),(0,i.kt)("li",{parentName:"ul"},"mactimelogs"),(0,i.kt)("li",{parentName:"ul"},"McAfee Anti-Virus Logs"),(0,i.kt)("li",{parentName:"ul"},"Microsoft InternetExplorer History File Format (also known as MSIE4-9 Cache Files or index.dat)"),(0,i.kt)("li",{parentName:"ul"},"Microsoft IIS log files"),(0,i.kt)("li",{parentName:"ul"},"NTFS $MFT and $UsnJrnl:$J"),(0,i.kt)("li",{parentName:"ul"},"OLE Compound File"),(0,i.kt)("li",{parentName:"ul"},"Opera Browser history"),(0,i.kt)("li",{parentName:"ul"},"OpenXML"),(0,i.kt)("li",{parentName:"ul"},"Pcap files"),(0,i.kt)("li",{parentName:"ul"},"Portable Executable (PE) "),(0,i.kt)("li",{parentName:"ul"},"PLSQL cache file (PL-SQL developer recall files)"),(0,i.kt)("li",{parentName:"ul"},"Popularity Contest log"),(0,i.kt)("li",{parentName:"ul"},"Propertylist (plist)"),(0,i.kt)("li",{parentName:"ul"},"RestorePointlogs (rp.log)"),(0,i.kt)("li",{parentName:"ul"},"Safari Binary Cookies"),(0,i.kt)("li",{parentName:"ul"},"SCCM client logs"),(0,i.kt)("li",{parentName:"ul"},"SELinux audit logs"),(0,i.kt)("li",{parentName:"ul"},"SkyDrive log and error log files"),(0,i.kt)("li",{parentName:"ul"},"SQLite database format using SQLite"),(0,i.kt)("li",{parentName:"ul"},"Symantec AV Corporate Edition and Endpoint Protection log"),(0,i.kt)("li",{parentName:"ul"},"Syslog"),(0,i.kt)("li",{parentName:"ul"},"utmp,utmpx"),(0,i.kt)("li",{parentName:"ul"},"Windows EventLog (EVT)"),(0,i.kt)("li",{parentName:"ul"},"Windows Firewall"),(0,i.kt)("li",{parentName:"ul"},'Windows Job files (also known as "atjobs")'),(0,i.kt)("li",{parentName:"ul"},"Windows Prefetch files"),(0,i.kt)("li",{parentName:"ul"},"Windows Recyclebin (INFO2and$I/$R)"),(0,i.kt)("li",{parentName:"ul"},"Windows NTRegistry File"),(0,i.kt)("li",{parentName:"ul"},"Windows ShortcutFile (LNK)"),(0,i.kt)("li",{parentName:"ul"},"WindowsXML EventLog (EVTX)"),(0,i.kt)("li",{parentName:"ul"},"Xchat and Xchat scroll back files"),(0,i.kt)("li",{parentName:"ul"},"Zsh history files")),(0,i.kt)("p",null,"Cado Response can also import a number of other disk image and file formats that are not listed here; however, these evidence types and file formats are not officially supported.  If you have a filetype that you would like to see supported, please reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," and let us know."))}c.isMDXComponent=!0}}]);