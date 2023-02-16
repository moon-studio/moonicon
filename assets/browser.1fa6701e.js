import{y as $,C as S,F as _,r as B,e as C,B as N,i as v,p as F,b as g,o as z,l as y,n as A,d as k,h as i,T as I,t as M}from"./index.1da92221.js";import{c as P,b as R,i as h}from"./use-config.08f472c1.js";import{D as T,A as x,E as m,F as E,g as c,s as j,a as V,d}from"./light.b42ca278.js";function K(e,...t){if(Array.isArray(e))e.forEach(r=>K(r,...t));else return e(...t)}function u(e){return e.some(t=>$(t)?!(t.type===S||t.type===_&&!u(t.children)):!0)?e:null}function Z(e,t){return e&&u(e())||t()}function ee(e,t,r){return e&&u(e(t))||r(t)}function te(e,t){const r=e&&u(e());return t(r||null)}function re(e){return!(e&&u(e()))}function W(e,t){if(e===void 0)return!1;if(t){const{context:{ids:r}}=t;return r.has(e)}return T(e)!==null}function L(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,r=>r.toUpperCase()))}L("abc","def");function O(){const e=B(!1);return C(()=>{e.value=!0}),N(e)}const w=P("n-form-item");function ne(e,{defaultSize:t="medium",mergedSize:r,mergedDisabled:a}={}){const n=v(w,null);F(w,null);const o=g(r?()=>r(n):()=>{const{size:l}=e;if(l)return l;if(n){const{mergedSize:p}=n;if(p.value!==void 0)return p.value}return t}),s=g(a?()=>a(n):()=>{const{disabled:l}=e;return l!==void 0?l:n?n.disabled.value:!1}),f=g(()=>{const{status:l}=e;return l||(n==null?void 0:n.mergedValidationStatus.value)});return z(()=>{n&&n.restoreValidation()}),{mergedSizeRef:o,mergedDisabledRef:s,mergedStatusRef:f,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}function q(e,t,r){if(!t)return;const a=x(),n=v(R,null),o=()=>{const s=r==null?void 0:r.value;t.mount({id:s===void 0?e:s+e,head:!0,anchorMetaName:m,props:{bPrefix:s?`.${s}-`:void 0},ssr:a}),n!=null&&n.preflightStyleDisabled||E.mount({id:"n-global",head:!0,anchorMetaName:m,ssr:a})};a?o():y(o)}function oe(e,t,r){if(!t)return;const a=x(),n=g(()=>{const{value:s}=t;if(!s)return;const f=s[e];if(!!f)return f}),o=()=>{A(()=>{const{value:s}=r,f=`${s}${e}Rtl`;if(W(f,a))return;const{value:l}=n;!l||l.style.mount({id:f,head:!0,anchorMetaName:m,props:{bPrefix:s?`.${s}-`:void 0},ssr:a})})};return a?o():y(o),n}const D=k({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const r=O();return()=>i(I,{name:"icon-switch-transition",appear:r.value},t)}}),{cubicBezierEaseInOut:U}=j;function b({originalTransform:e="",left:t=0,top:r=0,transition:a=`all .3s ${U} !important`}={}){return[c("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:r,opacity:0}),c("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:r,opacity:1}),c("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:r,transition:a})]}const X=c([c("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),c("@keyframes loading-layer-rotate",`
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
 `),c("@keyframes loading-left-spin",`
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
 `),c("@keyframes loading-right-spin",`
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
 `,[d("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[b()]),d("container",`
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
 `,[d("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),d("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[d("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),d("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),d("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),d("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[b({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Y={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},ae=k({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Y),setup(e){q("-base-loading",X,M(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:r,stroke:a,scale:n}=this,o=t/n;return i("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},i(D,null,{default:()=>this.show?i("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},i("div",{class:`${e}-base-loading__container`},i("div",{class:`${e}-base-loading__container-layer`},i("div",{class:`${e}-base-loading__container-layer-left`},i("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},i("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:o,cy:o,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),i("div",{class:`${e}-base-loading__container-layer-patch`},i("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},i("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:o,cy:o,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),i("div",{class:`${e}-base-loading__container-layer-right`},i("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},i("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:o,cy:o,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):i("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),G=h&&"chrome"in window;h&&navigator.userAgent.includes("Firefox");const ie=h&&navigator.userAgent.includes("Safari")&&!G;export{D as N,ne as a,L as b,K as c,Z as d,b as e,w as f,ie as g,oe as h,O as i,re as j,ae as k,ee as l,te as r,q as u};
