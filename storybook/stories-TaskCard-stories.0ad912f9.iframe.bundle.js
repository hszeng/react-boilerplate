"use strict";(self.webpackChunk_forsyth_barr_ui_components=self.webpackChunk_forsyth_barr_ui_components||[]).push([[862],{"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledButton=styled_components_browser_esm.Ay.button`
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
`,Button=({children,variant="primary",size="medium",disabled=!1,onClick,type="button",className="",...props})=>(0,jsx_runtime.jsx)(StyledButton,{$variant:variant,$size:size,disabled,onClick,type,className,...props,children}),Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"| 'primary'\n| 'secondary'\n| 'outline'\n| 'ghost'\n| 'danger'\n| 'success'\n| 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Card/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Card_Card});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const CardContainer=styled_components_browser_esm.Ay.div`
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  ${props=>((padding="medium")=>{switch(padding){case"small":return styled_components_browser_esm.AH`
        padding: 1rem;
      `;case"large":return styled_components_browser_esm.AH`
        padding: 2rem;
      `;default:return styled_components_browser_esm.AH`
        padding: 1.5rem;
      `}})(props.$padding)}

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`,Header=styled_components_browser_esm.Ay.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
`,Title=styled_components_browser_esm.Ay.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
`,Subtitle=styled_components_browser_esm.Ay.p`
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
`,Content=styled_components_browser_esm.Ay.div`
  color: var(--color-text);
`,Card=({title,subtitle,children,padding="medium",className="",...props})=>(0,jsx_runtime.jsxs)(CardContainer,{$padding:padding,className,...props,children:[(title||subtitle)&&(0,jsx_runtime.jsxs)(Header,{children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),subtitle&&(0,jsx_runtime.jsx)(Subtitle,{children:subtitle})]}),(0,jsx_runtime.jsx)(Content,{children})]}),Card_Card=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},shadow:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},hover:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}}},"./src/stories/TaskCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllPriorities:()=>AllPriorities,AllTaskStates:()=>AllTaskStates,CompletedTask:()=>CompletedTask,Default:()=>Default,HighPriorityTask:()=>HighPriorityTask,LowPriorityTask:()=>LowPriorityTask,PendingTask:()=>PendingTask,TaskWithoutDescription:()=>TaskWithoutDescription,TaskWithoutDueDate:()=>TaskWithoutDueDate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TaskCard_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),Button=__webpack_require__("./src/components/Button/index.tsx"),Card=__webpack_require__("./src/components/Card/index.tsx");const TaskCardContainer=(0,styled_components_browser_esm.Ay)(Card.A)`
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,TaskHeader=styled_components_browser_esm.Ay.div`
  margin-bottom: 1rem;
`,TaskTitle=styled_components_browser_esm.Ay.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
`,TaskDescription=styled_components_browser_esm.Ay.p`
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
`,TaskMeta=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,MetaItem=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`,MetaLabel=styled_components_browser_esm.Ay.span`
  font-weight: 500;
  color: var(--color-text-secondary);
  min-width: 60px;
`,Status=styled_components_browser_esm.Ay.span`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  ${props=>(status=>{switch(status){case"completed":return styled_components_browser_esm.AH`
        background-color: #d1fae5;
        color: #065f46;
      `;case"in progress":return styled_components_browser_esm.AH`
        background-color: #dbeafe;
        color: #1e40af;
      `;default:return styled_components_browser_esm.AH`
        background-color: #fef3c7;
        color: #92400e;
      `}})(props.$status)}
`,Priority=styled_components_browser_esm.Ay.span`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  ${props=>(priority=>{switch(priority){case"high":return styled_components_browser_esm.AH`
        background-color: #fee2e2;
        color: #991b1b;
      `;case"medium":return styled_components_browser_esm.AH`
        background-color: #fef3c7;
        color: #92400e;
      `;default:return styled_components_browser_esm.AH`
        background-color: #d1fae5;
        color: #065f46;
      `}})(props.$priority)}
`,DueDate=styled_components_browser_esm.Ay.span`
  color: var(--color-text);
  font-weight: 500;
`,TaskActions=styled_components_browser_esm.Ay.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;

  /* Responsive design */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,TaskCard=({task,onEdit,onDelete,className=""})=>(0,jsx_runtime.jsxs)(TaskCardContainer,{className,padding:"medium",children:[(0,jsx_runtime.jsxs)(TaskHeader,{children:[(0,jsx_runtime.jsx)(TaskTitle,{children:task.title}),task.description&&(0,jsx_runtime.jsx)(TaskDescription,{children:task.description})]}),(0,jsx_runtime.jsxs)(TaskMeta,{children:[(0,jsx_runtime.jsxs)(MetaItem,{children:[(0,jsx_runtime.jsx)(MetaLabel,{children:"Status:"}),(0,jsx_runtime.jsx)(Status,{$status:task.status,children:task.status})]}),(0,jsx_runtime.jsxs)(MetaItem,{children:[(0,jsx_runtime.jsx)(MetaLabel,{children:"Priority:"}),(0,jsx_runtime.jsx)(Priority,{$priority:task.priority,children:task.priority})]}),task.dueDate&&(0,jsx_runtime.jsxs)(MetaItem,{children:[(0,jsx_runtime.jsx)(MetaLabel,{children:"Due:"}),(0,jsx_runtime.jsx)(DueDate,{children:new Date(task.dueDate).toLocaleDateString()})]})]}),(0,jsx_runtime.jsxs)(TaskActions,{children:[(0,jsx_runtime.jsx)(Button.A,{variant:"outline",size:"small",onClick:()=>onEdit(task),children:"Edit"}),(0,jsx_runtime.jsx)(Button.A,{variant:"danger",size:"small",onClick:()=>onDelete(task.id),children:"Delete"})]})]}),TaskCard_TaskCard=TaskCard;TaskCard.__docgenInfo={description:"",methods:[],displayName:"TaskCard",props:{task:{required:!0,tsType:{name:"Task"},description:""},onEdit:{required:!0,tsType:{name:"signature",type:"function",raw:"(task: Task) => void",signature:{arguments:[{type:{name:"Task"},name:"task"}],return:{name:"void"}}},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const TaskCard_stories={title:"Components/TaskCard",component:TaskCard_TaskCard,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onEdit:{action:"edit clicked"},onDelete:{action:"delete clicked"}}},baseTask={id:"1",title:"Complete project documentation",description:"Write comprehensive documentation for the Forsyth Barr UI components",dueDate:"2024-01-15",priority:"high",status:"in progress",createdAt:"2024-01-01T10:00:00Z",updatedAt:"2024-01-01T10:00:00Z"},Default={args:{task:baseTask}},PendingTask={args:{task:{...baseTask,id:"2",title:"Review code quality",description:"Perform code review and ensure all components meet quality standards",status:"pending",priority:"medium"}}},CompletedTask={args:{task:{...baseTask,id:"3",title:"Setup testing environment",description:"Configure Jest and React Testing Library for component testing",status:"completed",priority:"low"}}},HighPriorityTask={args:{task:{...baseTask,id:"4",title:"Implement user authentication",description:"Add secure user authentication and authorization system",priority:"high",status:"in progress"}}},LowPriorityTask={args:{task:{...baseTask,id:"5",title:"Design responsive layout",description:"Create responsive design for mobile and tablet devices",priority:"low",status:"pending"}}},TaskWithoutDescription={args:{task:{...baseTask,id:"6",title:"Simple task without description",description:void 0,priority:"medium",status:"pending"}}},TaskWithoutDueDate={args:{task:{...baseTask,id:"7",title:"Task without due date",description:"This task has no specific due date",dueDate:void 0,priority:"low",status:"in progress"}}},AllTaskStates={render:()=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[{id:"1",title:"Pending Task",description:"This task is pending",dueDate:"2024-01-15",priority:"medium",status:"pending",createdAt:"2024-01-01T10:00:00Z",updatedAt:"2024-01-01T10:00:00Z"},{id:"2",title:"In Progress Task",description:"This task is currently in progress",dueDate:"2024-01-20",priority:"high",status:"in progress",createdAt:"2024-01-01T10:00:00Z",updatedAt:"2024-01-01T10:00:00Z"},{id:"3",title:"Completed Task",description:"This task has been completed",dueDate:"2024-01-10",priority:"low",status:"completed",createdAt:"2024-01-01T10:00:00Z",updatedAt:"2024-01-01T10:00:00Z"}].map(task=>(0,jsx_runtime.jsx)(TaskCard_TaskCard,{task,onEdit:task=>console.log("Edit task:",task),onDelete:id=>console.log("Delete task:",id)},task.id))})},AllPriorities={render:()=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[{id:"1",title:"Low Priority Task",description:"This is a low priority task",dueDate:"2024-01-25",priority:"low",status:"pending",createdAt:"2024-01-01T10:00:00Z",updatedAt:"2024-01-01T10:00:00Z"},{id:"2",title:"Medium Priority Task",description:"This is a medium priority task",dueDate:"2024-01-20",priority:"medium",status:"in progress",createdAt:"2024-01-01T10:00:00Z",updatedAt:"2024-01-01T10:00:00Z"},{id:"3",title:"High Priority Task",description:"This is a high priority task",dueDate:"2024-01-15",priority:"high",status:"pending",createdAt:"2024-01-01T10:00:00Z",updatedAt:"2024-01-01T10:00:00Z"}].map(task=>(0,jsx_runtime.jsx)(TaskCard_TaskCard,{task,onEdit:task=>console.log("Edit task:",task),onDelete:id=>console.log("Delete task:",id)},task.id))})},__namedExportsOrder=["Default","PendingTask","CompletedTask","HighPriorityTask","LowPriorityTask","TaskWithoutDescription","TaskWithoutDueDate","AllTaskStates","AllPriorities"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: baseTask\n  }\n}",...Default.parameters?.docs?.source}}},PendingTask.parameters={...PendingTask.parameters,docs:{...PendingTask.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      ...baseTask,\n      id: '2',\n      title: 'Review code quality',\n      description: 'Perform code review and ensure all components meet quality standards',\n      status: 'pending',\n      priority: 'medium'\n    }\n  }\n}",...PendingTask.parameters?.docs?.source}}},CompletedTask.parameters={...CompletedTask.parameters,docs:{...CompletedTask.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      ...baseTask,\n      id: '3',\n      title: 'Setup testing environment',\n      description: 'Configure Jest and React Testing Library for component testing',\n      status: 'completed',\n      priority: 'low'\n    }\n  }\n}",...CompletedTask.parameters?.docs?.source}}},HighPriorityTask.parameters={...HighPriorityTask.parameters,docs:{...HighPriorityTask.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      ...baseTask,\n      id: '4',\n      title: 'Implement user authentication',\n      description: 'Add secure user authentication and authorization system',\n      priority: 'high',\n      status: 'in progress'\n    }\n  }\n}",...HighPriorityTask.parameters?.docs?.source}}},LowPriorityTask.parameters={...LowPriorityTask.parameters,docs:{...LowPriorityTask.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      ...baseTask,\n      id: '5',\n      title: 'Design responsive layout',\n      description: 'Create responsive design for mobile and tablet devices',\n      priority: 'low',\n      status: 'pending'\n    }\n  }\n}",...LowPriorityTask.parameters?.docs?.source}}},TaskWithoutDescription.parameters={...TaskWithoutDescription.parameters,docs:{...TaskWithoutDescription.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      ...baseTask,\n      id: '6',\n      title: 'Simple task without description',\n      description: undefined,\n      priority: 'medium',\n      status: 'pending'\n    }\n  }\n}",...TaskWithoutDescription.parameters?.docs?.source}}},TaskWithoutDueDate.parameters={...TaskWithoutDueDate.parameters,docs:{...TaskWithoutDueDate.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      ...baseTask,\n      id: '7',\n      title: 'Task without due date',\n      description: 'This task has no specific due date',\n      dueDate: undefined,\n      priority: 'low',\n      status: 'in progress'\n    }\n  }\n}",...TaskWithoutDueDate.parameters?.docs?.source}}},AllTaskStates.parameters={...AllTaskStates.parameters,docs:{...AllTaskStates.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const tasks = [{\n      id: '1',\n      title: 'Pending Task',\n      description: 'This task is pending',\n      dueDate: '2024-01-15',\n      priority: 'medium' as const,\n      status: 'pending' as const,\n      createdAt: '2024-01-01T10:00:00Z',\n      updatedAt: '2024-01-01T10:00:00Z'\n    }, {\n      id: '2',\n      title: 'In Progress Task',\n      description: 'This task is currently in progress',\n      dueDate: '2024-01-20',\n      priority: 'high' as const,\n      status: 'in progress' as const,\n      createdAt: '2024-01-01T10:00:00Z',\n      updatedAt: '2024-01-01T10:00:00Z'\n    }, {\n      id: '3',\n      title: 'Completed Task',\n      description: 'This task has been completed',\n      dueDate: '2024-01-10',\n      priority: 'low' as const,\n      status: 'completed' as const,\n      createdAt: '2024-01-01T10:00:00Z',\n      updatedAt: '2024-01-01T10:00:00Z'\n    }];\n    return <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '1rem',\n      width: '400px'\n    }}>\n        {tasks.map(task => <TaskCard key={task.id} task={task} onEdit={task => console.log('Edit task:', task)} onDelete={id => console.log('Delete task:', id)} />)}\n      </div>;\n  }\n}",...AllTaskStates.parameters?.docs?.source}}},AllPriorities.parameters={...AllPriorities.parameters,docs:{...AllPriorities.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const tasks = [{\n      id: '1',\n      title: 'Low Priority Task',\n      description: 'This is a low priority task',\n      dueDate: '2024-01-25',\n      priority: 'low' as const,\n      status: 'pending' as const,\n      createdAt: '2024-01-01T10:00:00Z',\n      updatedAt: '2024-01-01T10:00:00Z'\n    }, {\n      id: '2',\n      title: 'Medium Priority Task',\n      description: 'This is a medium priority task',\n      dueDate: '2024-01-20',\n      priority: 'medium' as const,\n      status: 'in progress' as const,\n      createdAt: '2024-01-01T10:00:00Z',\n      updatedAt: '2024-01-01T10:00:00Z'\n    }, {\n      id: '3',\n      title: 'High Priority Task',\n      description: 'This is a high priority task',\n      dueDate: '2024-01-15',\n      priority: 'high' as const,\n      status: 'pending' as const,\n      createdAt: '2024-01-01T10:00:00Z',\n      updatedAt: '2024-01-01T10:00:00Z'\n    }];\n    return <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '1rem',\n      width: '400px'\n    }}>\n        {tasks.map(task => <TaskCard key={task.id} task={task} onEdit={task => console.log('Edit task:', task)} onDelete={id => console.log('Delete task:', id)} />)}\n      </div>;\n  }\n}",...AllPriorities.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-TaskCard-stories.0ad912f9.iframe.bundle.js.map