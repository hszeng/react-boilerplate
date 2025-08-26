# 🚀 Multi-App GitHub Pages Deployment Guide

This guide covers deploying both the Task Management application and Storybook to GitHub Pages with different sub-paths in a monorepo structure.

## 📋 Overview

This repository contains multiple applications that need to be deployed to different sub-paths on GitHub Pages:

- **Task Management**: `https://yourusername.github.io/repo-name/task-management/`
- **Storybook**: `https://yourusername.github.io/repo-name/storybook/`

## 🏗️ Prerequisites

- Node.js 20.0.0 or higher
- npm 9.0.0 or higher
- Git repository access
- GitHub account with repository access
- `gh-pages` package installed

## 📁 Repository Structure

```
react-boilerplate/
├── packages/
│   ├── task-management/     # Task Management App
│   │   ├── dist/           # Build output
│   │   └── package.json    # With homepage config
│   └── shared-components/  # UI Components
│       ├── storybook-static/ # Storybook build output
│       └── package.json    # With homepage config
└── docs/
    └── MULTI-APP-DEPLOYMENT.md # This guide
```

## 🔧 Configuration Setup

### 1. Task Management Configuration

In `packages/task-management/package.json`:

```json
{
  "name": "@forsyth-barr/task-manager",
  "homepage": "https://yourusername.github.io/repo-name/task-management",
  "scripts": {
    "build": "webpack --mode production",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 2. Storybook Configuration

In `packages/shared-components/package.json`:

```json
{
  "name": "@forsyth-barr/ui-components",
  "homepage": "https://yourusername.github.io/repo-name/storybook",
  "scripts": {
    "build-storybook": "storybook build",
    "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"
  }
}
```

### 3. Webpack Configuration for Task Management

In `packages/task-management/webpack.config.js`:

```javascript
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    // ... other config
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      clean: true,
      publicPath: '', // Empty string for relative paths
    },
    // ... rest of config
  };
};
```

## 🚀 Deployment Process

### Step 1: Deploy Task Management

```bash
# Navigate to task-management package
cd packages/task-management

# Build and deploy
npm run deploy
```

This will:
- Build the Task Management app
- Create/update the `gh-pages` branch
- Push the build files to the `task-management/` subdirectory

### Step 2: Deploy Storybook

```bash
# Navigate to shared-components package
cd packages/shared-components

# Build and deploy Storybook
npm run deploy-storybook
```

This will:
- Build Storybook static files
- Push the build files to the `storybook/` subdirectory

### Step 3: Manual Deployment (Alternative Method)

If you prefer manual control over the deployment process:

```bash
# Clone the gh-pages branch
git clone -b gh-pages https://github.com/yourusername/repo-name.git gh-pages-temp

# Copy Task Management files
cp -r packages/task-management/dist/* gh-pages-temp/task-management/

# Copy Storybook files
cp -r packages/shared-components/storybook-static/* gh-pages-temp/storybook/

# Commit and push
cd gh-pages-temp
git add .
git commit -m "Update Task Management and Storybook deployments"
git push origin gh-pages

# Clean up
cd ..
rm -rf gh-pages-temp
```

## ⚙️ GitHub Pages Configuration

### 1. Enable GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** > **Pages**
3. Set **Source** to "Deploy from a branch"
4. Select **gh-pages** branch
5. Set **Folder** to `/ (root)`
6. Click **Save**

### 2. Branch Structure

After deployment, your `gh-pages` branch should look like:

```
gh-pages/
├── task-management/
│   ├── index.html
│   ├── main.js
│   └── main.css
├── storybook/
│   ├── index.html
│   ├── iframe.html
│   └── ... (other Storybook files)
└── 404.html (if needed for routing)
```

## 🔍 Verification

### 1. Check Task Management

Visit: `https://yourusername.github.io/repo-name/task-management/`

Expected behavior:
- ✅ Application loads correctly
- ✅ All assets (JS, CSS) load without 404 errors
- ✅ Task management functionality works
- ✅ LocalStorage data persists

### 2. Check Storybook

Visit: `https://yourusername.github.io/repo-name/storybook/`

Expected behavior:
- ✅ Storybook loads correctly
- ✅ All component stories are accessible
- ✅ Interactive components work
- ✅ Navigation between stories works

## 🛠️ Troubleshooting

### Common Issues

#### 1. 404 Errors for Assets

**Problem**: JavaScript or CSS files return 404 errors

**Solution**: 
- Check `publicPath` configuration in webpack config
- Ensure `homepage` field is correctly set in package.json
- Verify files are deployed to correct subdirectories

#### 2. Routing Issues

**Problem**: Direct URL access returns 404

**Solution**:
- For Task Management: Ensure `historyApiFallback: true` in webpack devServer config
- For Storybook: Storybook handles routing internally

#### 3. Build Failures

**Problem**: Deployment fails during build

**Solution**:
```bash
# Check Node.js version
node --version  # Should be >= 20.0.0

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run lint
```

#### 4. Deployment Conflicts

**Problem**: One app overwrites the other

**Solution**:
- Use manual deployment method
- Deploy apps to separate subdirectories
- Verify gh-pages branch structure

### Debug Commands

```bash
# Check gh-pages branch structure
git clone -b gh-pages https://github.com/yourusername/repo-name.git temp
ls -la temp/
rm -rf temp

# Check build outputs
ls -la packages/task-management/dist/
ls -la packages/shared-components/storybook-static/

# Test local builds
cd packages/task-management && npm run build
cd ../shared-components && npm run build-storybook
```

## 🔄 Automated Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build Task Management
        run: |
          cd packages/task-management
          npm run build
      
      - name: Build Storybook
        run: |
          cd packages/shared-components
          npm run build-storybook
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./packages/task-management/dist
          destination_dir: ./task-management
      
      - name: Deploy Storybook
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./packages/shared-components/storybook-static
          destination_dir: ./storybook
```

## 📝 Best Practices

### 1. Version Management

- Use semantic versioning for releases
- Tag releases in Git for easy rollback
- Document breaking changes

### 2. Testing

- Test builds locally before deployment
- Verify all functionality after deployment
- Test on different browsers and devices

### 3. Monitoring

- Set up GitHub Pages status monitoring
- Monitor for 404 errors
- Track deployment success rates

### 4. Documentation

- Keep deployment guides updated
- Document any custom configurations
- Maintain troubleshooting guides

## 🎯 Quick Reference

### Deployment Commands

```bash
# Deploy Task Management
cd packages/task-management && npm run deploy

# Deploy Storybook
cd packages/shared-components && npm run deploy-storybook

# Deploy both (manual method)
./scripts/deploy-all.sh
```

### URLs

- Task Management: `https://yourusername.github.io/repo-name/task-management/`
- Storybook: `https://yourusername.github.io/repo-name/storybook/`

### Configuration Files

- Task Management: `packages/task-management/package.json`
- Storybook: `packages/shared-components/package.json`
- Webpack: `packages/task-management/webpack.config.js`

## 📞 Support

If you encounter issues:

1. Check this troubleshooting guide
2. Review GitHub Pages documentation
3. Check repository issues
4. Verify Node.js and npm versions
5. Test with a clean build

---

**Note**: This guide assumes you have the necessary permissions to deploy to GitHub Pages. Make sure your repository settings allow deployment from the gh-pages branch.
