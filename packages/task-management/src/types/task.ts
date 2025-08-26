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

export interface TaskInput {
  title: string;
  description?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in progress' | 'completed';
}

export interface TaskFilters {
  search: string;
  status: string;
  priority: string;
  dueDate: string;
}

export interface TaskSort {
  field: keyof Task;
  direction: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
