import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';

describe('Card Component', () => {
  describe('Rendering', () => {
    it('renders card with children', () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders card with title', () => {
      render(<Card title="Card Title">Card content</Card>);
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders card with subtitle', () => {
      render(<Card subtitle="Card subtitle">Card content</Card>);
      expect(screen.getByText('Card subtitle')).toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders card with both title and subtitle', () => {
      render(
        <Card title="Card Title" subtitle="Card subtitle">
          Card content
        </Card>
      );
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card subtitle')).toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders card without title and subtitle', () => {
      render(<Card>Card content</Card>);
      expect(screen.queryByText('Card Title')).not.toBeInTheDocument();
      expect(screen.queryByText('Card subtitle')).not.toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });
  });

  describe('Padding Variants', () => {
    it('renders with default medium padding', () => {
      render(
        <Card>
          <p>Card content</p>
        </Card>
      );
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with small padding', () => {
      render(
        <Card padding="small">
          <p>Card content</p>
        </Card>
      );
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with large padding', () => {
      render(
        <Card padding="large">
          <p>Card content</p>
        </Card>
      );
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with no padding', () => {
      render(
        <Card padding="none">
          <p>Card content</p>
        </Card>
      );
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });
  });

  describe('Header Rendering', () => {
    it('renders header when title is provided', () => {
      render(
        <Card title="Card Title">
          <p>Card content</p>
        </Card>
      );
      const header = screen.getByText('Card Title').closest('div');
      expect(header).toBeInTheDocument();
    });

    it('renders header when subtitle is provided', () => {
      render(
        <Card subtitle="Card subtitle">
          <p>Card content</p>
        </Card>
      );
      const header = screen.getByText('Card subtitle').closest('div');
      expect(header).toBeInTheDocument();
    });

    it('does not render header when neither title nor subtitle is provided', () => {
      render(
        <Card>
          <p>Card content</p>
        </Card>
      );
      // Header should not be present
      expect(screen.queryByText('Card Title')).not.toBeInTheDocument();
      expect(screen.queryByText('Card subtitle')).not.toBeInTheDocument();
    });
  });

  describe('Content Rendering', () => {
    it('renders simple text content', () => {
      render(<Card>Simple text content</Card>);
      expect(screen.getByText('Simple text content')).toBeInTheDocument();
    });

    it('renders complex JSX content', () => {
      render(
        <Card>
          <div>
            <h4>Content Title</h4>
            <p>Content description</p>
            <button>Action Button</button>
          </div>
        </Card>
      );
      expect(screen.getByText('Content Title')).toBeInTheDocument();
      expect(screen.getByText('Content description')).toBeInTheDocument();
      expect(screen.getByText('Action Button')).toBeInTheDocument();
    });

    it('renders multiple children', () => {
      render(
        <Card>
          <div>First child</div>
          <div>Second child</div>
          <div>Third child</div>
        </Card>
      );
      expect(screen.getByText('First child')).toBeInTheDocument();
      expect(screen.getByText('Second child')).toBeInTheDocument();
      expect(screen.getByText('Third child')).toBeInTheDocument();
    });

    it('renders nested components', () => {
      render(
        <Card>
          <div>
            <span>Nested span</span>
            <div>
              <p>Deeply nested paragraph</p>
            </div>
          </div>
        </Card>
      );
      expect(screen.getByText('Nested span')).toBeInTheDocument();
      expect(screen.getByText('Deeply nested paragraph')).toBeInTheDocument();
    });
  });

  describe('Props Spreading', () => {
    it('spreads additional props to card container', () => {
      render(<Card aria-label="Test card">Card content</Card>);
      const cardContainer = screen.getByText('Card content').closest('div');
      expect(cardContainer).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('renders as a div element', () => {
      render(
        <Card>
          <p>Card content</p>
        </Card>
      );
      const cardElement = screen.getByText('Card content').closest('div');
      expect(cardElement).toBeInTheDocument();
    });

    it('can be focused when tabindex is provided', () => {
      render(
        <Card>
          <p>Card content</p>
        </Card>
      );
      const cardElement = screen.getByText('Card content').closest('div');
      expect(cardElement).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty title', () => {
      render(<Card title="">Card content</Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with empty subtitle', () => {
      render(<Card subtitle="">Card content</Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with both empty title and subtitle', () => {
      render(
        <Card title="" subtitle="">
          Card content
        </Card>
      );
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });
  });

  describe('Content Types', () => {
    it('renders with text content', () => {
      render(<Card>Text content without any HTML elements</Card>);
      expect(
        screen.getByText('Text content without any HTML elements')
      ).toBeInTheDocument();
    });

    it('renders with HTML elements', () => {
      render(
        <Card>
          <h1>Heading</h1>
          <p>Paragraph</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
        </Card>
      );
      expect(screen.getByText('Heading')).toBeInTheDocument();
      expect(screen.getByText('Paragraph')).toBeInTheDocument();
      expect(screen.getByText('List item 1')).toBeInTheDocument();
      expect(screen.getByText('List item 2')).toBeInTheDocument();
    });

    it('renders with form elements', () => {
      render(
        <Card>
          <form>
            <input type="text" placeholder="Enter text" />
            <button type="submit">Submit</button>
          </form>
        </Card>
      );
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
      expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    it('renders with interactive elements', () => {
      render(
        <Card>
          <button>Click me</button>
          <a href="/link">Link</a>
          <input type="checkbox" />
        </Card>
      );
      expect(screen.getByText('Click me')).toBeInTheDocument();
      expect(screen.getByText('Link')).toBeInTheDocument();
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });

  describe('Combination Tests', () => {
    it('renders card with all props', () => {
      render(
        <Card
          title="Complete Card"
          subtitle="A comprehensive card"
          className="full-card"
          data-testid="complete-card"
          aria-label="Complete card"
        >
          Card content
        </Card>
      );

      expect(screen.getByText('A comprehensive card')).toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();

      const cardElement = screen.getByTestId('complete-card');
      expect(cardElement).toHaveAttribute('aria-label', 'Complete card');
    });
  });
});
