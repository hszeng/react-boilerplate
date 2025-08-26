# Forsyth Barr UI Components

A shared UI component library for Forsyth Barr projects, built with React 18, TypeScript, and CSS Modules.

## Features

- 🎨 **Consistent Design System** - Unified UI components across all projects
- ⚡ **TypeScript Support** - Full type safety and IntelliSense
- 🎯 **Accessibility** - WCAG compliant components
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Theme Support** - Light and dark theme compatibility
- 🧩 **Modular** - Use only what you need
- 🚀 **Modern Stack** - React 18, Webpack 5, CSS Modules

## Installation

```bash
npm install @forsyth-barr/ui-components
```

## Available Components

### Button

Versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@forsyth-barr/ui-components';

<Button variant="primary" size="medium" onClick={handleClick}>
  Click me
</Button>;
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `loading`: boolean
- `fullWidth`: boolean

### Input

Form input component with validation and error states.

```tsx
import { Input } from '@forsyth-barr/ui-components';

<Input
  id="email"
  type="email"
  label="Email Address"
  placeholder="Enter your email"
  value={email}
  onChange={handleChange}
  error="Please enter a valid email"
  required
/>;
```

**Props:**

- `type`: 'text' | 'email' | 'password' | 'number' | 'date' | 'textarea'
- `label`: string
- `error`: string
- `required`: boolean
- `disabled`: boolean
- `rows`: number (for textarea)

### Select

Dropdown select component with custom styling.

```tsx
import { Select, SelectOption } from '@forsyth-barr/ui-components';

const options: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

<Select
  id="category"
  label="Category"
  value={selectedValue}
  onChange={handleChange}
  options={options}
  placeholder="Choose an option"
/>;
```

### Modal

Modal dialog component for overlays and forms.

```tsx
import { Modal } from '@forsyth-barr/ui-components';

<Modal isOpen={isOpen} onClose={handleClose} title="Confirmation" size="medium">
  <p>Are you sure you want to proceed?</p>
</Modal>;
```

**Props:**

- `size`: 'small' | 'medium' | 'large' | 'full'
- `showCloseButton`: boolean
- `closeOnOverlayClick`: boolean

### Card

Content container component with flexible styling.

```tsx
import { Card } from '@forsyth-barr/ui-components';

<Card
  title="Card Title"
  subtitle="Card subtitle"
  padding="medium"
  shadow="medium"
  hover
>
  <p>Card content goes here</p>
</Card>;
```

**Props:**

- `padding`: 'none' | 'small' | 'medium' | 'large'
- `shadow`: 'none' | 'small' | 'medium' | 'large'
- `hover`: boolean

### Form

Form container component with built-in styling.

```tsx
import { Form } from '@forsyth-barr/ui-components';

<Form
  title="Contact Form"
  subtitle="Fill out the form below"
  onSubmit={handleSubmit}
>
  {/* Form fields */}
</Form>;
```

## Usage Example

```tsx
import React, { useState } from 'react';
import {
  Button,
  Input,
  Select,
  Modal,
  Card,
  Form,
  SelectOption,
} from '@forsyth-barr/ui-components';

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
  });

  const categoryOptions: SelectOption[] = [
    { value: 'general', label: 'General' },
    { value: 'support', label: 'Support' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Card title="User Information" padding="medium">
        <Form onSubmit={handleSubmit}>
          <Input
            id="name"
            type="text"
            label="Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            id="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Select
            id="category"
            label="Category"
            value={formData.category}
            onChange={e =>
              setFormData({ ...formData, category: e.target.value })
            }
            options={categoryOptions}
            required
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirmation"
      >
        <p>Form submitted successfully!</p>
        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
      </Modal>
    </div>
  );
};
```

## Development

### Building the Library

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
npm run lint:fix
```

## Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.types.ts
│   │   ├── Button.module.css
│   │   └── index.tsx
│   ├── Input/
│   ├── Select/
│   ├── Modal/
│   ├── Card/
│   └── Form/
├── styles/
└── index.ts
```

## Contributing

1. Create a new branch for your feature
2. Add your component following the existing structure
3. Include TypeScript types and CSS modules
4. Update the main `index.ts` export
5. Add tests if applicable
6. Submit a pull request

## License

© 2024 Forsyth Barr. All rights reserved.
