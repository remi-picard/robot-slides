import{d as _,$ as u,y as f,f as r,o as i,g as e,t as a,F as h,Z as g,i as v,e as b,a0 as x}from"../modules/vue-DCvFXe3w.js";import{u as N,j as y,c as m,b as k}from"../index-CoBe7xXy.js";import{N as w}from"./NoteDisplay-SuojS2p8.js";import"../modules/shiki-C5MGpnk0.js";const S=_({__name:"print",setup(p,{expose:n}){n();const{slides:l,total:o}=N();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const d=f(()=>l.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),c={slides:l,total:o,slidesWithNote:d,get configs(){return m},NoteDisplay:w};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),D={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},W={class:"opacity-50"},C={key:0,class:"border-main mb-8"};function F(p,n,l,o,d,c){return i(),r("div",D,[e("div",L,[e("div",T,[e("h1",V,a(o.configs.title),1),e("div",j,a(new Date().toLocaleString()),1)]),(i(!0),r(h,null,g(o.slidesWithNote,(t,s)=>(i(),r("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",W,a(t==null?void 0:t.no)+"/"+a(o.total),1),x(" "+a(t==null?void 0:t.title)+" ",1),n[0]||(n[0]=e("div",{class:"flex-auto"},null,-1))])]),b(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(i(),r("hr",C)):v("v-if",!0)]))),128))])])}const O=k(S,[["render",F],["__file","/home/runner/work/robot-slides/robot-slides/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{O as default};
