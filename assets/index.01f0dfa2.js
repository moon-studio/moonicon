import{u as be}from"./index.bc5a57f9.js";import{h,d as N,r as j,b as D,p as ue,t as B,i as he,u as fe,c as U,y as ke}from"./index.e4b26c89.js";import{N as ve}from"./Input.8d71e3b0.js";import{c as me,u as O,a as xe}from"./use-config.a4b8ba17.js";import{a as K,c as d,e as ge,h as pe,N as Ce,b as H}from"./browser.d9498744.js";import{u as L,c as ye,o as Se}from"./Scrollbar.44a51d5d.js";import{c as ze,z as Re,g as x,a,d as z,e as F,v as we,x as Te,u as V,f as De}from"./light.9879cd7d.js";import"./VResizeObserver.0502ba5f.js";import"./index.86079299.js";const $e={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},Me=e=>{const{baseColor:t,inputColorDisabled:l,cardColor:S,modalColor:R,popoverColor:s,textColorDisabled:k,borderColor:i,primaryColor:n,textColor2:c,fontSizeSmall:w,fontSizeMedium:f,fontSizeLarge:r,borderRadiusSmall:v,lineHeight:m}=e;return Object.assign(Object.assign({},$e),{labelLineHeight:m,fontSizeSmall:w,fontSizeMedium:f,fontSizeLarge:r,borderRadius:v,color:t,colorChecked:n,colorDisabled:l,colorDisabledChecked:l,colorTableHeader:S,colorTableHeaderModal:R,colorTableHeaderPopover:s,checkMarkColor:t,checkMarkColorDisabled:k,checkMarkColorDisabledChecked:k,border:`1px solid ${i}`,borderDisabled:`1px solid ${i}`,borderDisabledChecked:`1px solid ${i}`,borderChecked:`1px solid ${n}`,borderFocus:`1px solid ${n}`,boxShadowFocus:`0 0 0 2px ${Re(n,{alpha:.3})}`,textColor:c,textColorDisabled:k})},Ie={name:"Checkbox",common:ze,self:Me},Fe=Ie,_e=h("svg",{viewBox:"0 0 64 64",class:"check-icon"},h("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Ae=h("svg",{viewBox:"0 0 100 100",class:"line-icon"},h("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),E=me("n-checkbox-group"),Pe={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]};N({name:"CheckboxGroup",props:Pe,setup(e){const{mergedClsPrefixRef:t}=O(e),l=K(e),{mergedSizeRef:S,mergedDisabledRef:R}=l,s=j(e.defaultValue),k=D(()=>e.value),i=L(k,s),n=D(()=>{var f;return((f=i.value)===null||f===void 0?void 0:f.length)||0}),c=D(()=>Array.isArray(i.value)?new Set(i.value):new Set);function w(f,r){const{nTriggerFormInput:v,nTriggerFormChange:m}=l,{onChange:g,"onUpdate:value":p,onUpdateValue:C}=e;if(Array.isArray(i.value)){const b=Array.from(i.value),_=b.findIndex(A=>A===r);f?~_||(b.push(r),C&&d(C,b,{actionType:"check",value:r}),p&&d(p,b,{actionType:"check",value:r}),v(),m(),s.value=b,g&&d(g,b)):~_&&(b.splice(_,1),C&&d(C,b,{actionType:"uncheck",value:r}),p&&d(p,b,{actionType:"uncheck",value:r}),g&&d(g,b),s.value=b,v(),m())}else f?(C&&d(C,[r],{actionType:"check",value:r}),p&&d(p,[r],{actionType:"check",value:r}),g&&d(g,[r]),s.value=[r],v(),m()):(C&&d(C,[],{actionType:"uncheck",value:r}),p&&d(p,[],{actionType:"uncheck",value:r}),g&&d(g,[]),s.value=[],v(),m())}return ue(E,{checkedCountRef:n,maxRef:B(e,"max"),minRef:B(e,"min"),valueSetRef:c,disabledRef:R,mergedSizeRef:S,toggleCheckbox:w}),{mergedClsPrefix:t}},render(){return h("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}});const Ue=x([a("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[x("&:hover",[a("checkbox-box",[z("border",{border:"var(--n-border-checked)"})])]),x("&:focus:not(:active)",[a("checkbox-box",[z("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),F("inside-table",[a("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),F("checked",[a("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[a("checkbox-icon",[x(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),F("indeterminate",[a("checkbox-box",[a("checkbox-icon",[x(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),x(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),F("checked, indeterminate",[x("&:focus:not(:active)",[a("checkbox-box",[z("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),a("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[z("border",{border:"var(--n-border-checked)"})])]),F("disabled",{cursor:"not-allowed"},[F("checked",[a("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[z("border",{border:"var(--n-border-disabled-checked)"}),a("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),a("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[z("border",{border:"var(--n-border-disabled)"}),a("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),z("label",{color:"var(--n-text-color-disabled)"})]),a("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),a("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[z("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),a("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[x(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ge({left:"1px",top:"1px"})])]),z("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[x("&:empty",{display:"none"})])]),we(a("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Te(a("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),je=Object.assign(Object.assign({},V.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Be=N({name:"Checkbox",props:je,setup(e){const t=j(null),{mergedClsPrefixRef:l,inlineThemeDisabled:S,mergedRtlRef:R}=O(e),s=K(e,{mergedSize(o){const{size:y}=e;if(y!==void 0)return y;if(n){const{value:u}=n.mergedSizeRef;if(u!==void 0)return u}if(o){const{mergedSize:u}=o;if(u!==void 0)return u.value}return"medium"},mergedDisabled(o){const{disabled:y}=e;if(y!==void 0)return y;if(n){if(n.disabledRef.value)return!0;const{maxRef:{value:u},checkedCountRef:T}=n;if(u!==void 0&&T.value>=u&&!r.value)return!0;const{minRef:{value:M}}=n;if(M!==void 0&&T.value<=M&&r.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:k,mergedSizeRef:i}=s,n=he(E,null),c=j(e.defaultChecked),w=B(e,"checked"),f=L(w,c),r=xe(()=>{if(n){const o=n.valueSetRef.value;return o&&e.value!==void 0?o.has(e.value):!1}else return f.value===e.checkedValue}),v=V("Checkbox","-checkbox",Ue,Fe,e,l);function m(o){if(n&&e.value!==void 0)n.toggleCheckbox(!r.value,e.value);else{const{onChange:y,"onUpdate:checked":u,onUpdateChecked:T}=e,{nTriggerFormInput:M,nTriggerFormChange:P}=s,I=r.value?e.uncheckedValue:e.checkedValue;u&&d(u,I,o),T&&d(T,I,o),y&&d(y,I,o),M(),P(),c.value=I}}function g(o){k.value||m(o)}function p(o){if(!k.value)switch(o.key){case" ":case"Enter":m(o)}}function C(o){switch(o.key){case" ":o.preventDefault()}}const b={focus:()=>{var o;(o=t.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=t.value)===null||o===void 0||o.blur()}},_=pe("Checkbox",R,l),A=D(()=>{const{value:o}=i,{common:{cubicBezierEaseInOut:y},self:{borderRadius:u,color:T,colorChecked:M,colorDisabled:P,colorTableHeader:I,colorTableHeaderModal:G,colorTableHeaderPopover:W,checkMarkColor:Y,checkMarkColorDisabled:q,border:J,borderFocus:Q,borderDisabled:X,borderChecked:Z,boxShadowFocus:ee,textColor:oe,textColorDisabled:re,checkMarkColorDisabledChecked:ne,colorDisabledChecked:ce,borderDisabledChecked:ae,labelPadding:le,labelLineHeight:te,labelFontWeight:ie,[H("fontSize",o)]:de,[H("size",o)]:se}}=v.value;return{"--n-label-line-height":te,"--n-label-font-weight":ie,"--n-size":se,"--n-bezier":y,"--n-border-radius":u,"--n-border":J,"--n-border-checked":Z,"--n-border-focus":Q,"--n-border-disabled":X,"--n-border-disabled-checked":ae,"--n-box-shadow-focus":ee,"--n-color":T,"--n-color-checked":M,"--n-color-table":I,"--n-color-table-modal":G,"--n-color-table-popover":W,"--n-color-disabled":P,"--n-color-disabled-checked":ce,"--n-text-color":oe,"--n-text-color-disabled":re,"--n-check-mark-color":Y,"--n-check-mark-color-disabled":q,"--n-check-mark-color-disabled-checked":ne,"--n-font-size":de,"--n-label-padding":le}}),$=S?De("checkbox",D(()=>i.value[0]),A,e):void 0;return Object.assign(s,b,{rtlEnabled:_,selfRef:t,mergedClsPrefix:l,mergedDisabled:k,renderedChecked:r,mergedTheme:v,labelId:ye(),handleClick:g,handleKeyUp:p,handleKeyDown:C,cssVars:S?void 0:A,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var e;const{$slots:t,renderedChecked:l,mergedDisabled:S,indeterminate:R,privateInsideTable:s,cssVars:k,labelId:i,label:n,mergedClsPrefix:c,focusable:w,handleKeyUp:f,handleKeyDown:r,handleClick:v}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,l&&`${c}-checkbox--checked`,S&&`${c}-checkbox--disabled`,R&&`${c}-checkbox--indeterminate`,s&&`${c}-checkbox--inside-table`],tabindex:S||!w?void 0:0,role:"checkbox","aria-checked":R?"mixed":l,"aria-labelledby":i,style:k,onKeyup:f,onKeydown:r,onClick:v,onMousedown:()=>{Se("selectstart",window,m=>{m.preventDefault()},{once:!0})}},h("div",{class:`${c}-checkbox-box-wrapper`},"\xA0",h("div",{class:`${c}-checkbox-box`},h(Ce,null,{default:()=>this.indeterminate?h("div",{key:"indeterminate",class:`${c}-checkbox-icon`},Ae):h("div",{key:"check",class:`${c}-checkbox-icon`},_e)}),h("div",{class:`${c}-checkbox-box__border`}))),n!==null||t.default?h("span",{class:`${c}-checkbox__label`,id:i},t.default?t.default():n):null)}}),Ne="_iconSearch_1en4j_1",He={iconSearch:Ne};function Oe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ke(e)}const Qe=N({name:"Search",setup(){const e=be(),t=D({get:()=>e.getSearchText,set:e.setSearchText}),l=D({get:()=>e.getOnlySelected,set:e.setOnlySelected});return{filterText:t,onlySelect:l}},render(){let e;const{t}=fe();return U("div",{class:He.iconSearch},[U(ve,{placeholder:t("icon.searchPlaceholder"),size:"large",clearable:!0,value:this.filterText,"onUpdate:value":l=>this.filterText=l},null),U(Be,{size:"large",checked:this.onlySelect,"onUpdate:checked":l=>this.onlySelect=l},Oe(e=t("icon.onlySelected"))?e:{default:()=>[e]})])}});export{Qe as default};
