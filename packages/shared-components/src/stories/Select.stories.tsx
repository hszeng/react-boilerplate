import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Select from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle state
const SelectWrapper = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <Select {...args} value={value} onChange={e => setValue(e.target.value)} />
  );
};

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
];

const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'purple', label: 'Purple' },
];

const priorityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const statusOptions = [
  { value: 'pending', label: 'Pending' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
];

export const Basic: Story = {
  render: args => <SelectWrapper {...args} />,
  args: {
    id: 'basic-select',
    label: 'Select Fruit',
    options: fruitOptions,
    placeholder: 'Choose a fruit...',
    value: '',
  },
};

export const WithValue: Story = {
  render: args => <SelectWrapper {...args} />,
  args: {
    id: 'with-value-select',
    label: 'Select Color',
    options: colorOptions,
    placeholder: 'Choose a color...',
    value: 'blue',
  },
};

export const Required: Story = {
  render: args => <SelectWrapper {...args} />,
  args: {
    id: 'required-select',
    label: 'Priority',
    options: priorityOptions,
    placeholder: 'Select priority...',
    value: '',
    required: true,
  },
};

export const Disabled: Story = {
  render: args => <SelectWrapper {...args} />,
  args: {
    id: 'disabled-select',
    label: 'Status',
    options: statusOptions,
    placeholder: 'Select status...',
    value: 'pending',
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  render: args => <SelectWrapper {...args} />,
  args: {
    id: 'no-label-select',
    options: fruitOptions,
    placeholder: 'Choose a fruit...',
    value: '',
  },
};

export const WithoutPlaceholder: Story = {
  render: args => <SelectWrapper {...args} />,
  args: {
    id: 'no-placeholder-select',
    label: 'Select Option',
    options: colorOptions,
    value: '',
  },
};

export const AllSelects: Story = {
  render: () => {
    const [values, setValues] = useState({
      fruit: '',
      color: '',
      priority: '',
      status: '',
    });

    const handleChange = (field: string) => (e: any) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
        }}
      >
        <Select
          id="fruit"
          label="Select Fruit"
          options={fruitOptions}
          placeholder="Choose a fruit..."
          value={values.fruit}
          onChange={handleChange('fruit')}
        />
        <Select
          id="color"
          label="Select Color"
          options={colorOptions}
          placeholder="Choose a color..."
          value={values.color}
          onChange={handleChange('color')}
        />
        <Select
          id="priority"
          label="Priority"
          options={priorityOptions}
          placeholder="Select priority..."
          value={values.priority}
          onChange={handleChange('priority')}
          required
        />
        <Select
          id="status"
          label="Status"
          options={statusOptions}
          placeholder="Select status..."
          value={values.status}
          onChange={handleChange('status')}
        />
      </div>
    );
  },
};

export const TaskManagementExample: Story = {
  render: () => {
    const [values, setValues] = useState({
      priority: '',
      status: '',
    });

    const handleChange = (field: string) => (e: any) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
        }}
      >
        <h3>Task Management Form</h3>
        <Select
          id="task-priority"
          label="Task Priority"
          options={priorityOptions}
          placeholder="Select priority..."
          value={values.priority}
          onChange={handleChange('priority')}
          required
        />
        <Select
          id="task-status"
          label="Task Status"
          options={statusOptions}
          placeholder="Select status..."
          value={values.status}
          onChange={handleChange('status')}
          required
        />
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
          }}
        >
          <strong>Selected Values:</strong>
          <div>Priority: {values.priority || 'Not selected'}</div>
          <div>Status: {values.status || 'Not selected'}</div>
        </div>
      </div>
    );
  },
};
