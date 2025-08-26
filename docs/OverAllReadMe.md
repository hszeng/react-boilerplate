# Forsyth Barr UI Components Workspace

This is a monorepo workspace containing multiple React applications and a shared UI component library. This document provides a comprehensive guide to all available npm scripts and their usage.

## Project Structure

```
./
├── packages/
│   ├── shared-components/     # Shared UI component library
│   ├── task-management/       # Task management application
│   └── another-project-example/ # Example project showcase
├── docs/                      # Documentation
├── scripts/                   # Build and utility scripts
└── tools/                     # Development tools
```

## Available Scripts

### Core Development Scripts

#### `npm run preinstall`
- **Purpose**: Pre-installation script that runs automatically before `npm install`
- **Function**: Checks Node.js version compatibility
- **Usage**: Runs automatically, no manual execution needed
- **Requirements**: Node.js >= 20.0.0

#### `npm run build`
- **Purpose**: Builds all packages in the workspace
- **Function**: Runs build command for all workspace packages
- **Usage**: `npm run build`
- **Output**: Creates production builds for all packages

#### `npm run dev`
- **Purpose**: Starts development servers for all packages
- **Function**: Runs dev command for all workspace packages
- **Usage**: `npm run dev`
- **Note**: May start multiple servers on different ports

### Testing Scripts

#### `npm run test`
- **Purpose**: Runs unit tests for shared components
- **Function**: Executes Jest tests for the shared-components package
- **Usage**: `npm run test`
- **Output**: Test results for 164 tests across 6 test suites
- **Note**: Only runs tests for shared-components (task-management has no unit tests)

#### `npm run lint`
- **Purpose**: Runs ESLint for all packages
- **Function**: Checks code quality and style across all workspace packages
- **Usage**: `npm run lint`
- **Output**: ESLint results with warnings and errors
- **Note**: Uses shared ESLint configuration from root

#### `npm run lint:fix`
- **Purpose**: Automatically fixes ESLint issues where possible
- **Function**: Runs ESLint with --fix flag for all packages
- **Usage**: `npm run lint:fix`
- **Output**: Automatically fixes formatting and simple issues

### Code Formatting Scripts

#### `npm run format`
- **Purpose**: Formats all code files using Prettier
- **Function**: Applies consistent code formatting across the entire project
- **Usage**: `npm run format`
- **Files**: Formats .js, .jsx, .ts, .tsx, .json, .css, .md files
- **Note**: Overwrites files with formatted content

#### `npm run format:check`
- **Purpose**: Checks if all files are properly formatted
- **Function**: Runs Prettier in check mode without modifying files
- **Usage**: `npm run format:check`
- **Output**: Reports files that need formatting
- **Exit Code**: 0 if all files are formatted, 1 if formatting issues found

### Individual Package Scripts

#### `npm run task-management`
- **Purpose**: Starts the task management application in development mode
- **Function**: Runs dev server for task-management package
- **Usage**: `npm run task-management`
- **Port**: 3000
- **Features**: Hot reload, development server

#### `npm run another-project`
- **Purpose**: Starts the example project showcase in development mode
- **Function**: Runs dev server for another-project-example package
- **Usage**: `npm run another-project`
- **Port**: 3001
- **Features**: Hot reload, development server

### Build Scripts for Individual Packages

#### `npm run build:shared`
- **Purpose**: Builds the shared UI components library
- **Function**: Creates production build for shared-components package
- **Usage**: `npm run build:shared`
- **Output**: Dist folder with compiled components and types

#### `npm run build:task-management`
- **Purpose**: Builds the task management application
- **Function**: Creates production build for task-management package
- **Usage**: `npm run build:task-management`
- **Output**: Optimized bundle with CSS and JS files

#### `npm run build:another-project`
- **Purpose**: Builds the example project showcase
- **Function**: Creates production build for another-project-example package
- **Usage**: `npm run build:another-project`
- **Output**: Dist folder with compiled application

### Deployment Scripts

#### `npm run deploy:task-management`
- **Purpose**: Deploys the task management application to GitHub Pages
- **Function**: Builds task-management and deploys to `/task-management` sub-path
- **Usage**: `npm run deploy:task-management`
- **URL**: https://hszeng.github.io/react-boilerplate/task-management
- **Process**: 
  1. Builds task-management application
  2. Deploys to gh-pages branch under `/task-management` directory
  3. Uses `--no-history` flag for clean deployment

#### `npm run deploy:storybook`
- **Purpose**: Deploys the Storybook documentation to GitHub Pages
- **Function**: Builds shared-components and Storybook, then deploys to `/storybook` sub-path
- **Usage**: `npm run deploy:storybook`
- **URL**: https://hszeng.github.io/react-boilerplate/storybook
- **Process**:
  1. Builds shared-components library
  2. Builds Storybook static files
  3. Deploys to gh-pages branch under `/storybook` directory
  4. Uses `--no-history` flag for clean deployment

#### `npm run deploy:all`
- **Purpose**: Deploys both task-management and Storybook to GitHub Pages
- **Function**: Runs both deployment scripts sequentially
- **Usage**: `npm run deploy:all`
- **Process**:
  1. Deploys task-management to `/task-management`
  2. Deploys Storybook to `/storybook`
- **Note**: This is the recommended command for deploying both applications

### Storybook Scripts

#### `npm run storybook`
- **Purpose**: Starts Storybook development server
- **Function**: Runs Storybook dev server for shared-components
- **Usage**: `npm run storybook`
- **Port**: 6006
- **Features**: Hot reload, component documentation

#### `npm run build-storybook`
- **Purpose**: Builds Storybook static files
- **Function**: Creates production build of Storybook documentation
- **Usage**: `npm run build-storybook`
- **Output**: `storybook-static` folder with static files
- **Note**: Used internally by deployment scripts

### Server and API Scripts

#### `npm run start:all`
- **Purpose**: Starts all services simultaneously
- **Function**: Runs the start-all.js script to launch API server, task management app, and storybook
- **Usage**: `npm run start:all`
- **Services Started**:
  - Task Management API: http://localhost:5001
  - Task Management App: http://localhost:3000
  - Storybook: http://localhost:6006
- **Note**: Press Ctrl+C to stop all services

#### `npm run api:server`
- **Purpose**: Starts the task management API server
- **Function**: Runs the Express server for task-management package
- **Usage**: `npm run api:server`
- **Port**: 5001
- **Endpoints**: RESTful API for task management

### Utility Scripts

#### `npm run check-node`
- **Purpose**: Manually checks Node.js version compatibility
- **Function**: Runs the Node.js version check script
- **Usage**: `npm run check-node`
- **Output**: Confirms Node.js version meets requirements (>=20.0.0)

## Package-Specific Scripts

### Task Management Package Scripts

The task-management package has additional scripts available:

```bash
# Development
npm run dev --workspace=packages/task-management

# Build
npm run build --workspace=packages/task-management

# E2E Testing
npm run test:e2e --workspace=packages/task-management
npm run test:e2e:ui --workspace=packages/task-management
npm run test:e2e:headed --workspace=packages/task-management
npm run test:e2e:debug --workspace=packages/task-management
npm run test:e2e:report --workspace=packages/task-management

# Linting
npm run lint --workspace=packages/task-management
npm run lint:fix --workspace=packages/task-management

# Server
npm run server --workspace=packages/task-management
npm run start --workspace=packages/task-management
```

### Shared Components Package Scripts

The shared-components package has these scripts:

```bash
# Development
npm run dev --workspace=packages/shared-components

# Build
npm run build --workspace=packages/shared-components

# Testing
npm run test --workspace=packages/shared-components

# Linting
npm run lint --workspace=packages/shared-components
npm run lint:fix --workspace=packages/shared-components
```

## Common Workflows

### Development Workflow

1. **Start development environment**:
   ```bash
   npm run start:all
   ```

2. **Or start individual services**:
   ```bash
   npm run api:server        # Start API server
   npm run task-management   # Start task management app
   ```

### Testing Workflow

1. **Run all tests**:
   ```bash
   npm run test
   ```

2. **Run E2E tests**:
   ```bash
   npm run test:e2e --workspace=packages/task-management
   ```

3. **Check code quality**:
   ```bash
   npm run lint
   npm run format:check
   ```

### Build Workflow

1. **Build all packages**:
   ```bash
   npm run build
   ```

2. **Build specific package**:
   ```bash
   npm run build:shared
   npm run build:task-management
   npm run build:another-project
   ```

### Code Quality Workflow

1. **Fix formatting**:
   ```bash
   npm run format
   ```

2. **Fix linting issues**:
   ```bash
   npm run lint:fix
   ```

3. **Verify everything**:
   ```bash
   npm run format:check
   npm run lint
   ```

## Environment Requirements

- **Node.js**: >= 20.0.0
- **npm**: >= 9.0.0
- **Operating System**: macOS, Linux, Windows

## Troubleshooting

### Common Issues

1. **Node.js version error**: Run `npm run check-node` to verify version
2. **Port conflicts**: Check if ports 3000, 3001, 5001, 6006 are available
3. **Build failures**: Ensure all dependencies are installed with `npm install`
4. **Test failures**: Make sure API server is running for E2E tests

### Getting Help

- Check individual package README files for specific instructions
- Review error messages in terminal output
- Ensure all dependencies are properly installed
- Verify Node.js version compatibility

## Contributing

When contributing to this workspace:

1. Follow the established code formatting standards
2. Run tests before submitting changes
3. Ensure linting passes
4. Update documentation as needed
5. Test changes across all packages

This workspace is designed to be a comprehensive React development environment with shared components, multiple applications, and robust testing infrastructure.
