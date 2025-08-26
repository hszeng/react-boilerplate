// Task API Service
// Implements the API defined in task-api-spec.yaml

import { Task, TaskInput, TaskFilters } from '../types';

const API_BASE_URL = 'http://localhost:5001/api';

export interface TaskApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

class TaskApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<TaskApiResponse<T>> {
    try {
      const url = `${API_BASE_URL}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        if (response.status === 404) {
          return { error: 'Task not found', status: 404 };
        }
        if (response.status === 400) {
          return { error: 'Invalid request data', status: 400 };
        }
        return { error: 'Server error', status: response.status };
      }

      // Handle 204 No Content (delete operation)
      if (response.status === 204) {
        return { status: 204 };
      }

      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Network error',
        status: 0,
      };
    }
  }

  // GET /tasks - Get a list of tasks with optional filters
  async getTasks(filters?: TaskFilters): Promise<TaskApiResponse<Task[]>> {
    const queryParams = new URLSearchParams();

    if (filters?.status) {
      queryParams.append('status', filters.status);
    }
    if (filters?.priority) {
      queryParams.append('priority', filters.priority);
    }
    if (filters?.dueDate) {
      queryParams.append('dueDate', filters.dueDate);
    }
    if (filters?.search) {
      queryParams.append('search', filters.search);
    }

    const endpoint = `/tasks${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return this.request<Task[]>(endpoint);
  }

  // GET /tasks/{id} - Get a single task by ID
  async getTask(id: string): Promise<TaskApiResponse<Task>> {
    return this.request<Task>(`/tasks/${id}`);
  }

  // POST /tasks - Create a new task
  async createTask(taskData: TaskInput): Promise<TaskApiResponse<Task>> {
    return this.request<Task>('/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData),
    });
  }

  // PUT /tasks/{id} - Update an existing task
  async updateTask(
    id: string,
    taskData: TaskInput
  ): Promise<TaskApiResponse<Task>> {
    return this.request<Task>(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(taskData),
    });
  }

  // DELETE /tasks/{id} - Delete a task
  async deleteTask(id: string): Promise<TaskApiResponse<void>> {
    return this.request<void>(`/tasks/${id}`, {
      method: 'DELETE',
    });
  }
}

export const taskApiService = new TaskApiService();
export default taskApiService;
