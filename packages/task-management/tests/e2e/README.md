# Playwright End-to-End Tests

This directory contains simple end-to-end tests for the Task Management application using Playwright.

## Test Files

- **`task-management.spec.ts`** - Main application functionality tests (UI tests)

## Running Tests

### Prerequisites

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

3. Start the application:
   ```bash
   npm run start
   ```

### Test Commands

```bash
# Run all tests
npm run test:e2e

# Run tests with UI mode (interactive)
npm run test:e2e:ui

# Run tests in headed mode (visible browser)
npm run test:e2e:headed

# Run tests in debug mode
npm run test:e2e:debug

# Show test report
npm run test:e2e:report
```

### Running Specific Tests

```bash
# Run specific test file
npx playwright test task-management.spec.ts

# Run tests matching a pattern
npx playwright test --grep "should create"

# Run tests in specific browser
npx playwright test --project=chromium
```

## Test Configuration

The tests are configured in `playwright.config.ts` with:

- **Multiple browsers**: Chrome, Firefox, Safari, and mobile viewports
- **Auto-start server**: Automatically starts the application before tests
- **Screenshots and videos**: Captured on test failures
- **Parallel execution**: Tests run in parallel for faster execution

## Test Coverage

### Application Tests (`task-management.spec.ts`)

1. **Display Interface** - Verifies the main interface loads correctly
2. **Create Task** - Tests task creation functionality
3. **Edit Task** - Tests task editing functionality
4. **Delete Task** - Tests task deletion functionality
5. **Filter Tasks** - Tests status filtering functionality



## Browser Support

Tests run on multiple browsers and devices:

- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: iPhone 12, Pixel 5

## Debugging Tests

### Using Debug Mode

```bash
npm run test:e2e:debug
```

This opens Playwright Inspector for step-by-step debugging.

### Using UI Mode

```bash
npm run test:e2e:ui
```

This provides an interactive interface for running and debugging tests.

### Viewing Reports

```bash
npm run test:e2e:report
```

Opens the HTML test report with detailed results, screenshots, and videos.

## Best Practices

1. **Use semantic selectors** (like `getByRole`, `getByText`) when possible
2. **Keep tests simple** and focused on core functionality
3. **Clean up after tests** to avoid state pollution
4. **Use meaningful test names** that describe the scenario
5. **Add appropriate timeouts** for network operations
