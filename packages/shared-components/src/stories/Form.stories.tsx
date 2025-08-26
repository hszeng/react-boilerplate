import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Form from '../components/Form';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'form submitted' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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

export const BasicForm: Story = {
  render: args => (
    <Form {...args}>
      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="Enter your name"
        value=""
        onChange={() => {}}
      />
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        value=""
        onChange={() => {}}
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  ),
  args: {
    title: 'Basic Form',
    subtitle: 'A simple form with basic fields',
  },
};

export const FormWithoutTitle: Story = {
  render: args => (
    <Form {...args}>
      <Input
        id="username"
        type="text"
        label="Username"
        placeholder="Enter username"
        value=""
        onChange={() => {}}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="Enter password"
        value=""
        onChange={() => {}}
      />
      <Button type="submit" variant="primary">
        Login
      </Button>
    </Form>
  ),
};

export const ComplexForm: Story = {
  render: args => (
    <Form {...args}>
      <Input
        id="title"
        type="text"
        label="Task Title"
        placeholder="Enter task title"
        value=""
        onChange={() => {}}
        required
      />
      <Input
        id="description"
        type="textarea"
        label="Description"
        placeholder="Enter task description"
        value=""
        onChange={() => {}}
        rows={3}
      />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Select
          id="priority"
          label="Priority"
          options={priorityOptions}
          placeholder="Select priority"
          value=""
          onChange={() => {}}
        />
        <Select
          id="status"
          label="Status"
          options={statusOptions}
          placeholder="Select status"
          value=""
          onChange={() => {}}
        />
      </div>
      <Input
        id="dueDate"
        type="date"
        label="Due Date"
        value=""
        onChange={() => {}}
        required
      />
      <div
        style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}
      >
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save Task
        </Button>
      </div>
    </Form>
  ),
  args: {
    title: 'Create New Task',
    subtitle: 'Fill in the details to create a new task',
  },
};

export const FormWithValidation: Story = {
  render: args => (
    <Form {...args}>
      <Input
        id="email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        value=""
        onChange={() => {}}
        error="Please enter a valid email address"
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        value=""
        onChange={() => {}}
        error="Password must be at least 8 characters"
        required
      />
      <Input
        id="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
        value=""
        onChange={() => {}}
        error="Passwords do not match"
        required
      />
      <Button type="submit" variant="primary">
        Create Account
      </Button>
    </Form>
  ),
  args: {
    title: 'Registration Form',
    subtitle: 'Create your account with validation',
  },
};

export const FormWithSelects: Story = {
  render: args => (
    <Form {...args}>
      <Select
        id="country"
        label="Country"
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'ca', label: 'Canada' },
          { value: 'au', label: 'Australia' },
        ]}
        placeholder="Select your country"
        value=""
        onChange={() => {}}
      />
      <Select
        id="language"
        label="Preferred Language"
        options={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' },
        ]}
        placeholder="Select your language"
        value=""
        onChange={() => {}}
      />
      <Button type="submit" variant="primary">
        Save Preferences
      </Button>
    </Form>
  ),
  args: {
    title: 'Preferences Form',
    subtitle: 'Configure your account preferences',
  },
};

export const ResponsiveForm: Story = {
  render: args => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <Form {...args}>
        <Input
          id="firstName"
          type="text"
          label="First Name"
          placeholder="Enter first name"
          value=""
          onChange={() => {}}
        />
        <Input
          id="lastName"
          type="text"
          label="Last Name"
          placeholder="Enter last name"
          value=""
          onChange={() => {}}
        />
        <Input
          id="phone"
          type="text"
          label="Phone Number"
          placeholder="Enter phone number"
          value=""
          onChange={() => {}}
        />
        <Input
          id="address"
          type="textarea"
          label="Address"
          placeholder="Enter your address"
          value=""
          onChange={() => {}}
          rows={3}
        />
        <div
          style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}
        >
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save Profile
          </Button>
        </div>
      </Form>
    </div>
  ),
  args: {
    title: 'Profile Form',
    subtitle: 'Update your profile information',
  },
};
