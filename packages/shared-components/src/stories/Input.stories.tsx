import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Input from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'date', 'textarea'],
    },
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
const InputWrapper = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
  );
};

export const Text: Story = {
  render: args => <InputWrapper {...args} />,
  args: {
    id: 'text-input',
    type: 'text',
    label: 'Text Input',
    placeholder: 'Enter text...',
    value: '',
  },
};

export const Email: Story = {
  render: args => <InputWrapper {...args} />,
  args: {
    id: 'email-input',
    type: 'email',
    label: 'Email Input',
    placeholder: 'Enter email...',
    value: '',
  },
};

export const Password: Story = {
  render: args => <InputWrapper {...args} />,
  args: {
    id: 'password-input',
    type: 'password',
    label: 'Password Input',
    placeholder: 'Enter password...',
    value: '',
  },
};

export const Number: Story = {
  render: args => <InputWrapper {...args} />,
  args: {
    id: 'number-input',
    type: 'number',
    label: 'Number Input',
    placeholder: 'Enter number...',
    value: '',
  },
};

export const Date: Story = {
  render: args => <InputWrapper {...args} />,
  args: {
    id: 'date-input',
    type: 'date',
    label: 'Date Input',
    value: '',
  },
};

export const Textarea: Story = {
  render: args => <InputWrapper {...args} />,
  args: {
    id: 'textarea-input',
    type: 'textarea',
    label: 'Textarea Input',
    placeholder: 'Enter text...',
    value: '',
    rows: 4,
  },
};

export const WithError: Story = {
  render: args => <InputWrapper {...args} />,
  args: {
    id: 'error-input',
    type: 'text',
    label: 'Input with Error',
    placeholder: 'Enter text...',
    value: '',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  render: args => <InputWrapper {...args} />,
  args: {
    id: 'disabled-input',
    type: 'text',
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    value: 'Disabled value',
    disabled: true,
  },
};

export const Required: Story = {
  render: args => <InputWrapper {...args} />,
  args: {
    id: 'required-input',
    type: 'text',
    label: 'Required Input',
    placeholder: 'This field is required',
    value: '',
    required: true,
  },
};

export const AllTypes: Story = {
  render: () => {
    const [values, setValues] = useState({
      text: '',
      email: '',
      password: '',
      number: '',
      date: '',
      textarea: '',
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
        <Input
          id="text"
          type="text"
          label="Text"
          placeholder="Enter text..."
          value={values.text}
          onChange={handleChange('text')}
        />
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Enter email..."
          value={values.email}
          onChange={handleChange('email')}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="Enter password..."
          value={values.password}
          onChange={handleChange('password')}
        />
        <Input
          id="number"
          type="number"
          label="Number"
          placeholder="Enter number..."
          value={values.number}
          onChange={handleChange('number')}
        />
        <Input
          id="date"
          type="date"
          label="Date"
          value={values.date}
          onChange={handleChange('date')}
        />
        <Input
          id="textarea"
          type="textarea"
          label="Textarea"
          placeholder="Enter text..."
          value={values.textarea}
          onChange={handleChange('textarea')}
          rows={3}
        />
      </div>
    );
  },
};
