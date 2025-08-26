"use strict";(self.webpackChunk_forsyth_barr_ui_components=self.webpackChunk_forsyth_barr_ui_components||[]).push([[669],{"./src/components/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input_Input});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const InputContainer=styled_components_browser_esm.Ay.div`
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
`,Input=({id,type="text",label,placeholder,value,onChange,error,required=!1,disabled=!1,rows=3,className="",...props})=>{const InputComponent="textarea"===type?StyledTextarea:StyledInput;return(0,jsx_runtime.jsxs)(InputContainer,{className,children:[label&&(0,jsx_runtime.jsxs)(Label,{htmlFor:id,children:[label,required&&(0,jsx_runtime.jsx)("span",{style:{color:"var(--color-error)"},children:" *"})]}),(0,jsx_runtime.jsx)(InputComponent,{id,type:"textarea"===type?void 0:type,placeholder,value,onChange,error,disabled,required,rows:"textarea"===type?rows:void 0,...props}),error&&(0,jsx_runtime.jsx)(ErrorText,{children:error})]})},Input_Input=Input;Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number' | 'date' | 'textarea'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'date'"},{name:"literal",value:"'textarea'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(\n  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\n) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"e"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},min:{required:!1,tsType:{name:"string"},description:""},max:{required:!1,tsType:{name:"string"},description:""}}}},"./src/stories/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllTypes:()=>AllTypes,Date:()=>Date,Disabled:()=>Disabled,Email:()=>Email,Number:()=>Number,Password:()=>Password,Required:()=>Required,Text:()=>Text,Textarea:()=>Textarea,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_components_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Input",component:_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number","date","textarea"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}}},InputWrapper=args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(args.value||"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,{...args,value,onChange:e=>setValue(e.target.value)})},Text={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputWrapper,{...args}),args:{id:"text-input",type:"text",label:"Text Input",placeholder:"Enter text...",value:""}},Email={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputWrapper,{...args}),args:{id:"email-input",type:"email",label:"Email Input",placeholder:"Enter email...",value:""}},Password={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputWrapper,{...args}),args:{id:"password-input",type:"password",label:"Password Input",placeholder:"Enter password...",value:""}},Number={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputWrapper,{...args}),args:{id:"number-input",type:"number",label:"Number Input",placeholder:"Enter number...",value:""}},Date={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputWrapper,{...args}),args:{id:"date-input",type:"date",label:"Date Input",value:""}},Textarea={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputWrapper,{...args}),args:{id:"textarea-input",type:"textarea",label:"Textarea Input",placeholder:"Enter text...",value:"",rows:4}},WithError={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputWrapper,{...args}),args:{id:"error-input",type:"text",label:"Input with Error",placeholder:"Enter text...",value:"",error:"This field is required"}},Disabled={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputWrapper,{...args}),args:{id:"disabled-input",type:"text",label:"Disabled Input",placeholder:"This input is disabled",value:"Disabled value",disabled:!0}},Required={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputWrapper,{...args}),args:{id:"required-input",type:"text",label:"Required Input",placeholder:"This field is required",value:"",required:!0}},AllTypes={render:()=>{const[values,setValues]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({text:"",email:"",password:"",number:"",date:"",textarea:""}),handleChange=field=>e=>{setValues(prev=>({...prev,[field]:e.target.value}))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,{id:"text",type:"text",label:"Text",placeholder:"Enter text...",value:values.text,onChange:handleChange("text")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,{id:"email",type:"email",label:"Email",placeholder:"Enter email...",value:values.email,onChange:handleChange("email")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,{id:"password",type:"password",label:"Password",placeholder:"Enter password...",value:values.password,onChange:handleChange("password")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,{id:"number",type:"number",label:"Number",placeholder:"Enter number...",value:values.number,onChange:handleChange("number")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,{id:"date",type:"date",label:"Date",value:values.date,onChange:handleChange("date")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_2__.A,{id:"textarea",type:"textarea",label:"Textarea",placeholder:"Enter text...",value:values.textarea,onChange:handleChange("textarea"),rows:3})]})}},__namedExportsOrder=["Text","Email","Password","Number","Date","Textarea","WithError","Disabled","Required","AllTypes"];Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"{\n  render: args => <InputWrapper {...args} />,\n  args: {\n    id: 'text-input',\n    type: 'text',\n    label: 'Text Input',\n    placeholder: 'Enter text...',\n    value: ''\n  }\n}",...Text.parameters?.docs?.source}}},Email.parameters={...Email.parameters,docs:{...Email.parameters?.docs,source:{originalSource:"{\n  render: args => <InputWrapper {...args} />,\n  args: {\n    id: 'email-input',\n    type: 'email',\n    label: 'Email Input',\n    placeholder: 'Enter email...',\n    value: ''\n  }\n}",...Email.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:"{\n  render: args => <InputWrapper {...args} />,\n  args: {\n    id: 'password-input',\n    type: 'password',\n    label: 'Password Input',\n    placeholder: 'Enter password...',\n    value: ''\n  }\n}",...Password.parameters?.docs?.source}}},Number.parameters={...Number.parameters,docs:{...Number.parameters?.docs,source:{originalSource:"{\n  render: args => <InputWrapper {...args} />,\n  args: {\n    id: 'number-input',\n    type: 'number',\n    label: 'Number Input',\n    placeholder: 'Enter number...',\n    value: ''\n  }\n}",...Number.parameters?.docs?.source}}},Date.parameters={...Date.parameters,docs:{...Date.parameters?.docs,source:{originalSource:"{\n  render: args => <InputWrapper {...args} />,\n  args: {\n    id: 'date-input',\n    type: 'date',\n    label: 'Date Input',\n    value: ''\n  }\n}",...Date.parameters?.docs?.source}}},Textarea.parameters={...Textarea.parameters,docs:{...Textarea.parameters?.docs,source:{originalSource:"{\n  render: args => <InputWrapper {...args} />,\n  args: {\n    id: 'textarea-input',\n    type: 'textarea',\n    label: 'Textarea Input',\n    placeholder: 'Enter text...',\n    value: '',\n    rows: 4\n  }\n}",...Textarea.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  render: args => <InputWrapper {...args} />,\n  args: {\n    id: 'error-input',\n    type: 'text',\n    label: 'Input with Error',\n    placeholder: 'Enter text...',\n    value: '',\n    error: 'This field is required'\n  }\n}",...WithError.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => <InputWrapper {...args} />,\n  args: {\n    id: 'disabled-input',\n    type: 'text',\n    label: 'Disabled Input',\n    placeholder: 'This input is disabled',\n    value: 'Disabled value',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  render: args => <InputWrapper {...args} />,\n  args: {\n    id: 'required-input',\n    type: 'text',\n    label: 'Required Input',\n    placeholder: 'This field is required',\n    value: '',\n    required: true\n  }\n}",...Required.parameters?.docs?.source}}},AllTypes.parameters={...AllTypes.parameters,docs:{...AllTypes.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [values, setValues] = useState({\n      text: \'\',\n      email: \'\',\n      password: \'\',\n      number: \'\',\n      date: \'\',\n      textarea: \'\'\n    });\n    const handleChange = (field: string) => (e: any) => {\n      setValues(prev => ({\n        ...prev,\n        [field]: e.target.value\n      }));\n    };\n    return <div style={{\n      display: \'flex\',\n      flexDirection: \'column\',\n      gap: \'1rem\',\n      width: \'300px\'\n    }}>\n        <Input id="text" type="text" label="Text" placeholder="Enter text..." value={values.text} onChange={handleChange(\'text\')} />\n        <Input id="email" type="email" label="Email" placeholder="Enter email..." value={values.email} onChange={handleChange(\'email\')} />\n        <Input id="password" type="password" label="Password" placeholder="Enter password..." value={values.password} onChange={handleChange(\'password\')} />\n        <Input id="number" type="number" label="Number" placeholder="Enter number..." value={values.number} onChange={handleChange(\'number\')} />\n        <Input id="date" type="date" label="Date" value={values.date} onChange={handleChange(\'date\')} />\n        <Input id="textarea" type="textarea" label="Textarea" placeholder="Enter text..." value={values.textarea} onChange={handleChange(\'textarea\')} rows={3} />\n      </div>;\n  }\n}',...AllTypes.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-Input-stories.2c5c38e1.iframe.bundle.js.map