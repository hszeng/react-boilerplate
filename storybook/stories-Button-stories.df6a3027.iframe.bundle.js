"use strict";(self.webpackChunk_forsyth_barr_ui_components=self.webpackChunk_forsyth_barr_ui_components||[]).push([[791],{"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledButton=styled_components_browser_esm.Ay.button`
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
`,Button=({children,variant="primary",size="medium",disabled=!1,onClick,type="button",className="",...props})=>(0,jsx_runtime.jsx)(StyledButton,{$variant:variant,$size:size,disabled,onClick,type,className,...props,children}),Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"| 'primary'\n| 'secondary'\n| 'outline'\n| 'ghost'\n| 'danger'\n| 'success'\n| 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/stories/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllSizes:()=>AllSizes,AllVariants:()=>AllVariants,Danger:()=>Danger,Disabled:()=>Disabled,Large:()=>Large,Outline:()=>Outline,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_components_Button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Button/index.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","danger","success","warning"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},onClick:{action:"clicked"}}},Primary={args:{children:"Primary Button",variant:"primary"}},Secondary={args:{children:"Secondary Button",variant:"secondary"}},Outline={args:{children:"Outline Button",variant:"outline"}},Danger={args:{children:"Danger Button",variant:"danger"}},Small={args:{children:"Small Button",size:"small"}},Large={args:{children:"Large Button",size:"large"}},Disabled={args:{children:"Disabled Button",disabled:!0}},AllVariants={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"primary",children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"secondary",children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"outline",children:"Outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"danger",children:"Danger"})]})},AllSizes={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"small",children:"Small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"medium",children:"Medium"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"large",children:"Large"})]})},__namedExportsOrder=["Primary","Secondary","Outline","Danger","Small","Large","Disabled","AllVariants","AllSizes"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Primary Button',\n    variant: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Secondary Button',\n    variant: 'secondary'\n  }\n}",...Secondary.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Outline Button',\n    variant: 'outline'\n  }\n}",...Outline.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Danger Button',\n    variant: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Small Button',\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Large Button',\n    size: 'large'\n  }\n}",...Large.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Disabled Button',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},AllVariants.parameters={...AllVariants.parameters,docs:{...AllVariants.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: \'flex\',\n    gap: \'1rem\',\n    flexWrap: \'wrap\'\n  }}>\n      <Button variant="primary">Primary</Button>\n      <Button variant="secondary">Secondary</Button>\n      <Button variant="outline">Outline</Button>\n      <Button variant="danger">Danger</Button>\n    </div>\n}',...AllVariants.parameters?.docs?.source}}},AllSizes.parameters={...AllSizes.parameters,docs:{...AllSizes.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'flex',\n    gap: '1rem',\n    alignItems: 'center'\n  }}>\n      <Button size=\"small\">Small</Button>\n      <Button size=\"medium\">Medium</Button>\n      <Button size=\"large\">Large</Button>\n    </div>\n}",...AllSizes.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-Button-stories.df6a3027.iframe.bundle.js.map