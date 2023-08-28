import{B as k,C as _,F as $,r as x,b as S,G as B,i as b,p as C,a as u,o as N,l as F,d as v,h as a,T as I,t as z}from"./index.cf1e5396.js";import{c as T,b as M,i as g}from"./use-config.f834df0a.js";import{B as A,E as h,F as P,g as d,h as j,a as V,d as s}from"./light.e530bc26.js";function E(e,...t){if(Array.isArray(e))e.forEach(r=>E(r,...t));else return e(...t)}function f(e){return e.some(t=>k(t)?!(t.type===_||t.type===$&&!f(t.children)):!0)?e:null}function H(e,t){return e&&f(e())||t()}function J(e,t,r){return e&&f(e(t))||r(t)}function Q(e,t){const r=e&&f(e());return t(r||null)}function Z(e){return!(e&&f(e()))}function K(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,r=>r.toUpperCase()))}K("abc","def");function R(){const e=x(!1);return S(()=>{e.value=!0}),B(e)}const p=T("n-form-item");function ee(e,{defaultSize:t="medium",mergedSize:r,mergedDisabled:i}={}){const o=b(p,null);C(p,null);const n=u(r?()=>r(o):()=>{const{size:l}=e;if(l)return l;if(o){const{mergedSize:m}=o;if(m.value!==void 0)return m.value}return t}),c=u(i?()=>i(o):()=>{const{disabled:l}=e;return l!==void 0?l:o?o.disabled.value:!1}),y=u(()=>{const{status:l}=e;return l||(o==null?void 0:o.mergedValidationStatus.value)});return N(()=>{o&&o.restoreValidation()}),{mergedSizeRef:n,mergedDisabledRef:c,mergedStatusRef:y,nTriggerFormBlur(){o&&o.handleContentBlur()},nTriggerFormChange(){o&&o.handleContentChange()},nTriggerFormFocus(){o&&o.handleContentFocus()},nTriggerFormInput(){o&&o.handleContentInput()}}}function W(e,t,r){if(!t)return;const i=A(),o=b(M,null),n=()=>{const c=r==null?void 0:r.value;t.mount({id:c===void 0?e:c+e,head:!0,anchorMetaName:h,props:{bPrefix:c?`.${c}-`:void 0},ssr:i}),o!=null&&o.preflightStyleDisabled||P.mount({id:"n-global",head:!0,anchorMetaName:h,ssr:i})};i?n():F(n)}const L=v({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const r=R();return()=>a(I,{name:"icon-switch-transition",appear:r.value},t)}}),{cubicBezierEaseInOut:O}=j;function w({originalTransform:e="",left:t=0,top:r=0,transition:i=`all .3s ${O} !important`}={}){return[d("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:r,opacity:0}),d("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:r,opacity:1}),d("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:r,transition:i})]}const U=d([d("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),d("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),d("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),d("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),V("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[s("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[w()]),s("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[s("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),s("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[s("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),s("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),s("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),s("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[w({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),X={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},te=v({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},X),setup(e){W("-base-loading",U,z(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:r,stroke:i,scale:o}=this,n=t/o;return a("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},a(L,null,{default:()=>this.show?a("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},a("div",{class:`${e}-base-loading__container`},a("div",{class:`${e}-base-loading__container-layer`},a("div",{class:`${e}-base-loading__container-layer-left`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:n,cy:n,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),a("div",{class:`${e}-base-loading__container-layer-patch`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:n,cy:n,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),a("div",{class:`${e}-base-loading__container-layer-right`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:n,cy:n,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):a("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),Y=g&&"chrome"in window;g&&navigator.userAgent.includes("Firefox");const re=g&&navigator.userAgent.includes("Safari")&&!Y;export{L as N,ee as a,K as b,E as c,H as d,w as e,p as f,re as g,Z as h,R as i,te as j,J as k,Q as r,W as u};
