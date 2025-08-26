import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
    // Mock document.body.style.overflow
    Object.defineProperty(document.body, 'style', {
      value: {},
      writable: true,
    });
  });

  afterEach(() => {
    // Reset body overflow
    document.body.style.overflow = 'unset';
  });

  describe('Rendering', () => {
    it('renders modal when isOpen is true', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('does not render modal when isOpen is false', () => {
      render(
        <Modal isOpen={false} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('renders modal with title', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <div>Modal Content</div>
        </Modal>
      );
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    });

    it('renders modal without title', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    });

    it('renders close button when onClose is provided', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
    });

    it('does not render close button when onClose is not provided', () => {
      render(
        <Modal isOpen={true} onClose={undefined as any}>
          <div>Modal Content</div>
        </Modal>
      );
      expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
    });
  });

  describe('Modal Sizes', () => {
    it('renders with default medium size', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('renders with small size', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} size="small">
          <div>Small Modal</div>
        </Modal>
      );
      expect(screen.getByText('Small Modal')).toBeInTheDocument();
    });

    it('renders with large size', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} size="large">
          <div>Large Modal</div>
        </Modal>
      );
      expect(screen.getByText('Large Modal')).toBeInTheDocument();
    });
  });

  describe('Close Functionality', () => {
    it('calls onClose when close button is clicked', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          Modal Content
        </Modal>
      );
      const closeButton = screen.getByLabelText('Close modal');
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when Escape key is pressed', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          Modal Content
        </Modal>
      );
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Body Overflow Management', () => {
    it('sets body overflow to hidden when modal opens', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('resets body overflow when modal closes', () => {
      const { unmount } = render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      unmount();
      expect(document.body.style.overflow).toBe('unset');
    });

    it('resets body overflow when component unmounts', () => {
      const { unmount } = render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      unmount();
      expect(document.body.style.overflow).toBe('unset');
    });
  });

  describe('Event Listeners', () => {
    it('adds event listener for Escape key when modal opens', () => {
      const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );
      addEventListenerSpy.mockRestore();
    });

    it('removes event listener when modal closes', () => {
      const removeEventListenerSpy = jest.spyOn(
        document,
        'removeEventListener'
      );
      const { unmount } = render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>Modal Content</div>
        </Modal>
      );
      unmount();
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );
      removeEventListenerSpy.mockRestore();
    });
  });

  describe('Accessibility', () => {
    it('has correct aria-label for close button', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          Modal Content
        </Modal>
      );
      expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
    });
  });

  describe('Content Rendering', () => {
    it('renders simple text content', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          Simple text content
        </Modal>
      );
      expect(screen.getByText('Simple text content')).toBeInTheDocument();
    });

    it('renders complex JSX content', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>
            <h2>Modal Title</h2>
            <p>Modal description</p>
            <button>Action Button</button>
          </div>
        </Modal>
      );
      expect(screen.getByText('Modal Title')).toBeInTheDocument();
      expect(screen.getByText('Modal description')).toBeInTheDocument();
      expect(screen.getByText('Action Button')).toBeInTheDocument();
    });

    it('renders multiple children', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <div>First child</div>
          <div>Second child</div>
          <div>Third child</div>
        </Modal>
      );
      expect(screen.getByText('First child')).toBeInTheDocument();
      expect(screen.getByText('Second child')).toBeInTheDocument();
      expect(screen.getByText('Third child')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles undefined children', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          {undefined}
        </Modal>
      );
      expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
    });

    it('handles multiple Escape key presses', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          Modal Content
        </Modal>
      );

      fireEvent.keyDown(document, { key: 'Escape' });
      fireEvent.keyDown(document, { key: 'Escape' });
      fireEvent.keyDown(document, { key: 'Escape' });

      expect(mockOnClose).toHaveBeenCalledTimes(3);
    });
  });
});
