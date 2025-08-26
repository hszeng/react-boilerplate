import type { Meta, StoryObj } from '@storybook/react';
import TaskCard from '../components/TaskCard';

const meta: Meta<typeof TaskCard> = {
  title: 'Components/TaskCard',
  component: TaskCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onEdit: { action: 'edit clicked' },
    onDelete: { action: 'delete clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const baseTask = {
  id: '1',
  title: 'Complete project documentation',
  description: 'Write comprehensive documentation for the Forsyth Barr UI components',
  dueDate: '2024-01-15',
  priority: 'high' as const,
  status: 'in progress' as const,
  createdAt: '2024-01-01T10:00:00Z',
  updatedAt: '2024-01-01T10:00:00Z',
};

export const Default: Story = {
  args: {
    task: baseTask,
  },
};

export const PendingTask: Story = {
  args: {
    task: {
      ...baseTask,
      id: '2',
      title: 'Review code quality',
      description: 'Perform code review and ensure all components meet quality standards',
      status: 'pending',
      priority: 'medium',
    },
  },
};

export const CompletedTask: Story = {
  args: {
    task: {
      ...baseTask,
      id: '3',
      title: 'Setup testing environment',
      description: 'Configure Jest and React Testing Library for component testing',
      status: 'completed',
      priority: 'low',
    },
  },
};

export const HighPriorityTask: Story = {
  args: {
    task: {
      ...baseTask,
      id: '4',
      title: 'Implement user authentication',
      description: 'Add secure user authentication and authorization system',
      priority: 'high',
      status: 'in progress',
    },
  },
};

export const LowPriorityTask: Story = {
  args: {
    task: {
      ...baseTask,
      id: '5',
      title: 'Design responsive layout',
      description: 'Create responsive design for mobile and tablet devices',
      priority: 'low',
      status: 'pending',
    },
  },
};

export const TaskWithoutDescription: Story = {
  args: {
    task: {
      ...baseTask,
      id: '6',
      title: 'Simple task without description',
      description: undefined,
      priority: 'medium',
      status: 'pending',
    },
  },
};

export const TaskWithoutDueDate: Story = {
  args: {
    task: {
      ...baseTask,
      id: '7',
      title: 'Task without due date',
      description: 'This task has no specific due date',
      dueDate: undefined,
      priority: 'low',
      status: 'in progress',
    },
  },
};

export const AllTaskStates: Story = {
  render: () => {
    const tasks = [
      {
        id: '1',
        title: 'Pending Task',
        description: 'This task is pending',
        dueDate: '2024-01-15',
        priority: 'medium' as const,
        status: 'pending' as const,
        createdAt: '2024-01-01T10:00:00Z',
        updatedAt: '2024-01-01T10:00:00Z',
      },
      {
        id: '2',
        title: 'In Progress Task',
        description: 'This task is currently in progress',
        dueDate: '2024-01-20',
        priority: 'high' as const,
        status: 'in progress' as const,
        createdAt: '2024-01-01T10:00:00Z',
        updatedAt: '2024-01-01T10:00:00Z',
      },
      {
        id: '3',
        title: 'Completed Task',
        description: 'This task has been completed',
        dueDate: '2024-01-10',
        priority: 'low' as const,
        status: 'completed' as const,
        createdAt: '2024-01-01T10:00:00Z',
        updatedAt: '2024-01-01T10:00:00Z',
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={(task) => console.log('Edit task:', task)}
            onDelete={(id) => console.log('Delete task:', id)}
          />
        ))}
      </div>
    );
  },
};

export const AllPriorities: Story = {
  render: () => {
    const tasks = [
      {
        id: '1',
        title: 'Low Priority Task',
        description: 'This is a low priority task',
        dueDate: '2024-01-25',
        priority: 'low' as const,
        status: 'pending' as const,
        createdAt: '2024-01-01T10:00:00Z',
        updatedAt: '2024-01-01T10:00:00Z',
      },
      {
        id: '2',
        title: 'Medium Priority Task',
        description: 'This is a medium priority task',
        dueDate: '2024-01-20',
        priority: 'medium' as const,
        status: 'in progress' as const,
        createdAt: '2024-01-01T10:00:00Z',
        updatedAt: '2024-01-01T10:00:00Z',
      },
      {
        id: '3',
        title: 'High Priority Task',
        description: 'This is a high priority task',
        dueDate: '2024-01-15',
        priority: 'high' as const,
        status: 'pending' as const,
        createdAt: '2024-01-01T10:00:00Z',
        updatedAt: '2024-01-01T10:00:00Z',
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={(task) => console.log('Edit task:', task)}
            onDelete={(id) => console.log('Delete task:', id)}
          />
        ))}
      </div>
    );
  },
};

