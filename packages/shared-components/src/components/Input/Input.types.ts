import React from 'react';

export interface InputProps {
  id: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'textarea';
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  rows?: number;
  min?: string;
  max?: string;
}
