import type { Meta, StoryObj } from '@storybook/react';
import TaskForm from '../components/TaskForm';

const meta: Meta<typeof TaskForm> = {
  title: 'Components/TaskForm',
  component: TaskForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'form submitted' },
    onCancel: { action: 'form cancelled' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTask = {
  id: '1',
  title: 'Complete project documentation',
  description: 'Write comprehensive documentation for the Forsyth Barr UI components',
  dueDate: '2024-01-15',
  priority: 'high' as const,
  status: 'in progress' as const,
  createdAt: '2024-01-01T10:00:00Z',
  updatedAt: '2024-01-01T10:00:00Z',
};

export const CreateNewTask: Story = {
  args: {
    task: undefined,
  },
};

export const EditExistingTask: Story = {
  args: {
    task: sampleTask,
  },
};

export const TaskWithAllFields: Story = {
  args: {
    task: {
      id: '2',
      title: 'Implement user authentication',
      description: 'Add secure user authentication and authorization system with JWT tokens and role-based access control',
      dueDate: '2024-01-20',
      priority: 'high',
      status: 'pending',
      createdAt: '2024-01-01T10:00:00Z',
      updatedAt: '2024-01-01T10:00:00Z',
    },
  },
};

export const TaskWithoutDescription: Story = {
  args: {
    task: {
      id: '3',
      title: 'Simple task',
      description: undefined,
      dueDate: '2024-01-25',
      priority: 'low',
      status: 'completed',
      createdAt: '2024-01-01T10:00:00Z',
      updatedAt: '2024-01-01T10:00:00Z',
    },
  },
};

export const LowPriorityTask: Story = {
  args: {
    task: {
      id: '4',
      title: 'Design responsive layout',
      description: 'Create responsive design for mobile and tablet devices',
      dueDate: '2024-01-30',
      priority: 'low',
      status: 'pending',
      createdAt: '2024-01-01T10:00:00Z',
      updatedAt: '2024-01-01T10:00:00Z',
    },
  },
};

export const CompletedTask: Story = {
  args: {
    task: {
      id: '5',
      title: 'Setup testing environment',
      description: 'Configure Jest and React Testing Library for component testing',
      dueDate: '2024-01-10',
      priority: 'medium',
      status: 'completed',
      createdAt: '2024-01-01T10:00:00Z',
      updatedAt: '2024-01-01T10:00:00Z',
    },
  },
};

export const FormInModal: Story = {
  render: (args) => (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: 'var(--color-background)', 
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      maxWidth: '600px',
      width: '100%'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>Edit Task</h2>
      <TaskForm {...args} />
    </div>
  ),
  args: {
    task: sampleTask,
  },
};

export const FormWithValidation: Story = {
  render: (args) => {
    const handleSubmit = (data: any) => {
      console.log('Form submitted with data:', data);
      // Simulate validation error
      if (data.title === 'invalid') {
        alert('Title cannot be "invalid"');
        return;
      }
      alert('Form submitted successfully!');
    };

    return <TaskForm {...args} onSubmit={handleSubmit} />;
  },
  args: {
    task: undefined,
  },
};

