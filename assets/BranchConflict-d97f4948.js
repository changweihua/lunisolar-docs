import{e as o}from"./lunisolar.esm-c27b7a2d.js";import r from"./DataTable-887dbd44.js";import{c as s,V as m,ac as l,_ as f}from"./framework-ad9ccf37.js";const h=s({__name:"BranchConflict",setup(p){const t=[];for(let e=0;e<12;e++){const n=o.Branch.create(e),c={branch:n.name,conflict:n.conflict.name,destroying:n.destroying.name,punishing:n.punishing.name,harming:n.harming.name,g6:n.group6.name};t.push(c)}const a=[{name:"branch",title:"地支"},{name:"conflict",title:"冲"},{name:"destroying",title:"破"},{name:"punishing",title:"刑"},{name:"harming",title:"害"},{name:"g6",title:"六合"}],i="branch";return(e,n)=>(m(),l(r,{fields:a,datas:t,idField:i}))}}),d=f(h,[["__file","BranchConflict.vue"]]);export{d as default};
