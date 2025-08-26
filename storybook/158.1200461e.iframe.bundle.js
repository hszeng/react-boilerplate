"use strict";(self.webpackChunk_forsyth_barr_ui_components=self.webpackChunk_forsyth_barr_ui_components||[]).push([[158],{"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledButton=styled_components_browser_esm.Ay.button`
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
`,Button=({children,variant="primary",size="medium",disabled=!1,onClick,type="button",className="",...props})=>(0,jsx_runtime.jsx)(StyledButton,{$variant:variant,$size:size,disabled,onClick,type,className,...props,children}),Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"| 'primary'\n| 'secondary'\n| 'outline'\n| 'ghost'\n| 'danger'\n| 'success'\n| 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Form/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Form_Form});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const FormContainer=styled_components_browser_esm.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,Header=styled_components_browser_esm.Ay.div`
  text-align: center;
  margin-bottom: 0.75rem;
`,Title=styled_components_browser_esm.Ay.h2`
  margin: 0 0 0.25rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
`,Subtitle=styled_components_browser_esm.Ay.p`
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
`,Content=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Form=({title,subtitle,onSubmit,children,className="",...props})=>(0,jsx_runtime.jsxs)(FormContainer,{onSubmit,className,...props,children:[(title||subtitle)&&(0,jsx_runtime.jsxs)(Header,{children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),subtitle&&(0,jsx_runtime.jsx)(Subtitle,{children:subtitle})]}),(0,jsx_runtime.jsx)(Content,{children})]}),Form_Form=Form;Form.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FormEvent) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent"},name:"e"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}}},"./src/components/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input_Input});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const InputContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,Label=styled_components_browser_esm.Ay.label`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.875rem;
`,StyledInput=styled_components_browser_esm.Ay.input`
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: all 0.2s ease-in-out;
  width: 100%;
  box-sizing: border-box;

  ${props=>((type="text")=>"textarea"===type?styled_components_browser_esm.AH`
      resize: vertical;
      min-height: 100px;
      font-family: inherit;
    `:styled_components_browser_esm.AH`
    height: 2.5rem;
  `)(props.type)}

  &::placeholder {
    color: var(--color-text-placeholder);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:hover:not(:focus) {
    border-color: var(--color-border-hover);
  }

  &:disabled {
    background-color: var(--color-background-disabled);
    color: var(--color-text-disabled);
    cursor: not-allowed;
  }

  ${props=>props.error&&styled_components_browser_esm.AH`
      border-color: var(--color-error);
      &:focus {
        box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.1);
      }
    `}
`,StyledTextarea=styled_components_browser_esm.Ay.textarea`
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: all 0.2s ease-in-out;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;

  &::placeholder {
    color: var(--color-text-placeholder);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:hover:not(:focus) {
    border-color: var(--color-border-hover);
  }

  &:disabled {
    background-color: var(--color-background-disabled);
    color: var(--color-text-disabled);
    cursor: not-allowed;
  }

  ${props=>props.error&&styled_components_browser_esm.AH`
      border-color: var(--color-error);
      &:focus {
        box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.1);
      }
    `}
`,ErrorText=styled_components_browser_esm.Ay.span`
  color: var(--color-error);
  font-size: 0.75rem;
  margin-top: 0.25rem;
`,Input=({id,type="text",label,placeholder,value,onChange,error,required=!1,disabled=!1,rows=3,className="",...props})=>{const InputComponent="textarea"===type?StyledTextarea:StyledInput;return(0,jsx_runtime.jsxs)(InputContainer,{className,children:[label&&(0,jsx_runtime.jsxs)(Label,{htmlFor:id,children:[label,required&&(0,jsx_runtime.jsx)("span",{style:{color:"var(--color-error)"},children:" *"})]}),(0,jsx_runtime.jsx)(InputComponent,{id,type:"textarea"===type?void 0:type,placeholder,value,onChange,error,disabled,required,rows:"textarea"===type?rows:void 0,...props}),error&&(0,jsx_runtime.jsx)(ErrorText,{children:error})]})},Input_Input=Input;Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number' | 'date' | 'textarea'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'date'"},{name:"literal",value:"'textarea'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(\n  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\n) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"e"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},min:{required:!1,tsType:{name:"string"},description:""},max:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Select/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Select_Select});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const SelectContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,Label=styled_components_browser_esm.Ay.label`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.875rem;
`,StyledSelect=styled_components_browser_esm.Ay.select`
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: all 0.2s ease-in-out;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:hover:not(:focus) {
    border-color: var(--color-border-hover);
  }

  &:disabled {
    background-color: var(--color-background-disabled);
    color: var(--color-text-disabled);
    cursor: not-allowed;
    opacity: 0.6;
  }

  option {
    background-color: var(--color-background);
    color: var(--color-text);
    padding: 0.5rem;
  }

  option:disabled {
    color: var(--color-text-disabled);
  }
`,Select=({id,label,value,onChange,options,placeholder,required=!1,disabled=!1,className="",...props})=>(0,jsx_runtime.jsxs)(SelectContainer,{className,children:[label&&(0,jsx_runtime.jsxs)(Label,{htmlFor:id,children:[label,required&&(0,jsx_runtime.jsx)("span",{style:{color:"var(--color-error)"},children:" *"})]}),(0,jsx_runtime.jsxs)(StyledSelect,{id,value,onChange,disabled,required,...props,children:[placeholder&&(0,jsx_runtime.jsx)("option",{value:"",disabled:!0,children:placeholder}),options.map(option=>(0,jsx_runtime.jsx)("option",{value:option.value,children:option.label},option.value))]})]}),Select_Select=Select;Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"e"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}}}}]);
//# sourceMappingURL=158.1200461e.iframe.bundle.js.map