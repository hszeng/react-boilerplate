import { Task, TaskInput, ApiResponse } from '../types/task';

// LocalStorage key for storing tasks
const STORAGE_KEY = 'task-manager-tasks';

// Helper function to get date string relative to today
const getDateString = (daysOffset: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  return date.toISOString().split('T')[0];
};

// Default tasks for initial setup
const defaultTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project documentation',
    description:
      'Write comprehensive documentation for the Forsyth Barr UI components',
    dueDate: getDateString(3),
    priority: 'high',
    status: 'in progress',
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z',
  },
  {
    id: '2',
    title: 'Review code quality',
    description:
      'Perform code review and ensure all components meet quality standards',
    dueDate: getDateString(-2),
    priority: 'medium',
    status: 'pending',
    createdAt: '2024-01-01T09:00:00Z',
    updatedAt: '2024-01-01T09:00:00Z',
  },
  {
    id: '3',
    title: 'Setup testing environment',
    description:
      'Configure Jest and React Testing Library for component testing',
    dueDate: getDateString(-5),
    priority: 'low',
    status: 'completed',
    createdAt: '2024-01-01T08:00:00Z',
    updatedAt: '2024-01-01T08:00:00Z',
  },
  {
    id: '4',
    title: 'Implement user authentication',
    description: 'Add secure user authentication and authorization system',
    dueDate: getDateString(7),
    priority: 'high',
    status: 'in progress',
    createdAt: '2024-01-01T07:00:00Z',
    updatedAt: '2024-01-01T07:00:00Z',
  },
  {
    id: '5',
    title: 'Design responsive layout',
    description: 'Create responsive design for mobile and tablet devices',
    dueDate: getDateString(1),
    priority: 'medium',
    status: 'pending',
    createdAt: '2024-01-01T06:00:00Z',
    updatedAt: '2024-01-01T06:00:00Z',
  },
  {
    id: '6',
    title: 'Optimize performance',
    description: 'Improve application performance and loading times',
    dueDate: getDateString(10),
    priority: 'high',
    status: 'pending',
    createdAt: '2024-01-01T05:00:00Z',
    updatedAt: '2024-01-01T05:00:00Z',
  },
  {
    id: '7',
    title: 'Write unit tests',
    description: 'Create comprehensive unit tests for all components',
    dueDate: getDateString(-1),
    priority: 'medium',
    status: 'completed',
    createdAt: '2024-01-01T04:00:00Z',
    updatedAt: '2024-01-01T04:00:00Z',
  },
];

class TaskService {
  private getTasksFromStorage(): Task[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      // Initialize with default tasks if no data exists
      this.saveTasksToStorage(defaultTasks);
      return defaultTasks;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultTasks;
    }
  }

  private saveTasksToStorage(tasks: Task[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Simulate async operations for consistency with API interface
  async getTasks(): Promise<ApiResponse<Task[]>> {
    return new Promise(resolve => {
      setTimeout(() => {
        const tasks = this.getTasksFromStorage();
        resolve({
          success: true,
          data: tasks,
        });
      }, 100); // Small delay to simulate network request
    });
  }

  async getTask(id: string): Promise<ApiResponse<Task>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const tasks = this.getTasksFromStorage();
        const task = tasks.find(t => t.id === id);

        if (task) {
          resolve({
            success: true,
            data: task,
          });
        } else {
          reject({
            success: false,
            error: 'Task not found',
          });
        }
      }, 100);
    });
  }

  async createTask(taskData: TaskInput): Promise<ApiResponse<Task>> {
    return new Promise(resolve => {
      setTimeout(() => {
        const tasks = this.getTasksFromStorage();
        const now = new Date().toISOString();

        const newTask: Task = {
          id: this.generateId(),
          ...taskData,
          createdAt: now,
          updatedAt: now,
        };

        tasks.push(newTask);
        this.saveTasksToStorage(tasks);

        resolve({
          success: true,
          data: newTask,
        });
      }, 100);
    });
  }

  async updateTask(
    id: string,
    updates: Partial<TaskInput>
  ): Promise<ApiResponse<Task>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const tasks = this.getTasksFromStorage();
        const taskIndex = tasks.findIndex(t => t.id === id);

        if (taskIndex === -1) {
          reject({
            success: false,
            error: 'Task not found',
          });
          return;
        }

        tasks[taskIndex] = {
          ...tasks[taskIndex],
          ...updates,
          updatedAt: new Date().toISOString(),
        };

        this.saveTasksToStorage(tasks);

        resolve({
          success: true,
          data: tasks[taskIndex],
        });
      }, 100);
    });
  }

  async deleteTask(id: string): Promise<ApiResponse<Task>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const tasks = this.getTasksFromStorage();
        const taskIndex = tasks.findIndex(t => t.id === id);

        if (taskIndex === -1) {
          reject({
            success: false,
            error: 'Task not found',
          });
          return;
        }

        const deletedTask = tasks.splice(taskIndex, 1)[0];
        this.saveTasksToStorage(tasks);

        resolve({
          success: true,
          data: deletedTask,
        });
      }, 100);
    });
  }

  async healthCheck(): Promise<
    ApiResponse<{ message: string; timestamp: string }>
  > {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            message: 'Task Manager is running (localStorage mode)',
            timestamp: new Date().toISOString(),
          },
        });
      }, 100);
    });
  }
}

export const taskService = new TaskService();
