import{u as x,a as m,j as s,L as u,I as h,b as p}from"./index-cb85e5dd.js";import{p as j}from"./products-c5170c31.js";const g=e=>{const t=x(n=>n.cart.cartItems);console.log(t);const c=m(),r=()=>{c(p({productId:d,quantity:1}))},{id:d,name:a,price:l,image:o,slug:i}=e.data;return s.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-sm",children:[s.jsx(u,{to:i,children:s.jsx("img",{src:o,alt:a,className:"w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]"})}),s.jsxs("div",{className:"flex flex-col justify-between items-center",children:[s.jsx("h3",{className:"text-2xl py-3 text-center font-medium",children:a}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("p",{children:["$",s.jsx("span",{className:"text-2xl font-medium",children:l})]}),s.jsxs("button",{onClick:r,className:"bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 items-center",children:[s.jsx(h,{className:"text-2xl"}),"Add To Cart"]})]})]})]})},f=g;function v(){return s.jsx("section",{children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"text-3xl",children:"List Products"}),s.jsx("div",{className:"grid lg:grid-cols-4 sm:grid-cols-2 gap-5",children:j.map((e,t)=>s.jsx(f,{data:e},t))})]})})}export{v as default};
