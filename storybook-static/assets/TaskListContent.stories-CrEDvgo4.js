import{j as n}from"./jsx-runtime-DWbWqHZ-.js";import{f as g,g as L,c as B}from"./index-DJI_SQV9.js";import{I as ne}from"./index-ClKlCKSv.js";import{I as oe}from"./index-uWs2XY0m.js";import{r as f}from"./index-l2PZgWEW.js";import{a as U,g as H,b as z,r as V,c as _,f as A,m as se,e as O,u as ae}from"./createSimplePaletteValueFilter-CXzVnbi1.js";import{u as re,c as F}from"./useFormControl-CER4LeYO.js";import{B as ie}from"./ButtonBase-DazHDuqe.js";import{u as ce}from"./useControlled-E1PzBlxm.js";import"./extends-CF3RwP-h.js";import"./TransitionGroupContext-Dg4lKULS.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";function le(e){return U("PrivateSwitchBase",e)}H("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const de=e=>{const{classes:t,checked:o,disabled:s,edge:a}=e,c={root:["root",o&&"checked",s&&"disabled",a&&`edge${g(a)}`],input:["input"]};return A(c,le,t)},pe=z(ie)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:t})=>e==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:t})=>e==="end"&&t.size!=="small",style:{marginRight:-12}}]}),ue=z("input",{shouldForwardProp:V})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),me=f.forwardRef(function(t,o){const{autoFocus:s,checked:a,checkedIcon:c,className:u,defaultChecked:r,disabled:d,disableFocusRipple:i=!1,edge:m=!1,icon:j,id:w,inputProps:S,inputRef:y,name:x,onBlur:h,onChange:k,onFocus:R,readOnly:G,required:J=!1,tabIndex:K,type:b,value:P,...Q}=t,[D,X]=ce({controlled:a,default:!!r,name:"SwitchBase",state:"checked"}),p=re(),Y=l=>{R&&R(l),p&&p.onFocus&&p.onFocus(l)},Z=l=>{h&&h(l),p&&p.onBlur&&p.onBlur(l)},ee=l=>{if(l.nativeEvent.defaultPrevented)return;const q=l.target.checked;X(q),k&&k(l,q)};let C=d;p&&typeof C>"u"&&(C=p.disabled);const te=b==="checkbox"||b==="radio",I={...t,checked:D,disabled:C,disableFocusRipple:i,edge:m},$=de(I);return n.jsxs(pe,{component:"span",className:_($.root,u),centerRipple:!0,focusRipple:!i,disabled:C,tabIndex:null,role:void 0,onFocus:Y,onBlur:Z,ownerState:I,ref:o,...Q,children:[n.jsx(ue,{autoFocus:s,checked:a,defaultChecked:r,className:$.input,disabled:C,id:te?w:void 0,name:x,onChange:ee,readOnly:G,ref:y,required:J,ownerState:I,tabIndex:K,type:b,...b==="checkbox"&&P===void 0?{}:{value:P},...S}),D?c:j]})}),he=F(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ke=F(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Ce=F(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function fe(e){return U("MuiCheckbox",e)}const T=H("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),ge=e=>{const{classes:t,indeterminate:o,color:s,size:a}=e,c={root:["root",o&&"indeterminate",`color${g(s)}`,`size${g(a)}`]},u=A(c,fe,t);return{...t,...u}},ye=z(me,{shouldForwardProp:e=>V(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,t[`size${g(o.size)}`],o.color!=="default"&&t[`color${g(o.color)}`]]}})(se(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:L(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(O()).map(([t])=>({props:{color:t,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:L(e.palette[t].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(O()).map(([t])=>({props:{color:t},style:{[`&.${T.checked}, &.${T.indeterminate}`]:{color:(e.vars||e).palette[t].main},[`&.${T.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),xe=n.jsx(ke,{}),be=n.jsx(he,{}),ve=n.jsx(Ce,{}),je=f.forwardRef(function(t,o){const s=ae({props:t,name:"MuiCheckbox"}),{checkedIcon:a=xe,color:c="primary",icon:u=be,indeterminate:r=!1,indeterminateIcon:d=ve,inputProps:i,size:m="medium",disableRipple:j=!1,className:w,...S}=s,y=r?d:u,x=r?d:a,h={...s,disableRipple:j,color:c,indeterminate:r,size:m},k=ge(h);return n.jsx(ye,{type:"checkbox",inputProps:{"data-indeterminate":r,...i},icon:f.cloneElement(y,{fontSize:y.props.fontSize??m}),checkedIcon:f.cloneElement(x,{fontSize:x.props.fontSize??m}),ownerState:h,ref:o,className:_(k.root,w),...S,classes:k})}),W=({tasks:e,onCompletedClick:t,onDeleteClick:o})=>n.jsx("div",{style:{width:"100%",height:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:e.length<1?n.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"0.1rem"},children:[n.jsx(oe,{name:"SadFace",color:B.accent[500],size:100}),n.jsx("h3",{style:{color:B.accent[500],fontWeight:"bold"},children:"No hay tareas para mostrar"})]}):e.map(s=>n.jsxs("div",{style:{background:B.accent[500],display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"8px",padding:"0.2rem",width:"100%"},children:[n.jsx(je,{checked:s.isCompleted,onChange:()=>t(s.id),style:{color:"white"}}),n.jsx("h3",{style:{textDecoration:s.isCompleted?"line-through":"none",color:"white"},children:s.title}),n.jsx(ne,{icon:"Delete",iconSize:20,onClick:()=>o(s.id)})]},s.id))});W.__docgenInfo={description:"",methods:[],displayName:"TaskList",props:{tasks:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id: number;\r
  title: string;\r
  isCompleted: boolean;\r
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}}]}}],raw:"Task[]"},description:""},onDeleteClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""},onCompletedClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""}}};const Oe={title:"Components/TaskList",component:W,parameters:{layout:"centered"}},v={args:{tasks:[{id:1,title:"Task 1",isCompleted:!1},{id:2,title:"Task 2",isCompleted:!0}],onCompletedClick:()=>alert("Task completed"),onDeleteClick:()=>alert("Task deleted")},argTypes:{tasks:{action:"array",description:"Lista de tareas"},onCompletedClick:{action:"completed",description:"Función que se ejecuta al completar una tarea"},onDeleteClick:{action:"deleted",description:"Función que se ejecuta al eliminar una tarea"}},decorators:[(e,t)=>{const{args:o}=t,[s,a]=f.useState(o.tasks),c=r=>{a(d=>d.map(i=>i.id===r?{...i,isCompleted:!i.isCompleted}:i))},u=r=>{a(d=>d.filter(i=>i.id!==r))};return n.jsx("div",{style:{width:"500px"},children:n.jsx(e,{...t,args:{...o,tasks:s,onCompletedClick:c,onDeleteClick:u}})})}]};var M,E,N;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    tasks: [{
      id: 1,
      title: "Task 1",
      isCompleted: false
    }, {
      id: 2,
      title: "Task 2",
      isCompleted: true
    }],
    onCompletedClick: () => alert("Task completed"),
    onDeleteClick: () => alert("Task deleted")
  },
  argTypes: {
    tasks: {
      action: "array",
      description: "Lista de tareas"
    },
    onCompletedClick: {
      action: "completed",
      description: "Función que se ejecuta al completar una tarea"
    },
    onDeleteClick: {
      action: "deleted",
      description: "Función que se ejecuta al eliminar una tarea"
    }
  },
  decorators: [(Story, context) => {
    const {
      args
    } = context;
    const [tasks, setTasks] = useState(args.tasks);
    const handleCompletedClick = (id: number) => {
      setTasks(prevTasks => prevTasks.map(task => task.id === id ? {
        ...task,
        isCompleted: !task.isCompleted
      } : task));
    };
    const handleDeleteClick = (id: number) => {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };
    return <div style={{
      width: "500px"
    }}>\r
          <Story {...context} args={{
        ...args,
        tasks,
        onCompletedClick: handleCompletedClick,
        onDeleteClick: handleDeleteClick
      }} />\r
        </div>;
  }]
}`,...(N=(E=v.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const Me=["Content"];export{v as Content,Me as __namedExportsOrder,Oe as default};
