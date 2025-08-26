const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to get date string relative to today
const getDateString = daysOffset => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  return date.toISOString().split('T')[0];
};

// In-memory data store
let tasks = [
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

// Helper function to generate ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Helper function to filter tasks
const filterTasks = (tasks, filters) => {
  return tasks.filter(task => {
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      if (
        !task.title.toLowerCase().includes(searchLower) &&
        !task.description?.toLowerCase().includes(searchLower)
      ) {
        return false;
      }
    }

    if (filters.status && task.status !== filters.status) {
      return false;
    }

    if (filters.priority && task.priority !== filters.priority) {
      return false;
    }

    if (filters.dueDate && task.dueDate !== filters.dueDate) {
      return false;
    }

    return true;
  });
};

// Helper function to sort tasks
const sortTasks = (tasks, sort) => {
  return [...tasks].sort((a, b) => {
    let aValue = a[sort.field];
    let bValue = b[sort.field];

    // Handle date fields
    if (
      sort.field === 'dueDate' ||
      sort.field === 'createdAt' ||
      sort.field === 'updatedAt'
    ) {
      aValue = new Date(aValue || '1970-01-01');
      bValue = new Date(bValue || '1970-01-01');
    }

    // Handle string fields
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (sort.direction === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
};

// Routes

// GET /api/tasks - Get all tasks with filtering and sorting
app.get('/api/tasks', (req, res) => {
  try {
    const {
      search,
      status,
      priority,
      dueDate,
      sortField = 'createdAt',
      sortDirection = 'desc',
    } = req.query;

    const filters = { search, status, priority, dueDate };
    const sort = { field: sortField, direction: sortDirection };

    let filteredTasks = filterTasks(tasks, filters);
    let sortedTasks = sortTasks(filteredTasks, sort);

    res.json({
      success: true,
      data: sortedTasks,
      total: sortedTasks.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch tasks',
    });
  }
});

// GET /api/tasks/:id - Get a specific task
app.get('/api/tasks/:id', (req, res) => {
  try {
    const task = tasks.find(t => t.id === req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        error: 'Task not found',
      });
    }

    res.json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch task',
    });
  }
});

// POST /api/tasks - Create a new task
app.post('/api/tasks', (req, res) => {
  try {
    const {
      title,
      description,
      dueDate,
      priority = 'medium',
      status = 'pending',
    } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        error: 'Title is required',
      });
    }

    const now = new Date().toISOString();
    const newTask = {
      id: generateId(),
      title,
      description,
      dueDate,
      priority,
      status,
      createdAt: now,
      updatedAt: now,
    };

    tasks.push(newTask);

    res.status(201).json({
      success: true,
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create task',
    });
  }
});

// PUT /api/tasks/:id - Update a task
app.put('/api/tasks/:id', (req, res) => {
  try {
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);

    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Task not found',
      });
    }

    const { title, description, dueDate, priority, status } = req.body;

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...(title && { title }),
      ...(description !== undefined && { description }),
      ...(dueDate !== undefined && { dueDate }),
      ...(priority && { priority }),
      ...(status && { status }),
      updatedAt: new Date().toISOString(),
    };

    res.json({
      success: true,
      data: tasks[taskIndex],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update task',
    });
  }
});

// DELETE /api/tasks/:id - Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  try {
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);

    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Task not found',
      });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];

    res.json({
      success: true,
      data: deletedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete task',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Task Manager API is running',
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Task Manager API server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📝 API endpoints:`);
  console.log(`   GET    /api/tasks`);
  console.log(`   GET    /api/tasks/:id`);
  console.log(`   POST   /api/tasks`);
  console.log(`   PUT    /api/tasks/:id`);
  console.log(`   DELETE /api/tasks/:id`);
});
