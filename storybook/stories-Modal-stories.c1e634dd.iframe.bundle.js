"use strict";(self.webpackChunk_forsyth_barr_ui_components=self.webpackChunk_forsyth_barr_ui_components||[]).push([[850],{"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledButton=styled_components_browser_esm.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  box-shadow: var(--shadow-sm);

  ${props=>((variant="primary")=>{switch(variant){case"secondary":return styled_components_browser_esm.AH`
        background-color: var(--color-secondary);
        color: white;
        &:hover:not(:disabled) {
          background-color: #5a6268;
        }
      `;case"outline":return styled_components_browser_esm.AH`
        background-color: transparent;
        color: var(--color-primary);
        border: 2px solid var(--color-primary);
        &:hover:not(:disabled) {
          background-color: var(--color-primary);
          color: white;
        }
      `;case"danger":return styled_components_browser_esm.AH`
        background-color: var(--color-danger);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--color-error-hover);
        }
      `;default:return styled_components_browser_esm.AH`
        background-color: var(--color-primary);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--color-primary-hover);
        }
      `}})(props.$variant)}
  ${props=>((size="medium")=>{switch(size){case"small":return styled_components_browser_esm.AH`
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        border-radius: 0.25rem;
      `;case"large":return styled_components_browser_esm.AH`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
        border-radius: 0.5rem;
      `;default:return styled_components_browser_esm.AH`
        padding: 0.625rem 1.25rem;
        font-size: 1rem;
        border-radius: var(--border-radius);
      `}})(props.$size)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: var(--color-background-disabled);
    color: var(--color-text-disabled);
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: var(--shadow-sm);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,Button=({children,variant="primary",size="medium",disabled=!1,onClick,type="button",className="",...props})=>(0,jsx_runtime.jsx)(StyledButton,{$variant:variant,$size:size,disabled,onClick,type,className,...props,children}),Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"| 'primary'\n| 'secondary'\n| 'outline'\n| 'ghost'\n| 'danger'\n| 'success'\n| 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/stories/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllSizes:()=>AllSizes,Basic:()=>Basic,ComplexContent:()=>ComplexContent,FormModal:()=>FormModal,Large:()=>Large,Small:()=>Small,WithoutTitle:()=>WithoutTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const Overlay=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
`,ModalContainer=styled_components_browser_esm.Ay.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  animation: modalSlideIn 0.3s ease-out;

  ${props=>((size="medium")=>{switch(size){case"small":return styled_components_browser_esm.AH`
        max-width: 400px;
        width: 90%;
      `;case"large":return styled_components_browser_esm.AH`
        max-width: 800px;
        width: 90%;
      `;default:return styled_components_browser_esm.AH`
        max-width: 600px;
        width: 90%;
      `}})(props.$size)}

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`,Header=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem 0 1.25rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 0.75rem;
`,Title=styled_components_browser_esm.Ay.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
`,CloseButton=styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text-secondary);
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-background-hover);
    color: var(--color-text);
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,Content=styled_components_browser_esm.Ay.div`
  padding: 0 1.25rem 1.25rem 1.25rem;
`,Modal=({isOpen,onClose,title,size="medium",children,className=""})=>((0,react.useEffect)(()=>{const handleEscape=event=>{"Escape"===event.key&&onClose()};return isOpen&&(document.addEventListener("keydown",handleEscape),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",handleEscape),document.body.style.overflow="unset"}},[isOpen,onClose]),isOpen?(0,jsx_runtime.jsx)(Overlay,{onClick:onClose,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||onClose()},role:"button",tabIndex:0,children:(0,jsx_runtime.jsxs)(ModalContainer,{$size:size,className,onClick:e=>e.stopPropagation(),children:[(title||onClose)&&(0,jsx_runtime.jsxs)(Header,{children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),onClose&&(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,"aria-label":"Close modal",children:"×"})]}),(0,jsx_runtime.jsx)(Content,{children})]})}):null),Modal_Modal=Modal;Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'full'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};var Button=__webpack_require__("./src/components/Button/index.tsx");const Modal_stories={title:"Components/Modal",component:Modal_Modal,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large","full"]},showCloseButton:{control:{type:"boolean"}},closeOnOverlayClick:{control:{type:"boolean"}}}},ModalWrapper=args=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.A,{onClick:()=>setIsOpen(!0),children:"Open Modal"}),(0,jsx_runtime.jsx)(Modal_Modal,{...args,isOpen,onClose:()=>setIsOpen(!1)})]})},Basic={render:args=>(0,jsx_runtime.jsx)(ModalWrapper,{...args}),args:{title:"Basic Modal",children:"This is a basic modal with some content."}},Small={render:args=>(0,jsx_runtime.jsx)(ModalWrapper,{...args}),args:{title:"Small Modal",size:"small",children:"This is a small modal."}},Large={render:args=>(0,jsx_runtime.jsx)(ModalWrapper,{...args}),args:{title:"Large Modal",size:"large",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:"This is a large modal with more content."}),(0,jsx_runtime.jsx)("p",{children:"It can contain multiple paragraphs and other elements."}),(0,jsx_runtime.jsx)("div",{style:{marginTop:"1rem"},children:(0,jsx_runtime.jsx)(Button.A,{variant:"primary",children:"Action Button"})})]})}},WithoutTitle={render:args=>(0,jsx_runtime.jsx)(ModalWrapper,{...args}),args:{children:"This modal has no title."}},ComplexContent={render:args=>(0,jsx_runtime.jsx)(ModalWrapper,{...args}),args:{title:"Complex Modal",size:"large",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:"Modal Content"}),(0,jsx_runtime.jsx)("p",{children:"This modal contains complex content with multiple elements:"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"List item 1"}),(0,jsx_runtime.jsx)("li",{children:"List item 2"}),(0,jsx_runtime.jsx)("li",{children:"List item 3"})]}),(0,jsx_runtime.jsxs)("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"},children:[(0,jsx_runtime.jsx)(Button.A,{variant:"primary",children:"Save"}),(0,jsx_runtime.jsx)(Button.A,{variant:"outline",children:"Cancel"})]})]})}},FormModal={render:args=>(0,jsx_runtime.jsx)(ModalWrapper,{...args}),args:{title:"Form Modal",size:"medium",children:(0,jsx_runtime.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,jsx_runtime.jsx)("label",{htmlFor:"name",style:{display:"block",marginBottom:"0.5rem"},children:"Name:"}),(0,jsx_runtime.jsx)("input",{id:"name",type:"text",style:{width:"100%",padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"},placeholder:"Enter your name"})]}),(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,jsx_runtime.jsx)("label",{htmlFor:"email",style:{display:"block",marginBottom:"0.5rem"},children:"Email:"}),(0,jsx_runtime.jsx)("input",{id:"email",type:"email",style:{width:"100%",padding:"0.5rem",border:"1px solid #ccc",borderRadius:"4px"},placeholder:"Enter your email"})]}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[(0,jsx_runtime.jsx)(Button.A,{variant:"outline",type:"button",children:"Cancel"}),(0,jsx_runtime.jsx)(Button.A,{variant:"primary",type:"submit",children:"Submit"})]})]})}},AllSizes={render:()=>{const[openModal,setOpenModal]=(0,react.useState)(null),openModalHandler=size=>setOpenModal(size),closeModal=()=>setOpenModal(null);return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[(0,jsx_runtime.jsx)(Button.A,{onClick:()=>openModalHandler("small"),children:"Small Modal"}),(0,jsx_runtime.jsx)(Button.A,{onClick:()=>openModalHandler("medium"),children:"Medium Modal"}),(0,jsx_runtime.jsx)(Button.A,{onClick:()=>openModalHandler("large"),children:"Large Modal"}),(0,jsx_runtime.jsx)(Modal_Modal,{isOpen:"small"===openModal,onClose:closeModal,title:"Small Modal",size:"small",children:"This is a small modal."}),(0,jsx_runtime.jsx)(Modal_Modal,{isOpen:"medium"===openModal,onClose:closeModal,title:"Medium Modal",size:"medium",children:"This is a medium modal."}),(0,jsx_runtime.jsx)(Modal_Modal,{isOpen:"large"===openModal,onClose:closeModal,title:"Large Modal",size:"large",children:"This is a large modal."})]})}},__namedExportsOrder=["Basic","Small","Large","WithoutTitle","ComplexContent","FormModal","AllSizes"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: args => <ModalWrapper {...args} />,\n  args: {\n    title: 'Basic Modal',\n    children: 'This is a basic modal with some content.'\n  }\n}",...Basic.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  render: args => <ModalWrapper {...args} />,\n  args: {\n    title: 'Small Modal',\n    size: 'small',\n    children: 'This is a small modal.'\n  }\n}",...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  render: args => <ModalWrapper {...args} />,\n  args: {\n    title: 'Large Modal',\n    size: 'large',\n    children: <div>\n        <p>This is a large modal with more content.</p>\n        <p>It can contain multiple paragraphs and other elements.</p>\n        <div style={{\n        marginTop: '1rem'\n      }}>\n          <Button variant=\"primary\">Action Button</Button>\n        </div>\n      </div>\n  }\n}",...Large.parameters?.docs?.source}}},WithoutTitle.parameters={...WithoutTitle.parameters,docs:{...WithoutTitle.parameters?.docs,source:{originalSource:"{\n  render: args => <ModalWrapper {...args} />,\n  args: {\n    children: 'This modal has no title.'\n  }\n}",...WithoutTitle.parameters?.docs?.source}}},ComplexContent.parameters={...ComplexContent.parameters,docs:{...ComplexContent.parameters?.docs,source:{originalSource:"{\n  render: args => <ModalWrapper {...args} />,\n  args: {\n    title: 'Complex Modal',\n    size: 'large',\n    children: <div>\n        <h3>Modal Content</h3>\n        <p>This modal contains complex content with multiple elements:</p>\n        <ul>\n          <li>List item 1</li>\n          <li>List item 2</li>\n          <li>List item 3</li>\n        </ul>\n        <div style={{\n        marginTop: '1rem',\n        display: 'flex',\n        gap: '0.5rem'\n      }}>\n          <Button variant=\"primary\">Save</Button>\n          <Button variant=\"outline\">Cancel</Button>\n        </div>\n      </div>\n  }\n}",...ComplexContent.parameters?.docs?.source}}},FormModal.parameters={...FormModal.parameters,docs:{...FormModal.parameters?.docs,source:{originalSource:"{\n  render: args => <ModalWrapper {...args} />,\n  args: {\n    title: 'Form Modal',\n    size: 'medium',\n    children: <form onSubmit={e => e.preventDefault()}>\n        <div style={{\n        marginBottom: '1rem'\n      }}>\n          <label htmlFor=\"name\" style={{\n          display: 'block',\n          marginBottom: '0.5rem'\n        }}>\n            Name:\n          </label>\n          <input id=\"name\" type=\"text\" style={{\n          width: '100%',\n          padding: '0.5rem',\n          border: '1px solid #ccc',\n          borderRadius: '4px'\n        }} placeholder=\"Enter your name\" />\n        </div>\n        <div style={{\n        marginBottom: '1rem'\n      }}>\n          <label htmlFor=\"email\" style={{\n          display: 'block',\n          marginBottom: '0.5rem'\n        }}>\n            Email:\n          </label>\n          <input id=\"email\" type=\"email\" style={{\n          width: '100%',\n          padding: '0.5rem',\n          border: '1px solid #ccc',\n          borderRadius: '4px'\n        }} placeholder=\"Enter your email\" />\n        </div>\n        <div style={{\n        display: 'flex',\n        gap: '0.5rem',\n        justifyContent: 'flex-end'\n      }}>\n          <Button variant=\"outline\" type=\"button\">\n            Cancel\n          </Button>\n          <Button variant=\"primary\" type=\"submit\">\n            Submit\n          </Button>\n        </div>\n      </form>\n  }\n}",...FormModal.parameters?.docs?.source}}},AllSizes.parameters={...AllSizes.parameters,docs:{...AllSizes.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [openModal, setOpenModal] = useState<string | null>(null);\n    const openModalHandler = (size: string) => setOpenModal(size);\n    const closeModal = () => setOpenModal(null);\n    return <div style={{\n      display: 'flex',\n      gap: '1rem',\n      flexWrap: 'wrap'\n    }}>\n        <Button onClick={() => openModalHandler('small')}>Small Modal</Button>\n        <Button onClick={() => openModalHandler('medium')}>Medium Modal</Button>\n        <Button onClick={() => openModalHandler('large')}>Large Modal</Button>\n\n        <Modal isOpen={openModal === 'small'} onClose={closeModal} title=\"Small Modal\" size=\"small\">\n          This is a small modal.\n        </Modal>\n\n        <Modal isOpen={openModal === 'medium'} onClose={closeModal} title=\"Medium Modal\" size=\"medium\">\n          This is a medium modal.\n        </Modal>\n\n        <Modal isOpen={openModal === 'large'} onClose={closeModal} title=\"Large Modal\" size=\"large\">\n          This is a large modal.\n        </Modal>\n      </div>;\n  }\n}",...AllSizes.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-Modal-stories.c1e634dd.iframe.bundle.js.map