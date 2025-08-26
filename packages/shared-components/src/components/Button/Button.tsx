import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

const getVariantStyles = (variant: ButtonProps['variant'] = 'primary') => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: var(--color-secondary);
        color: white;
        &:hover:not(:disabled) {
          background-color: #5a6268;
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: var(--color-primary);
        border: 2px solid var(--color-primary);
        &:hover:not(:disabled) {
          background-color: var(--color-primary);
          color: white;
        }
      `;
    case 'danger':
      return css`
        background-color: var(--color-danger);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--color-error-hover);
        }
      `;
    default:
      return css`
        background-color: var(--color-primary);
        color: white;
        &:hover:not(:disabled) {
          background-color: var(--color-primary-hover);
        }
      `;
  }
};

const getSizeStyles = (size: ButtonProps['size'] = 'medium') => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        border-radius: 0.25rem;
      `;
    case 'large':
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
        border-radius: 0.5rem;
      `;
    default:
      return css`
        padding: 0.625rem 1.25rem;
        font-size: 1rem;
        border-radius: var(--border-radius);
      `;
  }
};

const StyledButton = styled.button<{
  $variant?: ButtonProps['variant'];
  $size?: ButtonProps['size'];
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  box-shadow: var(--shadow-sm);

  ${props => getVariantStyles(props.$variant)}
  ${props => getSizeStyles(props.$size)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: var(--color-background-disabled);
    color: var(--color-text-disabled);
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: var(--shadow-sm);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
