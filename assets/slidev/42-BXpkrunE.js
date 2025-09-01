import{_ as g}from"./CodeBlockWrapper-jnq276eI.js";import{I as k}from"../default-j9icwzfB.js";import{b as h,aw as i}from"../index-ccbFy6EO.js";import{p as c,u,f as x}from"./context-kabwm3he.js";import{b as $,o as v,w as d,g as e,e as T,m as b,a0 as s,v as y,x as w}from"../modules/vue-DCvFXe3w.js";import"../modules/unplugin-icons-CSIP7O7s.js";import"../modules/shiki-C5MGpnk0.js";const P={__name:"42",setup(m,{expose:t}){t(),c(i);const{$slidev:r,$nav:n,$clicksContext:o,$clicks:l,$page:a,$renderContext:_,$frontmatter:f}=u(),p={$slidev:r,$nav:n,$clicksContext:o,$clicks:l,$page:a,$renderContext:_,$frontmatter:f,InjectedLayout:k,get frontmatter(){return i},get useSlideContext(){return u},get _provideFrontmatter(){return c},get _frontmatterToProps(){return x}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function S(m,t,r,n,o,l){const a=g;return v(),$(n.InjectedLayout,y(w(n._frontmatterToProps(n.frontmatter,41))),{default:d(()=>[t[1]||(t[1]=e("h2",null,"RequestsLibrary",-1)),T(a,b({},{ranges:["1-2","-6","1-2,8-9","1-2,11-","all"]}),{default:d(()=>[...t[0]||(t[0]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-text"},[e("span",{class:"line"},[e("span",null,"*** Settings ***")]),s(`
`),e("span",{class:"line"},[e("span",null,"Library               RequestsLibrary")]),s(`
`),e("span",{class:"line"},[e("span")]),s(`
`),e("span",{class:"line"},[e("span",null,"*** Test Cases ***")]),s(`
`),e("span",{class:"line"},[e("span",null,"Quick Get Request Test")]),s(`
`),e("span",{class:"line"},[e("span",null,"    ${response}=    GET  https://www.google.com")]),s(`
`),e("span",{class:"line"},[e("span")]),s(`
`),e("span",{class:"line"},[e("span",null,"Quick Get Request With Parameters Test")]),s(`
`),e("span",{class:"line"},[e("span",null,"    ${response}=    GET  https://www.google.com/search  params=query=ciao  expected_status=200")]),s(`
`),e("span",{class:"line"},[e("span")]),s(`
`),e("span",{class:"line"},[e("span",null,"Quick Get A JSON Body Test")]),s(`
`),e("span",{class:"line"},[e("span",null,"    ${response}=    GET  https://jsonplaceholder.typicode.com/posts/1")]),s(`
`),e("span",{class:"line"},[e("span",null,"    Should Be Equal As Strings    1  ${response.json()}[id]")])])],-1)])]),_:1},16)]),_:1},16)}const E=h(P,[["render",S],["__file","/@slidev/slides/42.md"]]);export{E as default};
