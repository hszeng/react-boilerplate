import React from 'react';

// Button component
export declare const Button: React.ComponentType<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}>;

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Input component
export declare const Input: React.ComponentType<{
  id: string;
  type?: 'text' | 'email' | 'password' | 'date' | 'textarea';
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
}>;

export interface InputProps {
  id: string;
  type?: 'text' | 'email' | 'password' | 'date' | 'textarea';
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
}

// Select component
export declare const Select: React.ComponentType<{
  id: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}>;

export interface SelectProps {
  id: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

// Modal component
export declare const Modal: React.ComponentType<{
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}>;

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

// Card component
export declare const Card: React.ComponentType<{
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  padding?: 'small' | 'medium' | 'large';
  className?: string;
}>;

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  padding?: 'small' | 'medium' | 'large';
  className?: string;
}

// Form component
export declare const Form: React.ComponentType<{
  title?: string;
  subtitle?: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  className?: string;
}>;

export interface FormProps {
  title?: string;
  subtitle?: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  className?: string;
}

// TaskCard component
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

export declare const TaskCard: React.ComponentType<{
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  className?: string;
}>;

export interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  className?: string;
}

// TaskForm component
export interface TaskInput {
  title: string;
  description?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in progress' | 'completed';
}

export declare const TaskForm: React.ComponentType<{
  task?: Task | null;
  onSubmit: (data: TaskInput) => void;
  onCancel: () => void;
  className?: string;
}>;

export interface TaskFormProps {
  task?: Task | null;
  onSubmit: (data: TaskInput) => void;
  onCancel: () => void;
  className?: string;
}

// Styled-components exports
export declare const styled: any;
export declare const css: any;
export declare const keyframes: any;
export declare const ThemeProvider: any;
