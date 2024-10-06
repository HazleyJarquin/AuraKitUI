import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as u}from"./index-l2PZgWEW.js";import{B as a}from"./index-Bqsebb4Q.js";import{I as x}from"./index-ClKlCKSv.js";import{c as s}from"./index-DJI_SQV9.js";import{M as f,I as g}from"./index-Cb5WUMwu.js";import{B as i}from"./Box-GMSSJVwc.js";import"./createSimplePaletteValueFilter-CXzVnbi1.js";import"./extends-CF3RwP-h.js";import"./ButtonBase-DazHDuqe.js";import"./TransitionGroupContext-Dg4lKULS.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-uWs2XY0m.js";import"./Grow-DSOBYFOl.js";import"./index-BtTJd_qj.js";import"./useTheme-aF8LXEHt.js";import"./useThemeWithoutDefault-bP39l20x.js";import"./useFormControl-CER4LeYO.js";import"./index-CxXwAShx.js";import"./Typography-Dt5z-Otx.js";import"./GlobalStyles-BJjePWzC.js";import"./useControlled-E1PzBlxm.js";const c=({open:o,onClose:n,children:h,title:r,width:y="30%"})=>e.jsx(f,{open:o,onClose:n,sx:{backdropFilter:"blur(8px)"},children:e.jsxs(i,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:y,bgcolor:"white",borderRadius:"8px",p:4},children:[e.jsxs(i,{display:"flex",justifyContent:r?"space-between":"flex-end",alignItems:"center",children:[r&&e.jsx("h2",{style:{color:s.accent[500]},children:r}),e.jsx(x,{icon:"Close",iconSize:24,mode:"quaternary",iconColor:s.accent[500],onClick:n})]}),e.jsx(i,{children:h})]})});c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"30%"',computed:!1}}}};const m=()=>{const[o,n]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(a,{label:"Open Modal",onClick:()=>n(!0)}),o&&e.jsx(c,{children:e.jsx(j,{setShowModal:n}),onClose:()=>n(!1),open:o,title:"Add Todo",width:"50%"})]})},j=({setShowModal:o})=>e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(g,{type:"text",label:"Add Todo",placeholder:"Agrega tu task",sx:{borderColor:"black"}}),e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",gap:"5px"},children:[e.jsx(a,{mode:"text",label:"Cancelar",onClick:()=>o(!1)}),e.jsx(a,{label:"Agregar",mode:"primary"})]})]});m.__docgenInfo={description:"",methods:[],displayName:"ModalExample"};const G={title:"Components/Modal",component:m,parameters:{layout:"centered"}},t={args:{},argTypes:{children:{description:"The content of the modal",type:{name:"React.ReactNode"},control:{type:"none"}},onClose:{description:"Function to close the modal",type:{name:"() => void"},control:{type:"none"}},open:{description:"Boolean to show or hide the modal",type:{name:"boolean"},control:{type:"none"}},title:{description:"Title of the modal",type:{name:"string"},control:{type:"none"}},width:{description:"Width of the modal",type:{name:"string"},control:{type:"none"}}}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const H=["Content"];export{t as Content,H as __namedExportsOrder,G as default};
