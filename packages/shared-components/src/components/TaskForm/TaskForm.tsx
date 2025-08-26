import React, { useState } from 'react';
import styled from 'styled-components';
import { TaskFormProps, TaskInput } from './TaskForm.types';
import Form from '../Form';
import Input from '../Input';
import { SelectOption } from '../Select/Select.types';
import Select from '../Select';
import Button from '../Button';

const TaskFormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const FormActions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border);

  /* Responsive design */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  /* Responsive design */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TaskForm: React.FC<TaskFormProps> = ({
  task,
  onSubmit,
  onCancel,
  className = '',
}) => {
  const [formData, setFormData] = useState<TaskInput>({
    title: task?.title || '',
    description: task?.description || '',
    status: task?.status || 'pending',
    priority: task?.priority || 'medium',
    dueDate: task?.dueDate || '',
  });

  const [errors, setErrors] = useState<{ title?: string; dueDate?: string }>(
    {}
  );

  const statusOptions: SelectOption[] = [
    { value: 'pending', label: 'Pending' },
    { value: 'in progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ];

  const priorityOptions: SelectOption[] = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  const validateForm = () => {
    const newErrors: { title?: string; dueDate?: string } = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.dueDate) {
      newErrors.dueDate = 'Due Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange =
    (field: keyof TaskInput) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSelectChange =
    (field: keyof TaskInput) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value as any }));
    };

  return (
    <TaskFormContainer className={className}>
      <Form onSubmit={handleSubmit}>
        <Input
          id="task-title"
          type="text"
          label="Title"
          placeholder="Enter task title..."
          value={formData.title}
          onChange={handleInputChange('title')}
          error={errors.title}
          required
        />

        <Input
          id="task-description"
          type="textarea"
          label="Description"
          placeholder="Enter task description..."
          value={formData.description || ''}
          onChange={handleInputChange('description')}
          rows={3}
        />

        <FormRow>
          <Select
            id="task-status"
            label="Status"
            value={formData.status}
            onChange={handleSelectChange('status')}
            options={statusOptions}
            required
          />

          <Select
            id="task-priority"
            label="Priority"
            value={formData.priority}
            onChange={handleSelectChange('priority')}
            options={priorityOptions}
            required
          />
        </FormRow>

        <Input
          id="task-dueDate"
          type="date"
          label="Due Date"
          value={formData.dueDate || ''}
          onChange={handleInputChange('dueDate')}
          error={errors.dueDate}
          required
        />

        <FormActions>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {task ? 'Update Task' : 'Create Task'}
          </Button>
        </FormActions>
      </Form>
    </TaskFormContainer>
  );
};

export default TaskForm;
