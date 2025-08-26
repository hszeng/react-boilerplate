// Task related types (matching API specification)
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
  priority?: 'low' | 'medium' | 'high';
  status?: 'pending' | 'in progress' | 'completed';
}

export interface TaskFilters {
  status?: 'pending' | 'in progress' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  search?: string;
}

export interface TaskSort {
  field: 'title' | 'dueDate' | 'priority' | 'status' | 'createdAt';
  direction: 'asc' | 'desc';
}

// Form data for task creation/editing
export interface TaskFormData {
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in progress' | 'completed';
}

// Theme types
export interface Theme {
  name: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
  };
}
