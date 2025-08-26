import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ModalProps } from './Modal.types';

const getSizeStyles = (size: ModalProps['size'] = 'medium') => {
  switch (size) {
    case 'small':
      return css`
        max-width: 400px;
        width: 90%;
      `;
    case 'large':
      return css`
        max-width: 800px;
        width: 90%;
      `;
    default:
      return css`
        max-width: 600px;
        width: 90%;
      `;
  }
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
`;

const ModalContainer = styled.div<{
  $size?: ModalProps['size'];
}>`
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  animation: modalSlideIn 0.3s ease-out;

  ${props => getSizeStyles(props.$size)}

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem 0 1.25rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text-secondary);
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-background-hover);
    color: var(--color-text);
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`;

const Content = styled.div`
  padding: 0 1.25rem 1.25rem 1.25rem;
`;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = 'medium',
  children,
  className = '',
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay
      onClick={onClose}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <ModalContainer
        $size={size}
        className={className}
        onClick={e => e.stopPropagation()}
      >
        {(title || onClose) && (
          <Header>
            {title && <Title>{title}</Title>}
            {onClose && (
              <CloseButton onClick={onClose} aria-label="Close modal">
                ×
              </CloseButton>
            )}
          </Header>
        )}
        <Content>{children}</Content>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
