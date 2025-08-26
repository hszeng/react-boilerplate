import React, { useState } from 'react';
import {
  Button,
  Input,
  Select,
  Modal,
  Card,
  Form,
  TaskCard,
  TaskForm,
  SelectOption,
  Task,
  TaskInput,
} from '@forsyth-barr/ui-components';
import './App.css';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Sample Task 1',
      description: 'This is a sample task description',
      status: 'pending',
      priority: 'medium',
      dueDate: '2024-12-31',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      title: 'Sample Task 2',
      description: 'Another sample task',
      status: 'in progress',
      priority: 'high',
      dueDate: '2024-12-25',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
  ]);

  const categoryOptions: SelectOption[] = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' },
  ];

  const handleInputChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, category: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', category: '', message: '' });
  };

  const handleTaskEdit = (task: Task) => {
    console.log('Edit task:', task);
    setIsTaskFormOpen(true);
  };

  const handleTaskDelete = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleTaskSubmit = (taskData: TaskInput) => {
    console.log('Task submitted:', taskData);
    setIsTaskFormOpen(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Another Project Example</h1>
        <p>Demonstrating how to use the shared components library</p>
      </header>

      <main className="main">
        <section className="section">
          <h2>About This Project</h2>
          <p>
            This is another project example that demonstrates how to integrate
            and use the Forsyth Barr shared components library. It shows how
            different projects can leverage the same UI components for
            consistency and efficiency.
          </p>
        </section>

        <section className="section">
          <h2>Available Components</h2>
          <div className="components-grid">
            <Card
              title="Button Component"
              subtitle="Multiple variants and sizes"
            >
              <div className="component-demo">
                <Button variant="primary" size="small">
                  Small Primary
                </Button>
                <Button variant="secondary" size="medium">
                  Medium Secondary
                </Button>
                <Button variant="outline" size="large">
                  Large Outline
                </Button>
                <Button variant="danger">Danger</Button>
                <Button disabled>Disabled</Button>
              </div>
            </Card>

            <Card
              title="Input Component"
              subtitle="Form inputs with validation"
            >
              <div className="component-demo">
                <Input
                  id="demo-text"
                  type="text"
                  label="Text Input"
                  placeholder="Enter text..."
                  value={formData.name}
                  onChange={handleInputChange('name')}
                />
                <Input
                  id="demo-email"
                  type="email"
                  label="Email Input"
                  placeholder="Enter email..."
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  error="Please enter a valid email"
                />
                <Input
                  id="demo-textarea"
                  type="textarea"
                  label="Textarea"
                  placeholder="Enter message..."
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  rows={3}
                />
              </div>
            </Card>

            <Card title="Select Component" subtitle="Dropdown selections">
              <div className="component-demo">
                <Select
                  id="demo-select"
                  label="Category"
                  value={formData.category}
                  onChange={handleSelectChange}
                  options={categoryOptions}
                  placeholder="Choose a category"
                />
              </div>
            </Card>

            <Card title="Modal Component" subtitle="Overlay dialogs">
              <div className="component-demo">
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
              </div>
            </Card>

            <Card title="TaskCard Component" subtitle="Task display component">
              <div className="component-demo">
                <TaskCard
                  task={tasks[0]}
                  onEdit={handleTaskEdit}
                  onDelete={handleTaskDelete}
                />
              </div>
            </Card>

            <Card
              title="TaskForm Component"
              subtitle="Task creation/editing form"
            >
              <div className="component-demo">
                <Button
                  variant="primary"
                  onClick={() => setIsTaskFormOpen(true)}
                >
                  Create Task
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="section">
          <h2>Integration Benefits</h2>
          <ul className="features-list">
            <li>✅ Consistent UI across multiple projects</li>
            <li>✅ Reduced development time</li>
            <li>✅ Shared component maintenance</li>
            <li>✅ Built with React 18 and TypeScript</li>
            <li>✅ CSS Modules for scoped styling</li>
            <li>✅ Webpack 5 for modern bundling</li>
            <li>✅ Responsive design</li>
            <li>✅ Dark theme support</li>
            <li>✅ Accessibility features</li>
          </ul>
        </section>

        <section className="section">
          <h2>How to Use Shared Components</h2>
          <p>
            To use these shared components in your project, install the UI
            component library:
          </p>
          <pre className="code-block">
            <code>npm install @forsyth-barr/ui-components</code>
          </pre>
          <p>Then import and use components in your application:</p>
          <pre className="code-block">
            <code>{`import { Button, Input, Modal, Card, Form, TaskCard, TaskForm } from '@forsyth-barr/ui-components';

// Use components in your app
<Button variant="primary">Click me</Button>
<Input placeholder="Enter text..." />
<Modal isOpen={true}>Content</Modal>
<Card title="Title">Content</Card>
<Form onSubmit={handleSubmit}>Form content</Form>
<TaskCard task={task} onEdit={handleEdit} onDelete={handleDelete} />
<TaskForm task={task} onSubmit={handleSubmit} onCancel={handleCancel} />`}</code>
          </pre>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Forsyth Barr. All rights reserved.</p>
      </footer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Contact Form"
        size="medium"
      >
        <Form onSubmit={handleFormSubmit}>
          <Input
            id="modal-name"
            type="text"
            label="Name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange('name')}
            required
          />
          <Input
            id="modal-email"
            type="email"
            label="Email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleInputChange('email')}
            required
          />
          <Select
            id="modal-category"
            label="Category"
            value={formData.category}
            onChange={handleSelectChange}
            options={categoryOptions}
            placeholder="Choose a category"
            required
          />
          <Input
            id="modal-message"
            type="textarea"
            label="Message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleInputChange('message')}
            rows={4}
            required
          />
          <div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}
          >
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>

      <Modal
        isOpen={isTaskFormOpen}
        onClose={() => setIsTaskFormOpen(false)}
        title="Create Task"
        size="large"
      >
        <TaskForm
          onSubmit={handleTaskSubmit}
          onCancel={() => setIsTaskFormOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default App;
