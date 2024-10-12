import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as u}from"./index-l2PZgWEW.js";import{B as a}from"./index-fPlSVCVO.js";import{I as x}from"./index-CirDA-Y5.js";import{c as s}from"./index-Cg54vCA9.js";import{M as f,I as g}from"./index-BQvj-Mq3.js";import{B as i}from"./Box-C_UGluD9.js";import"./DefaultPropsProvider-cOVB89x5.js";import"./createTheme-CsYLa6l4.js";import"./extends-CF3RwP-h.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-SyNocb0t.js";import"./TransitionGroupContext-Cnw3LXxy.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-DICjWb1i.js";import"./index-uWs2XY0m.js";import"./useSlot-oLrA4YFj.js";import"./useFormControl-Aflwblr5.js";import"./Grow-Ds_HAtfP.js";import"./index-BtTJd_qj.js";import"./useTheme-AnaV8AC8.js";import"./useThemeWithoutDefault-f5lx2gCs.js";import"./index-CxXwAShx.js";import"./Typography-DzSA_3sq.js";import"./GlobalStyles-COFHWy_5.js";import"./useControlled-E1PzBlxm.js";import"./createSvgIcon-fL-PdnSx.js";const c=({open:o,onClose:t,children:h,title:r,width:y="30%"})=>e.jsx(f,{open:o,onClose:t,sx:{backdropFilter:"blur(8px)"},children:e.jsxs(i,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:y,bgcolor:"white",borderRadius:"8px",p:4},children:[e.jsxs(i,{display:"flex",justifyContent:r?"space-between":"flex-end",alignItems:"center",children:[r&&e.jsx("h2",{style:{color:s.accent[500]},children:r}),e.jsx(x,{icon:"Close",iconSize:24,mode:"quaternary",iconColor:s.accent[500],onClick:t})]}),e.jsx(i,{children:h})]})});c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"30%"',computed:!1}}}};const m=()=>{const[o,t]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(a,{label:"Open Modal",onClick:()=>t(!0)}),o&&e.jsx(c,{children:e.jsx(j,{setShowModal:t}),onClose:()=>t(!1),open:o,title:"Add Todo",width:"50%"})]})},j=({setShowModal:o})=>e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(g,{type:"text",label:"Add Todo",placeholder:"Agrega tu task",sx:{borderColor:"black"}}),e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",gap:"5px"},children:[e.jsx(a,{mode:"text",label:"Cancelar",onClick:()=>o(!1)}),e.jsx(a,{label:"Agregar",mode:"primary"})]})]});m.__docgenInfo={description:"",methods:[],displayName:"ModalExample"};const P={title:"Components/Modal",component:m,parameters:{layout:"centered"}},n={args:{},argTypes:{children:{description:"The content of the modal",type:{name:"React.ReactNode"},control:{type:"none"}},onClose:{description:"Function to close the modal",type:{name:"() => void"},control:{type:"none"}},open:{description:"Boolean to show or hide the modal",type:{name:"boolean"},control:{type:"none"}},title:{description:"Title of the modal",type:{name:"string"},control:{type:"none"}},width:{description:"Width of the modal",type:{name:"string"},control:{type:"none"}}}};var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  argTypes: {
    children: {
      description: "The content of the modal",
      type: {
        name: "React.ReactNode"
      },
      control: {
        type: "none"
      }
    },
    onClose: {
      description: "Function to close the modal",
      type: {
        name: "() => void"
      },
      control: {
        type: "none"
      }
    },
    open: {
      description: "Boolean to show or hide the modal",
      type: {
        name: "boolean"
      },
      control: {
        type: "none"
      }
    },
    title: {
      description: "Title of the modal",
      type: {
        name: "string"
      },
      control: {
        type: "none"
      }
    },
    width: {
      description: "Width of the modal",
      type: {
        name: "string"
      },
      control: {
        type: "none"
      }
    }
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const Q=["Content"];export{n as Content,Q as __namedExportsOrder,P as default};
