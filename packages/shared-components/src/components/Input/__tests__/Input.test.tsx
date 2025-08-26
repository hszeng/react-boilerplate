import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../Input';

describe('Input Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  describe('Rendering', () => {
    it('renders input with basic props', () => {
      render(<Input id="test-input" value="" onChange={mockOnChange} />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders input with label', () => {
      render(
        <Input
          id="test-input"
          label="Test Label"
          value=""
          onChange={mockOnChange}
        />
      );
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('renders input with placeholder', () => {
      render(
        <Input
          id="test-input"
          placeholder="Enter text here"
          value=""
          onChange={mockOnChange}
        />
      );
      expect(
        screen.getByPlaceholderText('Enter text here')
      ).toBeInTheDocument();
    });

    it('renders input with value', () => {
      render(
        <Input id="test-input" value="test value" onChange={mockOnChange} />
      );
      expect(screen.getByRole('textbox')).toHaveValue('test value');
    });

    it('renders input with custom className', () => {
      render(
        <Input
          id="test-input"
          value=""
          onChange={mockOnChange}
          className="custom-class"
        />
      );
      expect(screen.getByRole('textbox').closest('div')).toHaveClass(
        'custom-class'
      );
    });
  });

  describe('Input Types', () => {
    it('renders text input by default', () => {
      render(<Input id="test-input" value="" onChange={mockOnChange} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
    });

    it('renders email input', () => {
      render(
        <Input id="test-input" type="email" value="" onChange={mockOnChange} />
      );
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });

    it('renders password input', () => {
      render(
        <Input
          id="test-input"
          type="password"
          value=""
          onChange={mockOnChange}
        />
      );
      expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'password');
    });

    it('renders number input', () => {
      render(
        <Input id="test-input" type="number" value="" onChange={mockOnChange} />
      );
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    });

    it('renders date input', () => {
      render(
        <Input id="test-input" type="date" value="" onChange={mockOnChange} />
      );
      expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'date');
    });

    it('renders textarea', () => {
      render(
        <Input
          id="test-input"
          type="textarea"
          value=""
          onChange={mockOnChange}
        />
      );
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '3');
    });

    it('renders textarea with custom rows', () => {
      render(
        <Input
          id="test-input"
          type="textarea"
          rows={5}
          value=""
          onChange={mockOnChange}
        />
      );
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
    });
  });

  describe('Required Field', () => {
    it('shows required indicator when required is true', () => {
      render(
        <Input
          id="test-input"
          label="Required Field"
          required
          value=""
          onChange={mockOnChange}
        />
      );
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('does not show required indicator when required is false', () => {
      render(
        <Input
          id="test-input"
          label="Optional Field"
          required={false}
          value=""
          onChange={mockOnChange}
        />
      );
      expect(screen.queryByText('*')).not.toBeInTheDocument();
    });

    it('sets required attribute on input element', () => {
      render(
        <Input id="test-input" required value="" onChange={mockOnChange} />
      );
      expect(screen.getByRole('textbox')).toHaveAttribute('required');
    });
  });

  describe('Disabled State', () => {
    it('renders disabled input', () => {
      render(
        <Input id="test-input" value="" onChange={mockOnChange} disabled />
      );
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('has disabled styling', () => {
      render(
        <Input id="test-input" value="" onChange={mockOnChange} disabled />
      );
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('disabled');
    });
  });

  describe('Error State', () => {
    it('renders error message', () => {
      render(
        <Input
          id="test-input"
          error="This field is required"
          value=""
          onChange={mockOnChange}
        />
      );
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('does not render error message when no error', () => {
      render(<Input id="test-input" value="" onChange={mockOnChange} />);
      expect(
        screen.queryByText('This field is required')
      ).not.toBeInTheDocument();
    });
  });

  describe('Change Events', () => {
    it('calls onChange when input value changes', () => {
      render(<Input id="test-input" value="" onChange={mockOnChange} />);
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'new value' },
      });
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('calls onChange with correct event object', () => {
      render(<Input id="test-input" value="" onChange={mockOnChange} />);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'new value' } });

      expect(mockOnChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: input,
          type: 'change',
        })
      );
    });

    it('calls onChange for textarea', () => {
      render(
        <Input
          id="test-input"
          type="textarea"
          value=""
          onChange={mockOnChange}
        />
      );
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'new textarea value' },
      });
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Focus Events', () => {
    it('can be focused', () => {
      render(<Input id="test-input" value="" onChange={mockOnChange} />);
      const input = screen.getByRole('textbox');
      input.focus();
      expect(input).toHaveFocus();
    });

    it('can be focused when it has a label', () => {
      render(
        <Input
          id="test-input"
          label="Test Label"
          value=""
          onChange={mockOnChange}
        />
      );
      const input = screen.getByLabelText('Test Label');
      input.focus();
      expect(input).toHaveFocus();
    });
  });

  describe('Accessibility', () => {
    it('has correct id attribute', () => {
      render(<Input id="test-input" value="" onChange={mockOnChange} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'test-input');
    });

    it('associates label with input using htmlFor', () => {
      render(
        <Input
          id="test-input"
          label="Test Label"
          value=""
          onChange={mockOnChange}
        />
      );
      const label = screen.getByText('Test Label');
      const input = screen.getByRole('textbox');
      expect(label).toHaveAttribute('for', 'test-input');
      expect(input).toHaveAttribute('id', 'test-input');
    });

    it('can be accessed by label text', () => {
      render(
        <Input
          id="test-input"
          label="Test Label"
          value=""
          onChange={mockOnChange}
        />
      );
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });
  });

  describe('Props Spreading', () => {
    it('spreads additional props to input element', () => {
      render(
        <Input
          id="test-input"
          value=""
          onChange={mockOnChange}
          data-testid="custom-input"
          aria-label="Custom label"
          min="0"
          max="100"
        />
      );
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('data-testid', 'custom-input');
      expect(input).toHaveAttribute('aria-label', 'Custom label');
      expect(input).toHaveAttribute('min', '0');
      expect(input).toHaveAttribute('max', '100');
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty string value', () => {
      render(<Input id="test-input" value="" onChange={mockOnChange} />);
      expect(screen.getByRole('textbox')).toHaveValue('');
    });

    it('renders with undefined value', () => {
      render(
        <Input
          id="test-input"
          value={undefined as any}
          onChange={mockOnChange}
        />
      );
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders with zero value', () => {
      render(
        <Input id="test-input" value={0 as any} onChange={mockOnChange} />
      );
      expect(screen.getByRole('textbox')).toHaveValue('0');
    });

    it('renders with false value', () => {
      render(
        <Input id="test-input" value={false as any} onChange={mockOnChange} />
      );
      expect(screen.getByRole('textbox')).toHaveValue('false');
    });
  });
});
