import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a basic card with some content.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has a title and some content.',
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle that provides additional context.',
    children: 'This card has both a title and subtitle with content.',
  },
};

export const SmallPadding: Story = {
  args: {
    title: 'Small Padding',
    children: 'This card uses small padding.',
    padding: 'small',
  },
};

export const LargePadding: Story = {
  args: {
    title: 'Large Padding',
    children: 'This card uses large padding.',
    padding: 'large',
  },
};

export const ComplexContent: Story = {
  args: {
    title: 'Complex Card',
    subtitle: 'With rich content and multiple elements',
    children: (
      <div>
        <p>This card contains complex content with multiple paragraphs.</p>
        <p>You can include any React components here.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    ),
  },
};

export const AllPaddingVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card title="Small" padding="small">
        Small padding card
      </Card>
      <Card title="Medium" padding="medium">
        Medium padding card
      </Card>
      <Card title="Large" padding="large">
        Large padding card
      </Card>
    </div>
  ),
};

