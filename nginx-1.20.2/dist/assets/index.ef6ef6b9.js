import{r as e,m as r,j as t,F as n,c as s,B as a,C as l}from"./vendor.71bd5417.js";import{u as o,j as d}from"./index.1bf62b7b.js";const c=()=>{const[c,i]=o([]);e.exports.useEffect((()=>(m(1),()=>{})),[]);const m=e=>{d(e).then((e=>{1===e.code?i(e.data.list):r.error(e.msg)}))};return t(n,{children:t("div",{className:"container w-full h-screen flex",children:s("div",{className:"w-11/12 mx-auto flex flex-wrap m-4 p-4 rounded-lg",style:{justifyContent:"center",alignItems:"center"},children:[t(a,{type:"primary",shape:"round",onClick:()=>{m(Math.floor(900*Math.random()))},children:"换一批"}),c.map(((e,r)=>s(l,{className:"w-17rem h-11rem ml-2 rounded-lg mx-12 bg-transparent border-transparent",children:[t("div",{className:"flex font-semibold",style:{justifyContent:"center"},children:t("p",{children:e.content})}),t("div",{className:"flex font-semibold",style:{justifyContent:"center"},children:t("p",{children:e.updateTime})})]},r)))]})})})};export{c as default};