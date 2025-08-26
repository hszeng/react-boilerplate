import React from 'react';
import styled, { css } from 'styled-components';
import { InputProps } from './Input.types';

const getInputStyles = (type: InputProps['type'] = 'text') => {
  if (type === 'textarea') {
    return css`
      resize: vertical;
      min-height: 100px;
      font-family: inherit;
    `;
  }
  return css`
    height: 2.5rem;
  `;
};

const InputContainer = styled.div`
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

const StyledInput = styled.input<InputProps>`
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: all 0.2s ease-in-out;
  width: 100%;
  box-sizing: border-box;

  ${props => getInputStyles(props.type)}

  &::placeholder {
    color: var(--color-text-placeholder);
  }

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
  }

  ${props =>
    props.error &&
    css`
      border-color: var(--color-error);
      &:focus {
        box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.1);
      }
    `}
`;

const StyledTextarea = styled.textarea<InputProps>`
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: all 0.2s ease-in-out;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;

  &::placeholder {
    color: var(--color-text-placeholder);
  }

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
  }

  ${props =>
    props.error &&
    css`
      border-color: var(--color-error);
      &:focus {
        box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.1);
      }
    `}
`;

const ErrorText = styled.span`
  color: var(--color-error);
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  rows = 3,
  className = '',
  ...props
}) => {
  const InputComponent = type === 'textarea' ? StyledTextarea : StyledInput;

  return (
    <InputContainer className={className}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <span style={{ color: 'var(--color-error)' }}> *</span>}
        </Label>
      )}
      <InputComponent
        id={id}
        type={type === 'textarea' ? undefined : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        disabled={disabled}
        required={required}
        rows={type === 'textarea' ? rows : undefined}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
