import{u as o,a as x,j as t,L as m,I as u,b as h,p}from"./index-70c4dd92.js";const j=s=>{o(n=>n.cart.cartItems);const e=x(),a=()=>{e(h({productId:c,quantity:1,price:s.data.price}))},{id:c,name:r,price:d,image:i,slug:l}=s.data;return t.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-sm flex flex-col justify-between",children:[t.jsxs("div",{children:[t.jsx(m,{to:l,children:t.jsx("img",{src:i,alt:r,className:"w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007] hover:scale-105 transition-all ease-out duration-300"})}),t.jsx("h3",{className:"text-2xl py-3 text-center font-medium",children:r})]}),t.jsxs("div",{className:"flex justify-between items-center w-full",children:[t.jsxs("p",{className:"text-2xl font-medium",children:["$",t.jsx("span",{className:"text-xl font-medium",children:d})]}),t.jsx("button",{type:"button",onClick:a,className:"bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 items-center transition-all ease-out duration-300","aria-label":"Add to cart",children:t.jsx(u,{className:"text-2xl"})})]})]})},f=j;function b(){const s=p.map(e=>({...e,productId:e.id,quantity:0}));return t.jsx("section",{children:t.jsxs("div",{className:"container",children:[t.jsx("h1",{className:"text-3xl text-center mb-6",children:"List Products"}),t.jsx("div",{className:"grid lg:grid-cols-4 sm:grid-cols-2 gap-5",children:s.map((e,a)=>t.jsx(f,{data:e},a))})]})})}export{b as default};