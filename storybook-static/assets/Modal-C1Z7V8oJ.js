import{r as l}from"./index-l2PZgWEW.js";import{g as ue,a as de,b as oe,m as fe,u as pe,c as Q,f as me}from"./createSimplePaletteValueFilter-BuNYIOAO.js";import{o as S,g as be,e as he,B as ge,u as Z,P as Ee}from"./Backdrop-DDLOtqEL.js";import{u as Y,b as _}from"./TransitionGroupContext-CNw8Q0td.js";import{j as A}from"./jsx-runtime-DWbWqHZ-.js";function ee(...e){return e.reduce((t,r)=>r==null?t:function(...s){t.apply(this,s),r.apply(this,s)},()=>{})}function q(e){return S(e).defaultView||window}function xe(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Re(e){const t=S(e);return t.body===e?q(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function K(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function te(e){return parseInt(q(e).getComputedStyle(e).paddingRight,10)||0}function ye(e){const r=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return r||n}function ne(e,t,r,n,s){const o=[t,r,...n];[].forEach.call(e.children,i=>{const u=!o.includes(i),d=!ye(i);u&&d&&K(i,s)})}function $(e,t){let r=-1;return e.some((n,s)=>t(n)?(r=s,!0):!1),r}function Te(e,t){const r=[],n=e.container;if(!t.disableScrollLock){if(Re(n)){const i=xe(S(n));r.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${te(n)+i}px`;const u=S(n).querySelectorAll(".mui-fixed");[].forEach.call(u,d=>{r.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${te(d)+i}px`})}let o;if(n.parentNode instanceof DocumentFragment)o=S(n).body;else{const i=n.parentElement,u=q(n);o=(i==null?void 0:i.nodeName)==="HTML"&&u.getComputedStyle(i).overflowY==="scroll"?i:n}r.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{r.forEach(({value:o,el:i,property:u})=>{o?i.style.setProperty(u,o):i.style.removeProperty(u)})}}function ve(e){const t=[];return[].forEach.call(e.children,r=>{r.getAttribute("aria-hidden")==="true"&&t.push(r)}),t}class ke{constructor(){this.modals=[],this.containers=[]}add(t,r){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&K(t.modalRef,!1);const s=ve(r);ne(r,t.mount,t.modalRef,s,!0);const o=$(this.containers,i=>i.container===r);return o!==-1?(this.containers[o].modals.push(t),n):(this.containers.push({modals:[t],container:r,restore:null,hiddenSiblings:s}),n)}mount(t,r){const n=$(this.containers,o=>o.modals.includes(t)),s=this.containers[n];s.restore||(s.restore=Te(s,r))}remove(t,r=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=$(this.containers,i=>i.modals.includes(t)),o=this.containers[s];if(o.modals.splice(o.modals.indexOf(t),1),this.modals.splice(n,1),o.modals.length===0)o.restore&&o.restore(),t.modalRef&&K(t.modalRef,r),ne(o.container,t.mount,t.modalRef,o.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=o.modals[o.modals.length-1];i.modalRef&&K(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Ie=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Pe(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Se(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let r=t(`[name="${e.name}"]:checked`);return r||(r=t(`[name="${e.name}"]`)),r!==e}function Ne(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Se(e))}function we(e){const t=[],r=[];return Array.from(e.querySelectorAll(Ie)).forEach((n,s)=>{const o=Pe(n);o===-1||!Ne(n)||(o===0?t.push(n):r.push({documentOrder:s,tabIndex:o,node:n}))}),r.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Ce(){return!0}function Me(e){const{children:t,disableAutoFocus:r=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:o=we,isEnabled:i=Ce,open:u}=e,d=l.useRef(!1),h=l.useRef(null),m=l.useRef(null),b=l.useRef(null),g=l.useRef(null),E=l.useRef(!1),c=l.useRef(null),N=Y(be(t),c),w=l.useRef(null);l.useEffect(()=>{!u||!c.current||(E.current=!r)},[r,u]),l.useEffect(()=>{if(!u||!c.current)return;const a=S(c.current);return c.current.contains(a.activeElement)||(c.current.hasAttribute("tabIndex")||c.current.setAttribute("tabIndex","-1"),E.current&&c.current.focus()),()=>{s||(b.current&&b.current.focus&&(d.current=!0,b.current.focus()),b.current=null)}},[u]),l.useEffect(()=>{if(!u||!c.current)return;const a=S(c.current),T=R=>{w.current=R,!(n||!i()||R.key!=="Tab")&&a.activeElement===c.current&&R.shiftKey&&(d.current=!0,m.current&&m.current.focus())},x=()=>{var D,y;const R=c.current;if(R===null)return;if(!a.hasFocus()||!i()||d.current){d.current=!1;return}if(R.contains(a.activeElement)||n&&a.activeElement!==h.current&&a.activeElement!==m.current)return;if(a.activeElement!==g.current)g.current=null;else if(g.current!==null)return;if(!E.current)return;let v=[];if((a.activeElement===h.current||a.activeElement===m.current)&&(v=o(c.current)),v.length>0){const L=!!((D=w.current)!=null&&D.shiftKey&&((y=w.current)==null?void 0:y.key)==="Tab"),O=v[0],U=v[v.length-1];typeof O!="string"&&typeof U!="string"&&(L?U.focus():O.focus())}else R.focus()};a.addEventListener("focusin",x),a.addEventListener("keydown",T,!0);const M=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&x()},50);return()=>{clearInterval(M),a.removeEventListener("focusin",x),a.removeEventListener("keydown",T,!0)}},[r,n,s,i,u,o]);const C=a=>{b.current===null&&(b.current=a.relatedTarget),E.current=!0,g.current=a.target;const T=t.props.onFocus;T&&T(a)},I=a=>{b.current===null&&(b.current=a.relatedTarget),E.current=!0};return A.jsxs(l.Fragment,{children:[A.jsx("div",{tabIndex:u?0:-1,onFocus:I,ref:h,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:N,onFocus:C}),A.jsx("div",{tabIndex:u?0:-1,onFocus:I,ref:m,"data-testid":"sentinelEnd"})]})}function Fe(e){return typeof e=="function"?e():e}function Ae(e){return e?e.props.hasOwnProperty("in"):!1}const Oe=new ke;function De(e){const{container:t,disableEscapeKeyDown:r=!1,disableScrollLock:n=!1,manager:s=Oe,closeAfterTransition:o=!1,onTransitionEnter:i,onTransitionExited:u,children:d,onClose:h,open:m,rootRef:b}=e,g=l.useRef({}),E=l.useRef(null),c=l.useRef(null),N=Y(c,b),[w,C]=l.useState(!m),I=Ae(d);let a=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(a=!1);const T=()=>S(E.current),x=()=>(g.current.modalRef=c.current,g.current.mount=E.current,g.current),M=()=>{s.mount(x(),{disableScrollLock:n}),c.current&&(c.current.scrollTop=0)},R=_(()=>{const p=Fe(t)||T().body;s.add(x(),p),c.current&&M()}),v=l.useCallback(()=>s.isTopModal(x()),[s]),D=_(p=>{E.current=p,p&&(m&&v()?M():c.current&&K(c.current,a))}),y=l.useCallback(()=>{s.remove(x(),a)},[a,s]);l.useEffect(()=>()=>{y()},[y]),l.useEffect(()=>{m?R():(!I||!o)&&y()},[m,y,I,o,R]);const L=p=>f=>{var k;(k=p.onKeyDown)==null||k.call(p,f),!(f.key!=="Escape"||f.which===229||!v())&&(r||(f.stopPropagation(),h&&h(f,"escapeKeyDown")))},O=p=>f=>{var k;(k=p.onClick)==null||k.call(p,f),f.target===f.currentTarget&&h&&h(f,"backdropClick")};return{getRootProps:(p={})=>{const f=he(e);delete f.onTransitionEnter,delete f.onTransitionExited;const k={...f,...p};return{role:"presentation",...k,onKeyDown:L(k),ref:N}},getBackdropProps:(p={})=>{const f=p;return{"aria-hidden":!0,...f,onClick:O(f),open:m}},getTransitionProps:()=>{const p=()=>{C(!1),i&&i()},f=()=>{C(!0),u&&u(),o&&y()};return{onEnter:ee(p,d==null?void 0:d.props.onEnter),onExited:ee(f,d==null?void 0:d.props.onExited)}},rootRef:N,portalRef:D,isTopModal:v,exited:w,hasTransition:I}}function Le(e){return de("MuiModal",e)}ue("MuiModal",["root","hidden","backdrop"]);const Be=e=>{const{open:t,exited:r,classes:n}=e;return me({root:["root",!t&&r&&"hidden"],backdrop:["backdrop"]},Le,n)},Ke=oe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.open&&r.exited&&t.hidden]}})(fe(({theme:e})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:t})=>!t.open&&t.exited,style:{visibility:"hidden"}}]}))),Ue=oe(ge,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),qe=l.forwardRef(function(t,r){const n=pe({name:"MuiModal",props:t}),{BackdropComponent:s=Ue,BackdropProps:o,classes:i,className:u,closeAfterTransition:d=!1,children:h,container:m,component:b,components:g={},componentsProps:E={},disableAutoFocus:c=!1,disableEnforceFocus:N=!1,disableEscapeKeyDown:w=!1,disablePortal:C=!1,disableRestoreFocus:I=!1,disableScrollLock:a=!1,hideBackdrop:T=!1,keepMounted:x=!1,onBackdropClick:M,onClose:R,onTransitionEnter:v,onTransitionExited:D,open:y,slotProps:L={},slots:O={},theme:U,...H}=n,z={...n,closeAfterTransition:d,disableAutoFocus:c,disableEnforceFocus:N,disableEscapeKeyDown:w,disablePortal:C,disableRestoreFocus:I,disableScrollLock:a,hideBackdrop:T,keepMounted:x},{getRootProps:p,getBackdropProps:f,getTransitionProps:k,portalRef:re,isTopModal:se,exited:G,hasTransition:V}=De({...z,rootRef:r}),B={...z,exited:G},P=Be(B),j={};if(h.props.tabIndex===void 0&&(j.tabIndex="-1"),V){const{onEnter:F,onExited:W}=k();j.onEnter=F,j.onExited=W}const X={...H,slots:{root:g.Root,backdrop:g.Backdrop,...O},slotProps:{...E,...L}},[ie,ae]=Z("root",{elementType:Ke,externalForwardedProps:X,getSlotProps:p,additionalProps:{ref:r,as:b},ownerState:B,className:Q(u,P==null?void 0:P.root,!B.open&&B.exited&&(P==null?void 0:P.hidden))}),[ce,J]=Z("backdrop",{elementType:s,externalForwardedProps:X,additionalProps:o,getSlotProps:F=>f({...F,onClick:W=>{M&&M(W),F!=null&&F.onClick&&F.onClick(W)}}),className:Q(o==null?void 0:o.className,P==null?void 0:P.backdrop),ownerState:B}),le=Y(o==null?void 0:o.ref,J.ref);return!x&&!y&&(!V||G)?null:A.jsx(Ee,{ref:re,container:m,disablePortal:C,children:A.jsxs(ie,{...ae,children:[!T&&s?A.jsx(ce,{...J,ref:le}):null,A.jsx(Me,{disableEnforceFocus:N,disableAutoFocus:c,disableRestoreFocus:I,isEnabled:se,open:y,children:l.cloneElement(h,j)})]})})});export{qe as M,xe as g,q as o};
