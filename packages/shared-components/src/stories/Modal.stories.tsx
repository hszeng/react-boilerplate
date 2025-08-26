import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'full'],
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle modal state
const ModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Basic: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Basic Modal',
    children: 'This is a basic modal with some content.',
  },
};

export const Small: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Small Modal',
    size: 'small',
    children: 'This is a small modal.',
  },
};

export const Large: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Large Modal',
    size: 'large',
    children: (
      <div>
        <p>This is a large modal with more content.</p>
        <p>It can contain multiple paragraphs and other elements.</p>
        <div style={{ marginTop: '1rem' }}>
          <Button variant="primary">Action Button</Button>
        </div>
      </div>
    ),
  },
};

export const WithoutTitle: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    children: 'This modal has no title.',
  },
};

export const ComplexContent: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Complex Modal',
    size: 'large',
    children: (
      <div>
        <h3>Modal Content</h3>
        <p>This modal contains complex content with multiple elements:</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <Button variant="primary">Save</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    ),
  },
};

export const FormModal: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Form Modal',
    size: 'medium',
    children: (
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Name:
          </label>
          <input
            id="name"
            type="text"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            placeholder="Enter your email"
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    ),
  },
};

export const AllSizes: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    
    const openModalHandler = (size: string) => setOpenModal(size);
    const closeModal = () => setOpenModal(null);

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button onClick={() => openModalHandler('small')}>Small Modal</Button>
        <Button onClick={() => openModalHandler('medium')}>Medium Modal</Button>
        <Button onClick={() => openModalHandler('large')}>Large Modal</Button>
        
        <Modal
          isOpen={openModal === 'small'}
          onClose={closeModal}
          title="Small Modal"
          size="small"
        >
          This is a small modal.
        </Modal>
        
        <Modal
          isOpen={openModal === 'medium'}
          onClose={closeModal}
          title="Medium Modal"
          size="medium"
        >
          This is a medium modal.
        </Modal>
        
        <Modal
          isOpen={openModal === 'large'}
          onClose={closeModal}
          title="Large Modal"
          size="large"
        >
          This is a large modal.
        </Modal>
      </div>
    );
  },
};

