import{r as e,j as a,F as r,a as l,Q as n}from"./index.45b28418.js";import{u as t,d as s}from"./index.fabee383.js";import{C as i}from"./index.ca62875f.js";import{I as d}from"./index.ad29621c.js";import{B as c}from"./button.b837cde2.js";import{D as o}from"./index.0ecac69d.js";import"./EyeOutlined.48e7da16.js";const m=()=>{const[m,f]=t(""),[p,h]=t({});e.exports.useEffect((()=>()=>{}),[]);return a(r,{children:a("div",{className:"container w-full h-screen flex",children:a("div",{className:"w-11/12 mx-auto flex flex-wrap m-4 p-4 rounded-lg",style:{justifyContent:"center",alignItems:"center"},children:l(i,{className:"w-full h-11/12 rounded-lg bg-transparent border-transparent flex",style:{justifyContent:"center",alignItems:"center"},children:[l("div",{className:"flex",children:[a(d,{placeholder:"请输入想要查询的汉字",onChange:e=>f(e.target.value)}),a(c,{type:"primary",shape:"round",className:"ml-5",onClick:()=>{s(m).then((e=>{1===e.code?h(e.data[0]):n.error(e.msg)}))},children:"查询"})]}),p&&"{}"!==JSON.stringify(p)?a(r,{children:l(o,{title:"汉语词典",className:"mt-12",children:[a(o.Item,{label:"查询汉字",children:p.word}),a(o.Item,{label:"读音",children:p.pinyin}),a(o.Item,{label:"偏旁部首",children:p.radicals}),a(o.Item,{label:"汉语释义",children:p.explanation})]})}):""]})})})})};export{m as default};
