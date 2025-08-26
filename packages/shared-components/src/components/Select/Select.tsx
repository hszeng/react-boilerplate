import React from 'react';
import styled from 'styled-components';
import { SelectProps } from './Select.types';

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.875rem;
`;

const StyledSelect = styled.select<SelectProps>`
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: all 0.2s ease-in-out;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:hover:not(:focus) {
    border-color: var(--color-border-hover);
  }

  &:disabled {
    background-color: var(--color-background-disabled);
    color: var(--color-text-disabled);
    cursor: not-allowed;
    opacity: 0.6;
  }

  option {
    background-color: var(--color-background);
    color: var(--color-text);
    padding: 0.5rem;
  }

  option:disabled {
    color: var(--color-text-disabled);
  }
`;

const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <SelectContainer className={className}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <span style={{ color: 'var(--color-error)' }}> *</span>}
        </Label>
      )}
      <StyledSelect
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

export default Select;
