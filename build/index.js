(()=>{"use strict";var e={20:(e,t,r)=>{var a=r(609),n=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,c={},i=null,u=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!s.hasOwnProperty(a)&&(c[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===c[a]&&(c[a]=t[a]);return{$$typeof:n,type:e,key:i,ref:u,props:c,_owner:o.current}}t.jsx=c,t.jsxs=c},848:(e,t,r)=>{e.exports=r(20)},609:e=>{e.exports=window.React}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,r),l.exports}const a=window.wp.blocks;var n=r(609);const l=window.wp.blockEditor;function o({type:e,name:t,placeholder:r,required:a}){let l;return l="textarea"===e?(0,n.createElement)("textarea",{name:t,id:t,className:"wa-input",placeholder:r,required:a}):(0,n.createElement)("input",{type:e,name:t,id:t,className:"wa-input",placeholder:r,required:a}),l}function s({htmlFor:e,children:t,className:r=""}){const a="wa-label"+(r?" "+r:"");return(0,n.createElement)("label",{htmlFor:e,className:a},t)}function c({children:e,type:t}){let r;return r="cols-2"===t?(0,n.createElement)("div",{className:"wa-grid-cols-2"},e):(0,n.createElement)("div",{className:"wa-default-container"},e),r}function i({children:e}){return(0,n.createElement)("section",{className:"wa-section-container"},e)}function u({children:e}){return(0,n.createElement)("form",{className:"wa-form-container"},e)}function m({type:e,children:t}){return(0,n.createElement)("button",{type:e,className:"wa-button"},t)}function d({children:e,title:t}){return(0,n.createElement)("header",{className:"wa-header-container"},(0,n.createElement)("h3",{className:"wa-header-title"},t),(0,n.createElement)("p",{className:"wa-header-description"},e))}const p=window.wp.element;function h({fields:e,inputLanguage:t,inputFramework:r,label:a,labelLanguage:l,labelFramework:o,required:c}){const[i,u]=(0,p.useState)(!1),[m,d]=(0,p.useState)([]),[h,f]=(0,p.useState)(!1),w="wa-select wa-select-margin"+(i!==l&&i?"":" wp-select-no-option"),g="wa-select"+(h!==o&&h?"":" wp-select-no-option");return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("select",{name:t,id:t,className:w,required:c,onChange:function(t){const r=t.target.value;u(r);let a=[];e.forEach((e=>e.language!==r||(a=e.frameworks,!1))),d(a)}},(0,n.createElement)("option",{key:l,value:l},l),e.map((e=>(0,n.createElement)("option",{key:e.language,value:e.language},e.language)))),m.length>0&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("select",{name:r,id:r,className:g,required:c,onChange:function(e){const t=e.target.value;f(t)}},(0,n.createElement)("option",{key:o,value:o},o),m.map((e=>(0,n.createElement)("option",{key:e,value:e},e))))),(0,n.createElement)(s,{htmlFor:t,className:i?"wa-label-selected":""},a))}var f=r(848);const w=[{language:"PHP",frameworks:["Laravel","Symfony"]},{language:"Java",frameworks:["Struts","Grails"]},{language:"JavaScript",frameworks:["React","Angular","Node"]},{language:" C#",frameworks:["ASP.NET","Blazor"]}];function g(){return(0,f.jsxs)(i,{children:[(0,f.jsx)(d,{title:"Interview Development Position",children:"Fill all the form and click on submit button to send the form and start to enter in a job assessment"}),(0,f.jsxs)(u,{children:[(0,f.jsxs)(c,{type:"cols-2",children:[(0,f.jsxs)(c,{children:[(0,f.jsx)(o,{type:"text",name:"first_name",placeholder:" ",required:!0}),(0,f.jsx)(s,{htmlFor:"first_name",children:"First Name"})]}),(0,f.jsxs)(c,{children:[(0,f.jsx)(o,{type:"text",name:"last_name",placeholder:" ",required:!0}),(0,f.jsx)(s,{htmlFor:"last_name",children:"Last Name"})]})]}),(0,f.jsxs)(c,{type:"cols-2",children:[(0,f.jsxs)(c,{children:[(0,f.jsx)(o,{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",name:"phone",placeholder:" ",required:!0}),(0,f.jsx)(s,{htmlFor:"phone",children:"Phone Number"})]}),(0,f.jsxs)(c,{children:[(0,f.jsx)(o,{type:"date",name:"birthdate",value:"",placeholder:null,required:!0}),(0,f.jsx)(s,{htmlFor:"birthdate",children:"Birthdate"})]})]}),(0,f.jsxs)(c,{children:[(0,f.jsx)(o,{type:"email",name:"email",placeholder:" ",required:!0}),(0,f.jsx)(s,{htmlFor:"email",children:"Email Address"})]}),(0,f.jsxs)(c,{children:[(0,f.jsx)(o,{type:"text",name:"country",placeholder:" ",required:!0}),(0,f.jsx)(s,{htmlFor:"country",children:"Country"})]}),(0,f.jsxs)(c,{children:[(0,f.jsx)(o,{type:"textarea",name:"bioOrResume",placeholder:" ",required:!0}),(0,f.jsx)(s,{htmlFor:"country",children:"Short Bio or Resume"})]}),(0,f.jsx)(c,{children:(0,f.jsx)(h,{fields:w,inputLanguage:"language",inputFramework:"framework",label:"Language & Framework",labelLanguage:"Select Language...",labelFramework:"Select Framework...",required:!0})}),(0,f.jsx)(m,{type:"submit",children:"Submit"})]})]})}const x=JSON.parse('{"UU":"assessment/otavio-serra-plugin"}');(0,a.registerBlockType)(x.UU,{edit:function(){return(0,n.createElement)("p",{...(0,l.useBlockProps)()},(0,n.createElement)(g,null))},save:function(){const e=`wa-otavio-serra-component-root-${Date.now()}-${Math.floor(1e6*Math.random())}`;return(0,n.createElement)("div",{...l.useBlockProps.save(),className:"wa-otavio-serra-block"},(0,n.createElement)("div",{id:e}))}}),"undefined"==typeof waOtavioSerraPlugin||waOtavioSerraPlugin.isAdmin||wp.element.useEffect((()=>{const e=document.createElement("script");return e.src=`${waOtavioSerraPlugin.pluginUrl}/build/public-block.js`,e.type="text/javascript",document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[])})();