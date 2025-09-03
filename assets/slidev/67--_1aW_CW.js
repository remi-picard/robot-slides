import{_ as g}from"./CodeBlockWrapper-aU4VPXBn.js";import{I as $}from"../default-k5OLvChE.js";import{b as h,aV as p}from"../index-CoBe7xXy.js";import{p as c,u,f as k}from"./context-Bx8EO2yG.js";import{b as v,o as C,w as d,g as e,e as b,m as x,a0 as n,v as y,x as F}from"../modules/vue-DCvFXe3w.js";import"../modules/unplugin-icons-CSIP7O7s.js";import"../modules/shiki-C5MGpnk0.js";const L={__name:"67",setup(m,{expose:s}){s(),c(p);const{$slidev:l,$nav:a,$clicksContext:r,$clicks:i,$page:t,$renderContext:f,$frontmatter:_}=u(),o={$slidev:l,$nav:a,$clicksContext:r,$clicks:i,$page:t,$renderContext:f,$frontmatter:_,InjectedLayout:$,get frontmatter(){return p},get useSlideContext(){return u},get _provideFrontmatter(){return c},get _frontmatterToProps(){return k}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function T(m,s,l,a,r,i){const t=g;return C(),v(a.InjectedLayout,y(F(a._frontmatterToProps(a.frontmatter,66))),{default:d(()=>[s[2]||(s[2]=e("h2",null,"Fichier Template",-1)),e("section",null,[s[1]||(s[1]=e("ul",null,[e("li",null,"Utilisation dans Robot Framework")],-1)),b(t,x({},{ranges:["1-3,12-","4-11","all"]}),{default:d(()=>[...s[0]||(s[0]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-text"},[e("span",{class:"line"},[e("span",null,"*** Settings ***")]),n(`
`),e("span",{class:"line"},[e("span",null,"Library     OperatingSystem")]),n(`
`),e("span",{class:"line"},[e("span",null,"Library     resources/file_helper.py")]),n(`
`),e("span",{class:"line"},[e("span")]),n(`
`),e("span",{class:"line"},[e("span",null,"*** Test Cases ***")]),n(`
`),e("span",{class:"line"},[e("span",null,"Creer Fichier Avec Un Template")]),n(`
`),e("span",{class:"line"},[e("span",null,"    ${ligne1}    Create Dictionary    variable=Ligne 1")]),n(`
`),e("span",{class:"line"},[e("span",null,"    ${ligne2}    Create Dictionary    variable=Ligne 2")]),n(`
`),e("span",{class:"line"},[e("span",null,"    ${data}    Create List    ${ligne1}    ${ligne2}")]),n(`
`),e("span",{class:"line"},[e("span",null,"    Creer Fichier    data/output/mon_fichier.csv    ${data}")]),n(`
`),e("span",{class:"line"},[e("span")]),n(`
`),e("span",{class:"line"},[e("span",null,"*** Keywords ***")]),n(`
`),e("span",{class:"line"},[e("span",null,"Creer Fichier")]),n(`
`),e("span",{class:"line"},[e("span",null,"    [Arguments]    ${path}    ${data}")]),n(`
`),e("span",{class:"line"},[e("span",null,"    ${contenu}    Charger Template    ${data}")]),n(`
`),e("span",{class:"line"},[e("span",null,"    ${fichier}    Create File    ${path}    ${contenu}")]),n(`
`),e("span",{class:"line"},[e("span",null,"    ${contenu}    Get File    ${path}")]),n(`
`),e("span",{class:"line"},[e("span",null,"    Log    ${contenu}")])])],-1)])]),_:1},16)])]),_:1},16)}const N=h(L,[["render",T],["__file","/@slidev/slides/67.md"]]);export{N as default};
