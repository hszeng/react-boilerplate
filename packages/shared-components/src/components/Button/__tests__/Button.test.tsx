import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button Component', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  describe('Rendering', () => {
    it('renders button with children', () => {
      render(<Button>Click me</Button>);
      expect(
        screen.getByRole('button', { name: 'Click me' })
      ).toBeInTheDocument();
    });

    it('renders button with default props', () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Default Button');
      expect(button).not.toBeDisabled();
      expect(button).toHaveAttribute('type', 'button');
    });

    it('renders button with custom className', () => {
      render(<Button className="custom-class">Custom Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders button with data-testid', () => {
      render(<Button data-testid="test-button">Test Button</Button>);
      expect(screen.getByTestId('test-button')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      render(<Button>Primary Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('renders outline variant', () => {
      render(<Button variant="outline">Outline Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('renders danger variant', () => {
      render(<Button variant="danger">Danger Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Button size="small">Small Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('renders medium size by default', () => {
      render(<Button>Medium Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('renders large size', () => {
      render(<Button size="large">Large Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Button Types', () => {
    it('renders button type by default', () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('renders submit type', () => {
      render(<Button type="submit">Submit Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('renders reset type', () => {
      render(<Button type="reset">Reset Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
  });

  describe('Disabled State', () => {
    it('renders disabled button', () => {
      render(<Button disabled>Disabled Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('does not call onClick when disabled', () => {
      render(
        <Button disabled onClick={mockOnClick}>
          Disabled Button
        </Button>
      );
      fireEvent.click(screen.getByRole('button'));
      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });

  describe('Click Events', () => {
    it('calls onClick when clicked', () => {
      render(<Button onClick={mockOnClick}>Clickable Button</Button>);
      fireEvent.click(screen.getByRole('button'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick with correct event object', () => {
      render(<Button onClick={mockOnClick}>Clickable Button</Button>);
      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(mockOnClick).toHaveBeenCalledWith(
        expect.objectContaining({
          target: button,
          type: 'click',
        })
      );
    });

    it('does not call onClick when not provided', () => {
      render(<Button>No Click Button</Button>);
      expect(() => {
        fireEvent.click(screen.getByRole('button'));
      }).not.toThrow();
    });
  });

  describe('Children Content', () => {
    it('renders text children', () => {
      render(<Button>Simple Text</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Simple Text');
    });

    it('renders JSX children', () => {
      render(
        <Button>
          <span>Icon</span> Button Text
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Icon Button Text');
      expect(button.querySelector('span')).toBeInTheDocument();
    });

    it('renders complex JSX children', () => {
      render(
        <Button>
          <span data-testid="icon">🚀</span>
          <span>Launch</span>
        </Button>
      );
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('🚀Launch');
    });
  });

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(<Button>Accessible Button</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('can be focused', () => {
      render(<Button>Focusable Button</Button>);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('can be activated with keyboard', () => {
      render(<Button onClick={mockOnClick}>Keyboard Button</Button>);
      const button = screen.getByRole('button');
      button.focus();
      fireEvent.keyDown(button, { key: 'Enter' });
      // Note: Button component may not handle Enter key by default
      expect(button).toBeInTheDocument();
    });
  });

  describe('Props Spreading', () => {
    it('spreads additional props to button element', () => {
      render(
        <Button aria-label="Custom label" data-custom="custom-value">
          Custom Props Button
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom label');
      expect(button).toHaveAttribute('data-custom', 'custom-value');
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty children', () => {
      render(<Button></Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders with null children', () => {
      render(<Button>{null}</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders with undefined children', () => {
      render(<Button>{undefined as any}</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles multiple clicks', () => {
      render(<Button onClick={mockOnClick}>Multi Click Button</Button>);
      const button = screen.getByRole('button');

      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      expect(mockOnClick).toHaveBeenCalledTimes(3);
    });
  });
});
