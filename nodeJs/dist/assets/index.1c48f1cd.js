import{r as e,j as r,F as a,a as d,Q as t}from"./index.45b28418.js";import{u as s,b as l}from"./index.fabee383.js";import{C as n}from"./index.ca62875f.js";import{I as i}from"./index.ad29621c.js";import{B as c}from"./button.b837cde2.js";import{D as m}from"./index.0ecac69d.js";import"./EyeOutlined.48e7da16.js";const o=()=>{const[o,f]=s(""),[h,p]=s({});e.exports.useEffect((()=>()=>{}),[]);return r(a,{children:r("div",{className:"container w-full h-screen flex",children:r("div",{className:"w-11/12 mx-auto flex flex-wrap m-4 p-4 rounded-lg",style:{justifyContent:"center",alignItems:"center"},children:d(n,{className:"w-full h-11/12 rounded-lg bg-transparent border-transparent flex",style:{justifyContent:"center",alignItems:"center"},children:[d("div",{className:"flex",children:[r(i,{placeholder:"请输入想要查询的身份证号码",onChange:e=>f(e.target.value)}),r(c,{type:"primary",shape:"round",className:"ml-5",onClick:()=>{/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(o)?l(o).then((e=>{1===e.code?p(e.data):t.error(e.msg)})):t.error("请输入正确的身份证号码")},children:"查询"})]}),h&&"{}"!==JSON.stringify(h)?r(a,{children:d(m,{title:"身份号查询",className:"mt-12",children:[r(m.Item,{label:"身份证号码",children:h.idCardNum}),r(m.Item,{label:"身份证地址",children:h.address}),r(m.Item,{label:"生日",children:h.birthday}),r(m.Item,{label:"性别",children:h.sex})]})}):""]})})})})};export{o as default};
