import React from 'react';

export interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  title?: string;
  subtitle?: string;
  className?: string;
}
