import React, { useState, useEffect } from 'react';
import { Task, TaskInput } from '../../types/task';
import { taskService } from '../../services/taskService';
import {
  TaskCard,
  TaskForm,
  Button,
  Select,
  Input,
  Modal,
  SelectOption,
} from '@forsyth-barr/ui-components';
import styles from './TaskManager.module.css';

// Define proper types for component props
interface SortButtonProps {
  field: keyof Task;
  label: string;
  currentField: keyof Task;
  currentDirection: 'asc' | 'desc';
  onSort: (field: keyof Task, direction: 'asc' | 'desc') => void;
}

interface TaskFiltersProps {
  filters: {
    status: string;
    priority: string;
    dueDate: string;
  };
  sort: {
    field: keyof Task;
    direction: 'asc' | 'desc';
  };
  onFiltersChange: (filters: {
    status: string;
    priority: string;
    dueDate: string;
  }) => void;
  onSortChange: (sort: {
    field: keyof Task;
    direction: 'asc' | 'desc';
  }) => void;
  onClearFilters: () => void;
}

const SortButton = ({
  field,
  label,
  currentField,
  currentDirection,
  onSort,
}: SortButtonProps) => {
  const isActive = currentField === field;

  const handleClick = () => {
    if (isActive) {
      onSort(field, currentDirection === 'asc' ? 'desc' : 'asc');
    } else {
      onSort(field, 'asc');
    }
  };

  return (
    <Button
      variant={isActive ? 'primary' : 'outline'}
      size="small"
      onClick={handleClick}
    >
      {label} {isActive ? (currentDirection === 'asc' ? '↑' : '↓') : ''}
    </Button>
  );
};

const TaskFilters = ({
  filters,
  sort,
  onFiltersChange,
  onSortChange,
  onClearFilters,
}: TaskFiltersProps) => {
  const statusOptions: SelectOption[] = [
    { value: '', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'in progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ];

  const priorityOptions: SelectOption[] = [
    { value: '', label: 'All Priority' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  return (
    <div className={styles.filters}>
      <div className={styles.filterSection}>
        <div className={styles.filterHeader}>
          <h3>Filter By</h3>
          <Button variant="outline" size="small" onClick={onClearFilters}>
            Clear All Filters
          </Button>
        </div>
        <div className={styles.filterRow}>
          <div className={styles.filterControls}>
            <Select
              id="status-filter"
              label="Status"
              value={filters.status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onFiltersChange({ ...filters, status: e.target.value })
              }
              options={statusOptions}
            />
            <Select
              id="priority-filter"
              label="Priority"
              value={filters.priority}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onFiltersChange({ ...filters, priority: e.target.value })
              }
              options={priorityOptions}
            />
            <Input
              id="dueDate-filter"
              type="date"
              label="Due Date"
              value={filters.dueDate}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => onFiltersChange({ ...filters, dueDate: e.target.value })}
              placeholder="Filter by due date"
            />
          </div>
        </div>
      </div>

      <div className={styles.sortSection}>
        <h3>Sort By</h3>
        <div className={styles.sortButtons}>
          <SortButton
            field="dueDate"
            label="Due Date"
            currentField={sort.field}
            currentDirection={sort.direction}
            onSort={(field, direction) => onSortChange({ field, direction })}
          />
          <SortButton
            field="priority"
            label="Priority"
            currentField={sort.field}
            currentDirection={sort.direction}
            onSort={(field, direction) => onSortChange({ field, direction })}
          />
          <SortButton
            field="status"
            label="Status"
            currentField={sort.field}
            currentDirection={sort.direction}
            onSort={(field, direction) => onSortChange({ field, direction })}
          />
        </div>
      </div>
    </div>
  );
};

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    dueDate: '',
  });
  const [sort, setSort] = useState({
    field: 'dueDate' as keyof Task,
    direction: 'asc' as 'asc' | 'desc',
  });

  // Load tasks on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  // Apply filters and sorting when tasks or filters change
  const applyFiltersAndSort = () => {
    console.log('Applying filters and sort. Current tasks:', tasks);
    console.log('Current filters:', filters);
    console.log('Current sort:', sort);

    let filtered = [...tasks];

    // Apply status filter
    if (filters.status) {
      filtered = filtered.filter(task => task.status === filters.status);
    }

    // Apply priority filter
    if (filters.priority) {
      filtered = filtered.filter(task => task.priority === filters.priority);
    }

    // Apply due date filter
    if (filters.dueDate) {
      filtered = filtered.filter(task => task.dueDate === filters.dueDate);
    }

    console.log('After filtering:', filtered);

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: string | number | Date = a[sort.field] || '';
      let bValue: string | number | Date = b[sort.field] || '';

      // Handle date fields
      if (sort.field === 'dueDate') {
        aValue = new Date(aValue || '1970-01-01');
        bValue = new Date(bValue || '1970-01-01');
      }

      // Handle priority field with custom order
      if (sort.field === 'priority') {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        aValue = priorityOrder[aValue as keyof typeof priorityOrder] || 0;
        bValue = priorityOrder[bValue as keyof typeof priorityOrder] || 0;
      }

      // Handle status field with custom order
      if (sort.field === 'status') {
        const statusOrder = { 'in progress': 2, pending: 1, completed: 3 };
        aValue = statusOrder[aValue as keyof typeof statusOrder] || 0;
        bValue = statusOrder[bValue as keyof typeof statusOrder] || 0;
      }

      if (sort.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    console.log('After sorting:', filtered);
    setFilteredTasks(filtered);
  };

  // Apply filters and sorting when tasks or filters change
  useEffect(() => {
    applyFiltersAndSort();
  }, [tasks, filters, sort]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await taskService.getTasks();
      setTasks(response.data || []);
    } catch (err) {
      setError('Failed to load tasks');
      // Remove console.error for production
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData: TaskInput) => {
    try {
      console.log('Creating task with data:', taskData);
      const response = await taskService.createTask(taskData);
      console.log('Task created successfully:', response.data);
      setTasks(prev => {
        const newTasks = [...prev, response.data];
        console.log('Updated tasks array:', newTasks);
        return newTasks;
      });
      setShowForm(false);
    } catch (err) {
      console.error('Error creating task:', err);
      setError('Failed to create task');
      // Remove console.error for production
    }
  };

  const handleUpdateTask = async (taskData: Partial<TaskInput>) => {
    try {
      const response = await taskService.updateTask(editingTask!.id, taskData);
      setTasks(prev =>
        prev.map(task => (task.id === editingTask!.id ? response.data : task))
      );
      setShowForm(false);
      setEditingTask(null);
    } catch (err) {
      setError('Failed to update task');
      // Remove console.error for production
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      setError('Failed to delete task');
      // Remove console.error for production
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort: typeof sort) => {
    setSort(newSort);
  };

  const handleClearFilters = () => {
    setFilters({
      status: '',
      priority: '',
      dueDate: '',
    });
    setSort({
      field: 'dueDate',
      direction: 'asc',
    });
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading tasks...</p>
      </div>
    );
  }

  return (
    <div className={styles.taskManager}>
      <header className={styles.header}>
        <h1>Task Manager</h1>
      </header>

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      <TaskFilters
        filters={filters}
        sort={sort}
        onFiltersChange={handleFiltersChange}
        onSortChange={handleSortChange}
        onClearFilters={handleClearFilters}
      />

      <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
        <Button
          variant="primary"
          size="large"
          onClick={() => {
            console.log('Add New Task button clicked!');
            setShowForm(true);
          }}
        >
          <span style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>+</span>
          Add New Task
        </Button>
      </div>

      <Modal
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingTask(null);
        }}
        title={editingTask ? 'Edit Task' : 'Create New Task'}
        size="large"
      >
        <TaskForm
          task={editingTask}
          onSubmit={
            editingTask
              ? (data: TaskInput) => handleUpdateTask(data)
              : handleCreateTask
          }
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
        />
      </Modal>

      <main className={styles.main}>
        {filteredTasks.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No tasks found. Create your first task to get started!</p>
          </div>
        ) : (
          <div className={styles.taskGrid}>
            {filteredTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={() => handleEditTask(task)}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default TaskManager;
