import{u as t}from"./index.f9f4849d.js";import{d as i,a as c,u as r,c as s}from"./index.73c6c240.js";const a="_iconSlider_1ry6h_1",d="_iconTypeItem_1ry6h_6",n={iconSlider:a,iconTypeItem:d},m=i({name:"Slider",setup(){const e=t();return{iconTypes:c(()=>e.getFilterClasses)}},render(){const{t:e}=r();return s("div",{class:n.iconSlider},[this.iconTypes.map(o=>s("div",{class:n.iconTypeItem},[e(`classification.${o}`)]))])}});export{m as default};