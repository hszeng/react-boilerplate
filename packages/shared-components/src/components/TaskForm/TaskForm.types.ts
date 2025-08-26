export interface TaskInput {
  title: string;
  description?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in progress' | 'completed';
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface TaskFormProps {
  task?: Task | null;
  onSubmit: (data: TaskInput) => void;
  onCancel: () => void;
  className?: string;
}
