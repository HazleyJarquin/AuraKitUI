import{j as f}from"./jsx-runtime-DWbWqHZ-.js";import{G as Ie,T as ye,D as Pe,a as I,c as Ce,b as De,s as Ae,d as S}from"./index-jPqGUIrZ.js";import{r as i}from"./index-l2PZgWEW.js";function Oe(e){return e==null||Object.keys(e).length===0}function Ve(e){const{styles:t,defaultTheme:r={}}=e,a=typeof t=="function"?p=>t(Oe(p)?r:p):t;return f.jsx(Ie,{styles:a})}function Ke(e){return Object.keys(e).length===0}function Re(e=null){const t=i.useContext(ye);return!t||Ke(t)?e:t}const be=i.createContext(null);function q(){return i.useContext(be)}const Ne=typeof Symbol=="function"&&Symbol.for,We=Ne?Symbol.for("mui.nested"):"__THEME_NESTED__";function Ge(e,t){return typeof t=="function"?t(e):{...e,...t}}function He(e){const{children:t,theme:r}=e,a=q(),p=i.useMemo(()=>{const l=a===null?{...r}:Ge(a,r);return l!=null&&(l[We]=a!==null),l},[r,a]);return f.jsx(be.Provider,{value:p,children:t})}const Fe=i.createContext();function qe({value:e,...t}){return f.jsx(Fe.Provider,{value:e??!0,...t})}const pe={};function Se(e,t,r,a=!1){return i.useMemo(()=>{const p=e&&t[e]||t;if(typeof r=="function"){const l=r(p),o=e?{...t,[e]:l}:l;return a?()=>o:o}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,a])}function ke(e){const{children:t,theme:r,themeId:a}=e,p=Re(pe),l=q()||pe,o=Se(a,p,r),C=Se(a,l,r,!0),g=o.direction==="rtl";return f.jsx(He,{theme:C,children:f.jsx(ye.Provider,{value:o,children:f.jsx(qe,{value:g,children:f.jsx(Pe,{value:o==null?void 0:o.components,children:t})})})})}const U="mode",Y="color-scheme",Ue="data-color-scheme";function Ye(e){const{defaultLightColorScheme:t="light",defaultDarkColorScheme:r="dark",modeStorageKey:a=U,colorSchemeStorageKey:p=Y,attribute:l=Ue,colorSchemeNode:o="document.documentElement",nonce:C}=e||{};let g="",d=l;if(l==="class"&&(d=".%s"),l==="data"&&(d="[data-%s]"),d.startsWith(".")){const x=d.substring(1);g+=`${o}.classList.remove('${x}'.replace('%s', light), '${x}'.replace('%s', dark));
      ${o}.classList.add('${x}'.replace('%s', colorScheme));`}const b=d.match(/\[([^\]]+)\]/);if(b){const[x,w]=b[1].split("=");w||(g+=`${o}.removeAttribute('${x}'.replace('%s', light));
      ${o}.removeAttribute('${x}'.replace('%s', dark));`),g+=`
      ${o}.setAttribute('${x}'.replace('%s', colorScheme), ${w?`${w}.replace('%s', colorScheme)`:'""'});`}else g+=`${o}.setAttribute('${d}', colorScheme);`;return f.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?C:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${a}') || 'system';
  const dark = localStorage.getItem('${p}-dark') || '${r}';
  const light = localStorage.getItem('${p}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${g}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function ge(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Te(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function ze(e){return Te(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function F(e,t){if(typeof window>"u")return;let r;try{r=localStorage.getItem(e)||void 0,r||localStorage.setItem(e,t)}catch{}return r||t}function Be(e){const{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:a,supportedColorSchemes:p=[],modeStorageKey:l=U,colorSchemeStorageKey:o=Y,storageWindow:C=typeof window>"u"?void 0:window}=e,g=p.join(","),d=p.length>1,[b,x]=i.useState(()=>{const n=F(l,t),s=F(`${o}-light`,r),c=F(`${o}-dark`,a);return{mode:n,systemMode:ge(n),lightColorScheme:s,darkColorScheme:c}}),[,w]=i.useState(!1),v=i.useRef(!1);i.useEffect(()=>{d&&w(!0),v.current=!0},[d]);const z=ze(b),$=i.useCallback(n=>{x(s=>{if(n===s.mode)return s;const c=n??t;try{localStorage.setItem(l,c)}catch{}return{...s,mode:c,systemMode:ge(c)}})},[l,t]),j=i.useCallback(n=>{n?typeof n=="string"?n&&!g.includes(n)?console.error(`\`${n}\` does not exist in \`theme.colorSchemes\`.`):x(s=>{const c={...s};return Te(s,h=>{try{localStorage.setItem(`${o}-${h}`,n)}catch{}h==="light"&&(c.lightColorScheme=n),h==="dark"&&(c.darkColorScheme=n)}),c}):x(s=>{const c={...s},h=n.light===null?r:n.light,y=n.dark===null?a:n.dark;if(h)if(!g.includes(h))console.error(`\`${h}\` does not exist in \`theme.colorSchemes\`.`);else{c.lightColorScheme=h;try{localStorage.setItem(`${o}-light`,h)}catch{}}if(y)if(!g.includes(y))console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`);else{c.darkColorScheme=y;try{localStorage.setItem(`${o}-dark`,y)}catch{}}return c}):x(s=>{try{localStorage.setItem(`${o}-light`,r),localStorage.setItem(`${o}-dark`,a)}catch{}return{...s,lightColorScheme:r,darkColorScheme:a}})},[g,o,r,a]),L=i.useCallback(n=>{b.mode==="system"&&x(s=>{const c=n!=null&&n.matches?"dark":"light";return s.systemMode===c?s:{...s,systemMode:c}})},[b.mode]),D=i.useRef(L);return D.current=L,i.useEffect(()=>{if(typeof window.matchMedia!="function"||!d)return;const n=(...c)=>D.current(...c),s=window.matchMedia("(prefers-color-scheme: dark)");return s.addListener(n),n(s),()=>{s.removeListener(n)}},[d]),i.useEffect(()=>{if(C&&d){const n=s=>{const c=s.newValue;typeof s.key=="string"&&s.key.startsWith(o)&&(!c||g.match(c))&&(s.key.endsWith("light")&&j({light:c}),s.key.endsWith("dark")&&j({dark:c})),s.key===l&&(!c||["light","dark","system"].includes(c))&&$(c||t)};return C.addEventListener("storage",n),()=>{C.removeEventListener("storage",n)}}},[j,$,l,o,g,t,C,d]),{...b,mode:v.current||!d?b.mode:void 0,systemMode:v.current||!d?b.systemMode:void 0,colorScheme:v.current||!d?z:void 0,setMode:$,setColorScheme:j}}const Qe="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Je(e){const{themeId:t,theme:r={},modeStorageKey:a=U,colorSchemeStorageKey:p=Y,disableTransitionOnChange:l=!1,defaultColorScheme:o,resolveTheme:C}=e,g={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},d=i.createContext(void 0),b=()=>i.useContext(d)||g;function x($){var le,de,me,ue,he;const{children:j,theme:L,modeStorageKey:D=a,colorSchemeStorageKey:n=p,disableTransitionOnChange:s=l,storageWindow:c=typeof window>"u"?void 0:window,documentNode:h=typeof document>"u"?void 0:document,colorSchemeNode:y=typeof document>"u"?void 0:document.documentElement,disableNestedContext:V=!1,disableStyleSheetGeneration:Me=!1}=$,K=i.useRef(!1),R=q(),N=i.useContext(d),W=!!N&&!V,B=i.useMemo(()=>L||(typeof r=="function"?r():r),[L]),Q=B[t],{colorSchemes:E={},components:we={},cssVarPrefix:J,...M}=Q||B,X=Object.keys(E).filter(m=>!!E[m]).join(","),_=i.useMemo(()=>X.split(","),[X]),Z=typeof o=="string"?o:o.light,ee=typeof o=="string"?o:o.dark,$e=E[Z]&&E[ee]?"system":((de=(le=E[M.defaultColorScheme])==null?void 0:le.palette)==null?void 0:de.mode)||((me=M.palette)==null?void 0:me.mode),{mode:Ee,setMode:te,systemMode:oe,lightColorScheme:re,darkColorScheme:ne,colorScheme:ve,setColorScheme:se}=Be({supportedColorSchemes:_,defaultLightColorScheme:Z,defaultDarkColorScheme:ee,modeStorageKey:D,colorSchemeStorageKey:n,defaultMode:$e,storageWindow:c});let G=Ee,k=ve;W&&(G=N.mode,k=N.colorScheme);const ce=k||M.defaultColorScheme,je=((ue=M.generateThemeVars)==null?void 0:ue.call(M))||M.vars,T={...M,components:we,colorSchemes:E,cssVarPrefix:J,vars:je};if(typeof T.generateSpacing=="function"&&(T.spacing=T.generateSpacing()),ce){const m=E[ce];m&&typeof m=="object"&&Object.keys(m).forEach(u=>{m[u]&&typeof m[u]=="object"?T[u]={...T[u],...m[u]}:T[u]=m[u]})}const P=M.colorSchemeSelector;i.useEffect(()=>{if(k&&y&&P&&P!=="media"){const m=P;let u=P;if(m==="class"&&(u=".%s"),m==="data"&&(u="[data-%s]"),m!=null&&m.startsWith("data-")&&!m.includes("%s")&&(u=`[${m}="%s"]`),u.startsWith("."))y.classList.remove(..._.map(A=>u.substring(1).replace("%s",A))),y.classList.add(u.substring(1).replace("%s",k));else{const A=u.replace("%s",k).match(/\[([^\]]+)\]/);if(A){const[fe,H]=A[1].split("=");H||_.forEach(_e=>{y.removeAttribute(fe.replace(k,_e))}),y.setAttribute(fe,H?H.replace(/"|'/g,""):"")}else y.setAttribute(u,k)}}},[k,P,y,_]),i.useEffect(()=>{let m;if(s&&K.current&&h){const u=h.createElement("style");u.appendChild(h.createTextNode(Qe)),h.head.appendChild(u),window.getComputedStyle(h.body),m=setTimeout(()=>{h.head.removeChild(u)},1)}return()=>{clearTimeout(m)}},[k,s,h]),i.useEffect(()=>(K.current=!0,()=>{K.current=!1}),[]);const Le=i.useMemo(()=>({allColorSchemes:_,colorScheme:k,darkColorScheme:ne,lightColorScheme:re,mode:G,setColorScheme:se,setMode:te,systemMode:oe}),[_,k,ne,re,G,se,te,oe]);let ie=!0;(Me||M.cssVariables===!1||W&&(R==null?void 0:R.cssVarPrefix)===J)&&(ie=!1);const ae=f.jsxs(i.Fragment,{children:[f.jsx(ke,{themeId:Q?t:void 0,theme:C?C(T):T,children:j}),ie&&f.jsx(Ve,{styles:((he=T.generateStyleSheets)==null?void 0:he.call(T))||[]})]});return W?ae:f.jsx(d.Provider,{value:Le,children:ae})}const w=typeof o=="string"?o:o.light,v=typeof o=="string"?o:o.dark;return{CssVarsProvider:x,useColorScheme:b,getInitColorSchemeScript:$=>Ye({colorSchemeStorageKey:p,defaultLightColorScheme:w,defaultDarkColorScheme:v,modeStorageKey:a,...$})}}function xe({theme:e,...t}){const r=I in e?e[I]:void 0;return f.jsx(ke,{...t,themeId:r?I:void 0,theme:r||e})}const O={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:Xe,useColorScheme:st,getInitColorSchemeScript:ct}=Je({themeId:I,theme:()=>Ce({cssVariables:!0}),colorSchemeStorageKey:O.colorSchemeStorageKey,modeStorageKey:O.modeStorageKey,defaultColorScheme:{light:O.defaultLightColorScheme,dark:O.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:De(e.palette,e.typography)};return t.unstable_sx=function(a){return Ae({sx:a,theme:this})},t}}),Ze=Xe;function et({theme:e,...t}){return typeof e=="function"?f.jsx(xe,{theme:e,...t}):"colorSchemes"in(I in e?e[I]:e)?f.jsx(Ze,{theme:e,...t}):f.jsx(xe,{theme:e,...t})}const tt=Ce({palette:{primary:{main:S.accent[500],light:S.accent[300],dark:S.accent[700],contrastText:S.text.inverse},secondary:{main:S.secondary[500],light:S.secondary[300],dark:S.secondary[700],contrastText:S.text.inverse},error:{main:S.error[500],light:S.error[300],dark:S.error[700]},warning:{main:S.warning[500]},info:{main:S.info[500]},success:{main:S.success[500]},text:{primary:S.text.primary,secondary:S.text.secondary,disabled:S.text.muted}},shadows:["none","0px 1px 2px rgba(0, 0, 0, 0.05)","0px 4px 6px rgba(0, 0, 0, 0.1)","0px 10px 15px rgba(0, 0, 0, 0.15)","0px 20px 25px rgba(0, 0, 0, 0.2)","0px 25px 30px rgba(0, 0, 0, 0.25)","0px 30px 35px rgba(0, 0, 0, 0.3)","0px 35px 40px rgba(0, 0, 0, 0.35)","0px 40px 45px rgba(0, 0, 0, 0.4)","0px 45px 50px rgba(0, 0, 0, 0.45)","0px 50px 55px rgba(0, 0, 0, 0.5)","0px 55px 60px rgba(0, 0, 0, 0.55)","0px 60px 65px rgba(0, 0, 0, 0.6)","0px 65px 70px rgba(0, 0, 0, 0.65)","0px 70px 75px rgba(0, 0, 0, 0.7)","0px 75px 80px rgba(0, 0, 0, 0.75)","0px 80px 85px rgba(0, 0, 0, 0.8)","0px 85px 90px rgba(0, 0, 0, 0.85)","0px 90px 95px rgba(0, 0, 0, 0.9)","0px 95px 100px rgba(0, 0, 0, 0.95)","0px 100px 105px rgba(0, 0, 0, 1)","0px 105px 110px rgba(0, 0, 0, 1.05)","0px 110px 115px rgba(0, 0, 0, 1.1)","0px 115px 120px rgba(0, 0, 0, 1.15)","0px 120px 125px rgba(0, 0, 0, 1.2)"]}),it={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[e=>f.jsx(et,{theme:tt,children:f.jsx(e,{})})]};export{it as default};
