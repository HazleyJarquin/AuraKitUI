var He=Object.defineProperty;var We=(e,t,n)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var W=(e,t,n)=>We(e,typeof t!="symbol"?t+"":t,n);import{r as c,R as q}from"./index-l2PZgWEW.js";import{j as U}from"./jsx-runtime-DWbWqHZ-.js";import{m as qe,w as Xe,T as Ye,g as Ge,h as Ke,i as Ze,u as Je,j as Qe,k as et,s as tt,l as nt,e as rt,d as ot,n as it,o as ie}from"./index-CAzvMZH7.js";import{_ as xe,a as st,b as at}from"./assertThisInitialized-C1_Uj0Qz.js";var lt=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ut=qe(function(e){return lt.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ct=ut,dt=function(t){return t!=="theme"},pe=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?ct:dt},he=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(s){return t.__emotion_forwardProp(s)&&i(s)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},ft=!1,pt=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Ze(n,r,o),Je(function(){return Qe(n,r,o)}),null},ht=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,s;n!==void 0&&(i=n.label,s=n.target);var l=he(t,n,r),u=l||pe(o),a=!u("as");return function(){var f=arguments,y=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&y.push("label:"+i+";"),f[0]==null||f[0].raw===void 0)y.push.apply(y,f);else{y.push(f[0][0]);for(var k=f.length,R=1;R<k;R++)y.push(f[R],f[0][R])}var m=Xe(function(g,b,F){var E=a&&g.as||o,C="",p=[],S=g;if(g.theme==null){S={};for(var h in g)S[h]=g[h];S.theme=c.useContext(Ye)}typeof g.className=="string"?C=Ge(b.registered,p,g.className):g.className!=null&&(C=g.className+" ");var v=Ke(y.concat(p),b.registered,S);C+=b.key+"-"+v.name,s!==void 0&&(C+=" "+s);var _=a&&l===void 0?pe(E):u,T={};for(var x in g)a&&x==="as"||_(x)&&(T[x]=g[x]);return T.className=C,F&&(T.ref=F),c.createElement(c.Fragment,null,c.createElement(pt,{cache:b,serialized:v,isStringTag:typeof E=="string"}),c.createElement(E,T))});return m.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=o,m.__emotion_styles=y,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return s===void 0&&ft?"NO_COMPONENT_SELECTOR":"."+s}}),m.withComponent=function(g,b){return e(g,xe({},n,b,{shouldForwardProp:he(m,b,!0)})).apply(void 0,y)},m}},mt=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ne=ht.bind();mt.forEach(function(e){ne[e]=ne(e)});/**
 * @mui/styled-engine v6.1.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function gt(e,t){return ne(e,t)}const yt=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},me=e=>e,bt=()=>{let e=me;return{configure(t){e=t},generate(t){return e(t)},reset(){e=me}}},vt=bt();function Pe(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Pe(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function V(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Pe(e))&&(r&&(r+=" "),r+=t);return r}const St={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function we(e,t,n="Mui"){const r=St[t];return r?`${n}-${r}`:`${vt.generate(e)}-${t}`}function Re(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=we(e,o,n)}),r}const xt=et();function te(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}function re(e,t,n){return Rt(t)?n:t[e]||t}const G=Symbol("mui.processed_props");function K(e,t,n){if(G in e)return e[G];const r={...e,theme:re(t,e.theme,n)};return e[G]=r,r[G]=r,r}function Pt(e){return e?(t,n)=>n[e]:null}function J(e,t){var r;const n=typeof e=="function"?e(t):e;if(Array.isArray(n))return n.flatMap(o=>J(o,t));if(Array.isArray(n==null?void 0:n.variants)){const{variants:o,...i}=n;let s=i,l;e:for(let u=0;u<o.length;u+=1){const a=o[u];if(typeof a.props=="function"){if(l??(l={...t,...t.ownerState,ownerState:t.ownerState}),!a.props(l))continue}else for(const f in a.props)if(t[f]!==a.props[f]&&((r=t.ownerState)==null?void 0:r[f])!==a.props[f])continue e;Array.isArray(s)||(s=[s]),typeof a.style=="function"?(l??(l={...t,...t.ownerState,ownerState:t.ownerState}),s.push(a.style(l))):s.push(a.style)}return s}return n}function wt(e={}){const{themeId:t,defaultTheme:n=xt,rootShouldForwardProp:r=te,slotShouldForwardProp:o=te}=e,i=l=>tt(K(l,t,n));return i.__mui_systemSx=!0,(l,u={})=>{yt(l,h=>h.filter(v=>!(v!=null&&v.__mui_systemSx)));const{name:a,slot:f,skipVariantsResolver:y,skipSx:k,overridesResolver:R=Pt(Tt(f)),...m}=u,g=y!==void 0?y:f&&f!=="Root"&&f!=="root"||!1,b=k||!1;let F,E=te;f==="Root"||f==="root"?E=r:f?E=o:Ct(l)&&(E=void 0);const C=gt(l,{shouldForwardProp:E,label:F,...m}),p=h=>typeof h=="function"&&h.__emotion_real!==h||nt(h)?v=>J(h,K(v,t,n)):h,S=(h,...v)=>{let _=p(h);const T=v?v.map(p):[];a&&R&&T.push(P=>{const w=re(t,P.theme,n);if(!w.components||!w.components[a]||!w.components[a].styleOverrides)return null;const M=w.components[a].styleOverrides,N={},A=K(P,t,n);for(const B in M)N[B]=J(M[B],A);return R(P,N)}),a&&!g&&T.push(P=>{var N,A;const w=re(t,P.theme,n),M=(A=(N=w==null?void 0:w.components)==null?void 0:N[a])==null?void 0:A.variants;return M?J({variants:M},K(P,t,n)):null}),b||T.push(i);const x=T.length-v.length;if(Array.isArray(h)&&x>0){const P=new Array(x).fill("");_=[...h,...P],_.raw=[...h.raw,...P]}const I=C(_,...T);return l.muiName&&(I.muiName=l.muiName),I};return C.withConfig&&(S.withConfig=C.withConfig),S}}function Rt(e){for(const t in e)return!1;return!0}function Ct(e){return typeof e=="string"&&e.charCodeAt(0)>96}function Tt(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}const kt=typeof window<"u"?c.useLayoutEffect:c.useEffect;function Mt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Z(e){const t=c.useRef(e);return kt(()=>{t.current=e}),c.useRef((...n)=>(0,t.current)(...n)).current}function ge(...e){return c.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Mt(n,t)})},e)}const ye={};function Ce(e,t){const n=c.useRef(ye);return n.current===ye&&(n.current=e(t)),n}const Et=[];function _t(e){c.useEffect(e,Et)}class se{constructor(){W(this,"currentId",null);W(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});W(this,"disposeEffect",()=>this.clear)}static create(){return new se}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function At(){const e=Ce(se.create).current;return _t(e.disposeEffect),e}function be(e){try{return e.matches(":focus-visible")}catch{}return!1}function Ot(e,t,n=void 0){const r={};for(const o in e){const i=e[o];let s="",l=!0;for(let u=0;u<i.length;u+=1){const a=i[u];a&&(s+=(l===!0?"":" ")+t(a),l=!1,n&&n[a]&&(s+=" "+n[a]))}r[o]=s}return r}const Ft=rt();function It(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Nt=e=>It(e)&&e!=="classes",ae=wt({themeId:ot,defaultTheme:Ft,rootShouldForwardProp:Nt}),ve={theme:void 0};function dn(e){let t,n;return r=>{let o=t;return(o===void 0||r.theme!==n)&&(ve.theme=r.theme,o=e(ve),t=o,n=r.theme),o}}function Te(e){return it(e)}function Vt(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}const Se=q.createContext(null);function le(e,t){var n=function(i){return t&&c.isValidElement(i)?t(i):i},r=Object.create(null);return e&&c.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function Lt(e,t){e=e||{},t=t||{};function n(f){return f in t?t[f]:e[f]}var r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var s,l={};for(var u in t){if(r[u])for(s=0;s<r[u].length;s++){var a=r[u][s];l[r[u][s]]=n(a)}l[u]=n(u)}for(s=0;s<o.length;s++)l[o[s]]=n(o[s]);return l}function j(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Dt(e,t){return le(e.children,function(n){return c.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:j(n,"appear",e),enter:j(n,"enter",e),exit:j(n,"exit",e)})})}function Bt(e,t,n){var r=le(e.children),o=Lt(t,r);return Object.keys(o).forEach(function(i){var s=o[i];if(c.isValidElement(s)){var l=i in t,u=i in r,a=t[i],f=c.isValidElement(a)&&!a.props.in;u&&(!l||f)?o[i]=c.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:j(s,"exit",e),enter:j(s,"enter",e)}):!u&&l&&!f?o[i]=c.cloneElement(s,{in:!1}):u&&l&&c.isValidElement(a)&&(o[i]=c.cloneElement(s,{onExited:n.bind(null,s),in:a.props.in,exit:j(s,"exit",e),enter:j(s,"enter",e)}))}}),o}var zt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},jt={component:"div",childFactory:function(t){return t}},ue=function(e){st(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=i.handleExited.bind(at(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var s=i.children,l=i.handleExited,u=i.firstRender;return{children:u?Dt(o,l):Bt(o,s,l),firstRender:!1}},n.handleExited=function(o,i){var s=le(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(l){var u=xe({},l.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,i=o.component,s=o.childFactory,l=Vt(o,["component","childFactory"]),u=this.state.contextValue,a=zt(this.state.children).map(s);return delete l.appear,delete l.enter,delete l.exit,i===null?q.createElement(Se.Provider,{value:u},a):q.createElement(Se.Provider,{value:u},q.createElement(i,l,a))},t}(q.Component);ue.propTypes={};ue.defaultProps=jt;class Q{constructor(){W(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Q}static use(){const t=Ce(Q.create).current,[n,r]=c.useState(!1);return t.shouldMount=n,t.setShouldMount=r,c.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=$t(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function Ut(){return Q.use()}function $t(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});return n.resolve=e,n.reject=t,n}function Ht(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:i,rippleSize:s,in:l,onExited:u,timeout:a}=e,[f,y]=c.useState(!1),k=V(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),R={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},m=V(n.child,f&&n.childLeaving,r&&n.childPulsate);return!l&&!f&&y(!0),c.useEffect(()=>{if(!l&&u!=null){const g=setTimeout(u,a);return()=>{clearTimeout(g)}}},[u,l,a]),U.jsx("span",{className:k,style:R,children:U.jsx("span",{className:m})})}const O=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),oe=550,Wt=80,qt=ie`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Xt=ie`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Yt=ie`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Gt=ae("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Kt=ae(Ht,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${O.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${qt};
    animation-duration: ${oe}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${O.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${O.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${O.childLeaving} {
    opacity: 0;
    animation-name: ${Xt};
    animation-duration: ${oe}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${O.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Yt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Zt=c.forwardRef(function(t,n){const r=Te({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...l}=r,[u,a]=c.useState([]),f=c.useRef(0),y=c.useRef(null);c.useEffect(()=>{y.current&&(y.current(),y.current=null)},[u]);const k=c.useRef(!1),R=At(),m=c.useRef(null),g=c.useRef(null),b=c.useCallback(p=>{const{pulsate:S,rippleX:h,rippleY:v,rippleSize:_,cb:T}=p;a(x=>[...x,U.jsx(Kt,{classes:{ripple:V(i.ripple,O.ripple),rippleVisible:V(i.rippleVisible,O.rippleVisible),ripplePulsate:V(i.ripplePulsate,O.ripplePulsate),child:V(i.child,O.child),childLeaving:V(i.childLeaving,O.childLeaving),childPulsate:V(i.childPulsate,O.childPulsate)},timeout:oe,pulsate:S,rippleX:h,rippleY:v,rippleSize:_},f.current)]),f.current+=1,y.current=T},[i]),F=c.useCallback((p={},S={},h=()=>{})=>{const{pulsate:v=!1,center:_=o||S.pulsate,fakeElement:T=!1}=S;if((p==null?void 0:p.type)==="mousedown"&&k.current){k.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(k.current=!0);const x=T?null:g.current,I=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let P,w,M;if(_||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)P=Math.round(I.width/2),w=Math.round(I.height/2);else{const{clientX:N,clientY:A}=p.touches&&p.touches.length>0?p.touches[0]:p;P=Math.round(N-I.left),w=Math.round(A-I.top)}if(_)M=Math.sqrt((2*I.width**2+I.height**2)/3),M%2===0&&(M+=1);else{const N=Math.max(Math.abs((x?x.clientWidth:0)-P),P)*2+2,A=Math.max(Math.abs((x?x.clientHeight:0)-w),w)*2+2;M=Math.sqrt(N**2+A**2)}p!=null&&p.touches?m.current===null&&(m.current=()=>{b({pulsate:v,rippleX:P,rippleY:w,rippleSize:M,cb:h})},R.start(Wt,()=>{m.current&&(m.current(),m.current=null)})):b({pulsate:v,rippleX:P,rippleY:w,rippleSize:M,cb:h})},[o,b,R]),E=c.useCallback(()=>{F({},{pulsate:!0})},[F]),C=c.useCallback((p,S)=>{if(R.clear(),(p==null?void 0:p.type)==="touchend"&&m.current){m.current(),m.current=null,R.start(0,()=>{C(p,S)});return}m.current=null,a(h=>h.length>0?h.slice(1):h),y.current=S},[R]);return c.useImperativeHandle(n,()=>({pulsate:E,start:F,stop:C}),[E,F,C]),U.jsx(Gt,{className:V(O.root,i.root,s),ref:g,...l,children:U.jsx(ue,{component:null,exit:!0,children:u})})});function Jt(e){return we("MuiButtonBase",e)}const Qt=Re("MuiButtonBase",["root","disabled","focusVisible"]),en=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,s=Ot({root:["root",t&&"disabled",n&&"focusVisible"]},Jt,o);return n&&r&&(s.root+=` ${r}`),s},tn=ae("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Qt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),fn=c.forwardRef(function(t,n){const r=Te({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:l,component:u="button",disabled:a=!1,disableRipple:f=!1,disableTouchRipple:y=!1,focusRipple:k=!1,focusVisibleClassName:R,LinkComponent:m="a",onBlur:g,onClick:b,onContextMenu:F,onDragLeave:E,onFocus:C,onFocusVisible:p,onKeyDown:S,onKeyUp:h,onMouseDown:v,onMouseLeave:_,onMouseUp:T,onTouchEnd:x,onTouchMove:I,onTouchStart:P,tabIndex:w=0,TouchRippleProps:M,touchRippleRef:N,type:A,...B}=r,$=c.useRef(null),L=Ut(),ke=ge(L.ref,N),[z,X]=c.useState(!1);a&&z&&X(!1),c.useImperativeHandle(o,()=>({focusVisible:()=>{X(!0),$.current.focus()}}),[]);const Me=L.shouldMount&&!f&&!a;c.useEffect(()=>{z&&k&&!f&&L.pulsate()},[f,k,z,L]);function D(d,de,$e=y){return Z(fe=>(de&&de(fe),$e||L[d](fe),!0))}const Ee=D("start",v),_e=D("stop",F),Ae=D("stop",E),Oe=D("stop",T),Fe=D("stop",d=>{z&&d.preventDefault(),_&&_(d)}),Ie=D("start",P),Ne=D("stop",x),Ve=D("stop",I),Le=D("stop",d=>{be(d.target)||X(!1),g&&g(d)},!1),De=Z(d=>{$.current||($.current=d.currentTarget),be(d.target)&&(X(!0),p&&p(d)),C&&C(d)}),ee=()=>{const d=$.current;return u&&u!=="button"&&!(d.tagName==="A"&&d.href)},Be=Z(d=>{k&&!d.repeat&&z&&d.key===" "&&L.stop(d,()=>{L.start(d)}),d.target===d.currentTarget&&ee()&&d.key===" "&&d.preventDefault(),S&&S(d),d.target===d.currentTarget&&ee()&&d.key==="Enter"&&!a&&(d.preventDefault(),b&&b(d))}),ze=Z(d=>{k&&d.key===" "&&z&&!d.defaultPrevented&&L.stop(d,()=>{L.pulsate(d)}),h&&h(d),b&&d.target===d.currentTarget&&ee()&&d.key===" "&&!d.defaultPrevented&&b(d)});let Y=u;Y==="button"&&(B.href||B.to)&&(Y=m);const H={};Y==="button"?(H.type=A===void 0?"button":A,H.disabled=a):(!B.href&&!B.to&&(H.role="button"),a&&(H["aria-disabled"]=a));const je=ge(n,$),ce={...r,centerRipple:i,component:u,disabled:a,disableRipple:f,disableTouchRipple:y,focusRipple:k,tabIndex:w,focusVisible:z},Ue=en(ce);return U.jsxs(tn,{as:Y,className:V(Ue.root,l),ownerState:ce,onBlur:Le,onClick:b,onContextMenu:_e,onFocus:De,onKeyDown:Be,onKeyUp:ze,onMouseDown:Ee,onMouseLeave:Fe,onMouseUp:Oe,onDragLeave:Ae,onTouchEnd:Ne,onTouchMove:Ve,onTouchStart:Ie,ref:je,tabIndex:a?-1:w,type:A,...H,...B,children:[s,Me?U.jsx(Zt,{ref:ke,center:i,...M}):null]})});function nn(e){return typeof e.main=="string"}function rn(e,t=[]){if(!nn(e))return!1;for(const n of t)if(!e.hasOwnProperty(n)||typeof e[n]!="string")return!1;return!0}function pn(e=[]){return([,t])=>t&&rn(t,e)}export{fn as B,we as a,V as b,pn as c,Ot as d,Re as g,dn as m,Nt as r,ae as s,Te as u};
