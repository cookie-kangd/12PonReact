import{r as e,j as l,F as a,c as r,C as n,d as t,e as s,B as c,D as i,m as d}from"./vendor.71bd5417.js";import{u,t as o}from"./index.1bf62b7b.js";const h=[{label:"简体中文",value:"zh"},{label:"繁体中文",value:"cht"},{label:"英文",value:"en"},{label:"日语",value:"jp"},{label:"韩语",value:"kor"},{label:"法语",value:"fra"},{label:"德语",value:"de"},{label:"粤语",value:"yue"},{label:"文言文",value:"wyw"}],m=()=>{const[m,b]=u(""),[f,p]=u(""),[v,g]=u({});e.exports.useEffect((()=>()=>{}),[]);return l(a,{children:l("div",{className:"container w-full h-screen flex",children:l("div",{className:"w-11/12 mx-auto flex flex-wrap m-4 p-4 rounded-lg",style:{justifyContent:"center",alignItems:"center"},children:r(n,{className:"w-full h-11/12 rounded-lg bg-transparent border-transparent flex",style:{justifyContent:"center",alignItems:"center"},children:[r("div",{className:"flex",children:[r(t.Group,{compact:!0,children:[l(s,{defaultValue:"zh",onChange:e=>{p(e)},children:h.map(((e,a)=>l(s.Option,{value:e.value,children:e.label},a)))}),l(t,{style:{width:"90%"},placeholder:"请输入想要转繁体字的文字",onChange:e=>b(e.target.value)})]}),l(c,{type:"primary",shape:"round",onClick:()=>{const e={};e.content=m,e.language=f,o(e).then((e=>{1===e.code?g(e.data):d.error(e.msg)}))},children:"翻译"})]}),v&&"{}"!==JSON.stringify(v)?l(a,{children:r(i,{title:"多语种翻译(目前仅支持中文翻译成外语)",className:"mt-12",children:[l(i.Item,{label:"中文",children:v.origin}),l(i.Item,{label:"翻译文本",children:v.result}),l(i.Item,{label:"语种",children:h.map((e=>{if(e.value===v.resultLanguage)return e.label}))})]})}):""]})})})})};export{m as default};
