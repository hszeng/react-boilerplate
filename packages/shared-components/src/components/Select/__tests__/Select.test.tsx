import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from '../Select';

describe('Select Component', () => {
  const mockOnChange = jest.fn();
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  describe('Rendering', () => {
    it('renders select with basic props', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders select with label', () => {
      render(
        <Select
          id="test-select"
          label="Test Label"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('renders select with placeholder', () => {
      render(
        <Select
          id="test-select"
          placeholder="Select an option"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByDisplayValue('Select an option')).toBeInTheDocument();
    });

    it('renders select with value', () => {
      render(
        <Select
          id="test-select"
          value="option2"
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByRole('combobox')).toHaveValue('option2');
    });

    it('renders select with custom className', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
          className="custom-class"
        />
      );
      expect(screen.getByRole('combobox').closest('div')).toHaveClass(
        'custom-class'
      );
    });
  });

  describe('Options', () => {
    it('renders all options', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      const select = screen.getByRole('combobox');

      expect(select).toHaveTextContent('Option 1');
      expect(select).toHaveTextContent('Option 2');
      expect(select).toHaveTextContent('Option 3');
    });

    it('renders empty options array', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={[]}
        />
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders options with empty values', () => {
      const optionsWithEmpty = [
        { value: '', label: 'Empty Option' },
        { value: 'option1', label: 'Option 1' },
      ];

      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={optionsWithEmpty}
        />
      );
      expect(screen.getByRole('combobox')).toHaveTextContent('Empty Option');
    });
  });

  describe('Required Field', () => {
    it('shows required indicator when required is true', () => {
      render(
        <Select
          id="test-select"
          label="Required Field"
          required
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('does not show required indicator when required is false', () => {
      render(
        <Select
          id="test-select"
          label="Optional Field"
          required={false}
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.queryByText('*')).not.toBeInTheDocument();
    });

    it('sets required attribute on select element', () => {
      render(
        <Select
          id="test-select"
          required
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByRole('combobox')).toHaveAttribute('required');
    });
  });

  describe('Disabled State', () => {
    it('renders disabled select', () => {
      render(
        <Select
          id="test-select"
          value="option1"
          onChange={mockOnChange}
          options={mockOptions}
          disabled
        />
      );
      expect(screen.getByRole('combobox')).toBeDisabled();
    });

    it('has disabled styling', () => {
      render(
        <Select
          id="test-select"
          value="option1"
          onChange={mockOnChange}
          options={mockOptions}
          disabled
        />
      );
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('disabled');
    });
  });

  describe('Change Events', () => {
    it('calls onChange when value changes', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'option2' },
      });
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Focus Events', () => {
    it('can be focused', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      const select = screen.getByRole('combobox');
      select.focus();
      expect(select).toHaveFocus();
    });

    it('can be focused when it has a label', () => {
      render(
        <Select
          id="test-select"
          label="Test Label"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      const select = screen.getByLabelText('Test Label');
      select.focus();
      expect(select).toHaveFocus();
    });
  });

  describe('Accessibility', () => {
    it('has correct id attribute', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByRole('combobox')).toHaveAttribute('id', 'test-select');
    });

    it('associates label with select using htmlFor', () => {
      render(
        <Select
          id="test-select"
          label="Test Label"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      const label = screen.getByText('Test Label');
      const select = screen.getByRole('combobox');
      expect(label).toHaveAttribute('for', 'test-select');
      expect(select).toHaveAttribute('id', 'test-select');
    });

    it('can be accessed by label text', () => {
      render(
        <Select
          id="test-select"
          label="Test Label"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('has correct role', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('Props Spreading', () => {
    it('spreads additional props to select element', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
          data-testid="custom-select"
          aria-label="Custom label"
        />
      );
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('data-testid', 'custom-select');
      expect(select).toHaveAttribute('aria-label', 'Custom label');
    });
  });

  describe('Placeholder', () => {
    it('renders placeholder option when provided', () => {
      render(
        <Select
          id="test-select"
          placeholder="Select an option"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByDisplayValue('Select an option')).toBeInTheDocument();
    });

    it('does not render placeholder option when not provided', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(
        screen.queryByDisplayValue('Select an option')
      ).not.toBeInTheDocument();
    });

    it('placeholder option is disabled', () => {
      render(
        <Select
          id="test-select"
          placeholder="Select an option"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      const select = screen.getByRole('combobox');
      const placeholderOption = select.querySelector('option[value=""]');
      expect(placeholderOption).toHaveAttribute('disabled');
    });
  });

  describe('Value Selection', () => {
    it('displays selected value', () => {
      render(
        <Select
          id="test-select"
          value="option2"
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByDisplayValue('Option 2')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty options array', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={[]}
        />
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders without label', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
    });

    it('renders without placeholder', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(
        screen.queryByDisplayValue('Select an option')
      ).not.toBeInTheDocument();
    });

    it('handles multiple change events', () => {
      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );
      const select = screen.getByRole('combobox');

      fireEvent.change(select, { target: { value: 'option1' } });
      fireEvent.change(select, { target: { value: 'option2' } });
      fireEvent.change(select, { target: { value: 'option3' } });

      expect(mockOnChange).toHaveBeenCalledTimes(3);
    });

    it('handles options with special characters', () => {
      const specialOptions = [
        { value: 'option1', label: 'Option & Special < > " \' Characters' },
        { value: 'option2', label: 'Option with émojis 🚀' },
      ];

      render(
        <Select
          id="test-select"
          value=""
          onChange={mockOnChange}
          options={specialOptions}
        />
      );
      expect(screen.getByRole('combobox')).toHaveTextContent(
        'Option & Special < > " \' Characters'
      );
      expect(screen.getByRole('combobox')).toHaveTextContent(
        'Option with émojis 🚀'
      );
    });
  });
});
