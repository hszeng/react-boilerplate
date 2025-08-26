# GitHub Actions CI/CD Pipeline

This document describes the automated CI/CD pipeline that runs tests and deploys the applications to GitHub Pages.

## Overview

The GitHub Actions workflow automatically:
1. Runs all tests (unit tests + E2E tests)
2. Builds all applications
3. Deploys to GitHub Pages (only on main/master branch)

## Workflow File

The workflow is defined in `.github/workflows/deploy.yml`

## Triggers

The workflow runs on:
- **Push** to `main` or `master` branch
- **Pull Request** to `main` or `master` branch

## Jobs

### 1. Test Job

Runs on every push and pull request:

#### Steps:
1. **Checkout code** - Gets the latest code
2. **Setup Node.js** - Installs Node.js 20.x with npm caching
3. **Install dependencies** - Runs `npm ci` for fast, reliable installs
4. **Run linting** - Executes ESLint across all packages
5. **Run shared-components unit tests** - Executes Jest tests
6. **Build shared-components** - Creates production build
7. **Build task-management** - Creates production build
8. **Install Playwright browsers** - Installs browser dependencies
9. **Start server and run E2E tests** - Runs Playwright tests against task-management
10. **Upload test results** - Saves test reports as artifacts

#### Test Coverage:
- **Unit Tests**: 164 tests across 6 test suites for shared-components
- **E2E Tests**: UI tests for task-management application
- **Linting**: ESLint checks across all packages

### 2. Deploy Job

Runs only on `main` or `master` branch after tests pass:

#### Steps:
1. **Checkout code** - Gets the latest code
2. **Setup Node.js** - Installs Node.js 20.x
3. **Install dependencies** - Runs `npm ci`
4. **Build shared-components** - Creates production build
5. **Build Storybook** - Creates Storybook static files
6. **Build task-management** - Creates production build
7. **Configure Git** - Sets up Git user for deployment
8. **Deploy task-management** - Deploys to `/task-management` sub-path
9. **Deploy Storybook** - Deploys to `/storybook` sub-path
10. **Comment deployment URLs** - Adds comment to PR with deployment links

## Deployment URLs

After successful deployment:
- **Task Management**: https://hszeng.github.io/react-boilerplate/task-management/
- **Storybook**: https://hszeng.github.io/react-boilerplate/storybook/

## Artifacts

The workflow creates several artifacts:
- **playwright-report**: HTML test report (30 days retention)
- **playwright-screenshots**: Screenshots from failed tests (30 days retention)

## Environment Variables

The workflow uses:
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions
- `CI`: Set to `true` for CI environment detection

## Failure Handling

### Test Failures
- If any test fails, the deploy job is skipped
- Test artifacts are uploaded for debugging
- Screenshots are captured for failed E2E tests

### Build Failures
- If any build step fails, the entire workflow fails
- No deployment occurs

### Deployment Failures
- If deployment fails, the workflow fails
- Previous deployments remain intact

## Manual Triggers

You can manually trigger the workflow:
1. Go to the "Actions" tab in GitHub
2. Select "Test and Deploy to GitHub Pages"
3. Click "Run workflow"
4. Select the branch to run on

## Monitoring

### Check Workflow Status
1. Go to the "Actions" tab in GitHub
2. View the latest workflow run
3. Click on the job to see detailed logs

### View Test Results
1. Go to the workflow run
2. Click on "test" job
3. Download artifacts to view test reports

### View Deployment
1. Check the deployment URLs after successful deployment
2. Monitor GitHub Pages settings for deployment status

## Troubleshooting

### Common Issues

#### Tests Failing
- Check the test logs in the Actions tab
- Download test artifacts for detailed reports
- Verify that all dependencies are properly installed

#### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are available
- Check for TypeScript compilation errors

#### Deployment Failures
- Verify GitHub Pages is enabled in repository settings
- Check that the repository has proper permissions
- Ensure the gh-pages branch exists

#### E2E Test Timeouts
- The workflow waits 15 seconds for the server to start
- If tests timeout, check server startup logs
- Verify the server is accessible on localhost:3000

### Debugging Steps

1. **Check workflow logs**: Go to Actions tab and view detailed logs
2. **Download artifacts**: Get test reports and screenshots
3. **Run locally**: Test the same commands locally
4. **Check dependencies**: Verify all packages are properly installed

## Security

- Uses `GITHUB_TOKEN` for authentication
- No sensitive data is exposed in logs
- Artifacts are automatically cleaned up after 30 days
- Only deploys from main/master branch

## Performance

- Uses npm caching for faster installs
- Runs tests in parallel where possible
- Uses `npm ci` for reliable dependency installation
- Optimized for monorepo structure
