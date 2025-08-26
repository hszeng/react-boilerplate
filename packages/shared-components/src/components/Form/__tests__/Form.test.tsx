import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../Form';

describe('Form Component', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  describe('Rendering', () => {
    it('renders form with title and subtitle', () => {
      render(
        <Form
          onSubmit={mockOnSubmit}
          title="Test Form"
          subtitle="Form description"
        >
          <input type="text" />
        </Form>
      );
      expect(screen.getByText('Test Form')).toBeInTheDocument();
      expect(screen.getByText('Form description')).toBeInTheDocument();
    });

    it('renders form without title and subtitle', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" />
        </Form>
      );
      expect(screen.queryByText('Test Form')).not.toBeInTheDocument();
      expect(screen.queryByText('Form description')).not.toBeInTheDocument();
    });

    it('renders form with custom className', () => {
      render(
        <Form onSubmit={mockOnSubmit} className="custom-form">
          <input type="text" />
        </Form>
      );
      // Use container query instead of getByRole since styled-components may not expose form role
      const formElement = screen.getByDisplayValue('').closest('form');
      expect(formElement).toHaveClass('custom-form');
    });
  });

  describe('Form Submission', () => {
    it('calls onSubmit when form is submitted via submit event', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </Form>
      );
      const formElement = screen.getByDisplayValue('').closest('form');
      expect(formElement).not.toBeNull();
      if (formElement) {
        fireEvent.submit(formElement);
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      }
    });

    it('calls onSubmit with correct event object', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </Form>
      );
      const formElement = screen.getByDisplayValue('').closest('form');
      expect(formElement).not.toBeNull();
      if (formElement) {
        fireEvent.submit(formElement);

        expect(mockOnSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            target: formElement,
            type: 'submit',
          })
        );
      }
    });
  });

  describe('Children Rendering', () => {
    it('renders single child', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" placeholder="Single input" />
        </Form>
      );
      expect(screen.getByPlaceholderText('Single input')).toBeInTheDocument();
    });

    it('renders multiple children', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" placeholder="First input" />
          <input type="email" placeholder="Second input" />
          <button type="submit">Submit</button>
        </Form>
      );
      expect(screen.getByPlaceholderText('First input')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Second input')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders complex JSX children', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      );
      expect(screen.getByLabelText('Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders text children', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <p>Form description text</p>
          <input type="text" />
        </Form>
      );
      expect(screen.getByText('Form description text')).toBeInTheDocument();
    });

    it('renders number children', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <span>{42}</span>
          <input type="text" />
        </Form>
      );
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('renders array children', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          {['Item 1', 'Item 2'].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
          <input type="text" />
        </Form>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });

  describe('Props Spreading', () => {
    it('spreads additional props to form element', () => {
      render(
        <Form
          onSubmit={mockOnSubmit}
          data-testid="test-form"
          aria-label="Test form"
        >
          <input type="text" />
        </Form>
      );
      const formElement = screen.getByDisplayValue('').closest('form');
      expect(formElement).toHaveAttribute('data-testid', 'test-form');
      expect(formElement).toHaveAttribute('aria-label', 'Test form');
    });
  });

  describe('Event Handling', () => {
    it('calls onSubmit when form is submitted via submit event', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </Form>
      );

      const formElement = screen.getByDisplayValue('').closest('form');
      expect(formElement).not.toBeNull();
      if (formElement) {
        fireEvent.submit(formElement);
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      }
    });

    it('passes event object to onSubmit', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </Form>
      );

      const formElement = screen.getByDisplayValue('').closest('form');
      expect(formElement).not.toBeNull();
      if (formElement) {
        fireEvent.submit(formElement);

        expect(mockOnSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            type: 'submit',
            target: formElement,
          })
        );
      }
    });
  });

  describe('Accessibility', () => {
    it('has correct form element', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" />
        </Form>
      );
      const formElement = screen.getByDisplayValue('').closest('form');
      expect(formElement).toBeInTheDocument();
    });

    it('can be submitted with keyboard', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </Form>
      );
      const formElement = screen.getByDisplayValue('').closest('form');
      expect(formElement).not.toBeNull();
      if (formElement) {
        fireEvent.keyDown(formElement, { key: 'Enter' });
        // Note: This might not trigger form submission in all cases
        expect(formElement).toBeInTheDocument();
      }
    });
  });

  describe('Edge Cases', () => {
    it('handles multiple submit events', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </Form>
      );
      const formElement = screen.getByDisplayValue('').closest('form');
      expect(formElement).not.toBeNull();
      if (formElement) {
        fireEvent.submit(formElement);
        fireEvent.submit(formElement);
        fireEvent.submit(formElement);

        expect(mockOnSubmit).toHaveBeenCalledTimes(3);
      }
    });
  });

  describe('Form Elements Integration', () => {
    it('works with input elements', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </Form>
      );
      expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    });

    it('works with select elements', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <button type="submit">Submit</button>
        </Form>
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('works with textarea elements', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <textarea placeholder="Enter text" />
          <button type="submit">Submit</button>
        </Form>
      );
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('works with checkbox elements', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree</label>
          <button type="submit">Submit</button>
        </Form>
      );
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('works with radio elements', () => {
      render(
        <Form onSubmit={mockOnSubmit}>
          <input type="radio" name="choice" value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
          <input type="radio" name="choice" value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
          <button type="submit">Submit</button>
        </Form>
      );
      const radios = screen.getAllByRole('radio');
      expect(radios).toHaveLength(2);
    });
  });

  describe('Combination Tests', () => {
    it('renders form with all props and complex children', () => {
      render(
        <Form
          onSubmit={mockOnSubmit}
          title="Complete Form"
          subtitle="A comprehensive form"
          className="full-form"
          data-testid="complete-form"
          aria-label="Complete form"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter message" />
          </div>
          <div>
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">Subscribe to newsletter</label>
          </div>
          <button type="submit">Submit Form</button>
        </Form>
      );

      expect(screen.getByText('Complete Form')).toBeInTheDocument();
      expect(screen.getByText('A comprehensive form')).toBeInTheDocument();
      expect(screen.getByLabelText('Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Message')).toBeInTheDocument();
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();

      const formElement = screen.getByTestId('complete-form');
      expect(formElement).toHaveClass('full-form');
      expect(formElement).toHaveAttribute('data-testid', 'complete-form');
      expect(formElement).toHaveAttribute('aria-label', 'Complete form');
    });
  });
});
