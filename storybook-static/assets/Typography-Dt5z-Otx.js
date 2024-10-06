import{r as S}from"./index-l2PZgWEW.js";import{d as U,g as T,a as w,b as C,m as $,u as R,c as j,f as M,e as E}from"./createSimplePaletteValueFilter-CXzVnbi1.js";import{u as G,e as O,a as k}from"./useTheme-aF8LXEHt.js";import{j as u}from"./jsx-runtime-DWbWqHZ-.js";import{b as q,g as b,h as x,f as y}from"./index-DJI_SQV9.js";import{G as A}from"./GlobalStyles-BJjePWzC.js";function N({styles:e,themeId:a,defaultTheme:t={}}){const o=G(t),r=typeof e=="function"?e(a&&o[a]||o):e;return u.jsx(A,{styles:r})}function D(e){return u.jsx(N,{...e,defaultTheme:U,themeId:q})}function at(e){return function(t){return u.jsx(D,{styles:typeof e=="function"?o=>e({theme:o,...t}):e})}}function H(){return O}function I(e){return w("MuiPaper",e)}T("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const V=e=>{const{square:a,elevation:t,variant:o,classes:r}=e,s={root:["root",o,!a&&"rounded",o==="elevation"&&`elevation${t}`]};return M(s,I,r)},_=C("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],!t.square&&a.rounded,t.variant==="elevation"&&a[`elevation${t.elevation}`]]}})($(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:a})=>!a.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),ot=S.forwardRef(function(a,t){var l;const o=R({props:a,name:"MuiPaper"}),r=k(),{className:s,component:i="div",elevation:n=1,square:v=!1,variant:p="elevation",...c}=o,g={...o,component:i,elevation:n,square:v,variant:p},h=V(g);return u.jsx(_,{as:i,ownerState:g,className:j(h.root,s),ref:t,...c,style:{...p==="elevation"&&{"--Paper-shadow":(r.vars||r).shadows[n],...r.vars&&{"--Paper-overlay":(l=r.vars.overlays)==null?void 0:l[n]},...!r.vars&&r.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${b("#fff",x(n))}, ${b("#fff",x(n))})`}},...c.style}})});function z(e){return w("MuiTypography",e)}T("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const F={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},J=H(),L=e=>{const{align:a,gutterBottom:t,noWrap:o,paragraph:r,variant:s,classes:i}=e,n={root:["root",s,e.align!=="inherit"&&`align${y(a)}`,t&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return M(n,z,i)},K=C("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.variant&&a[t.variant],t.align!=="inherit"&&a[`align${y(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})($(({theme:e})=>{var a;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([t,o])=>t!=="inherit"&&o&&typeof o=="object").map(([t,o])=>({props:{variant:t},style:o})),...Object.entries(e.palette).filter(E()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(((a=e.palette)==null?void 0:a.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${y(t)}`},style:{color:(e.vars||e).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),P={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},rt=S.forwardRef(function(a,t){const{color:o,...r}=R({props:a,name:"MuiTypography"}),s=!F[o],i=J({...r,...s&&{color:o}}),{align:n="inherit",className:v,component:p,gutterBottom:c=!1,noWrap:g=!1,paragraph:h=!1,variant:l="body1",variantMapping:d=P,...f}=i,m={...i,align:n,color:o,className:v,component:p,gutterBottom:c,noWrap:g,paragraph:h,variant:l,variantMapping:d},B=p||(h?"p":d[l]||P[l])||"span",W=L(m);return u.jsx(K,{as:B,ref:t,className:j(W.root,v),...f,ownerState:m,style:{...n!=="inherit"&&{"--Typography-textAlign":n},...f.style}})});export{ot as P,rt as T,at as g};
