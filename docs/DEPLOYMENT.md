# 🚀 Deployment Guide

This guide covers deploying the Forsyth Barr Task Manager to various platforms.

## 📋 Prerequisites

- Node.js 18.12.1 or higher
- npm 8.19.2 or higher
- Git repository access
- GitHub account (for GitHub Pages)

## 🏗️ Build Process

### 1. Install Dependencies

```bash
npm install
```

### 2. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### 3. Test Production Build

```bash
npx serve -s build
```

Visit `http://localhost:3000` to verify the build works correctly.

## 🌐 GitHub Pages Deployment

### 1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Configure package.json

Ensure your `package.json` has the correct homepage and scripts:

```json
{
  "homepage": "https://yourusername.github.io/forsyth-barr",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 3. Deploy

```bash
npm run deploy
```

This will:

- Build the project
- Create a `gh-pages` branch
- Push the build files to GitHub
- Deploy to GitHub Pages

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Set Source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Save the configuration

### 5. Custom Domain (Optional)

If you have a custom domain:

1. Add your domain to the `CNAME` file in the `public/` directory
2. Configure DNS settings
3. Update the `homepage` in `package.json`

## 🔄 Automated Deployment with GitHub Actions

### 1. Create Workflow File

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
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test -- --watchAll=false

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### 2. Configure Repository Secrets

- Go to repository Settings > Secrets and variables > Actions
- Add `GITHUB_TOKEN` if not already present

### 3. Push to Main Branch

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

The workflow will automatically deploy on each push to main.

## 🐳 Docker Deployment

### 1. Create Dockerfile

Create `Dockerfile` in the root directory:

```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built app
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### 2. Create nginx.conf

Create `nginx.conf`:

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        location /static/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

### 3. Build and Run Docker Image

```bash
# Build image
docker build -t forsyth-barr-task-manager .

# Run container
docker run -p 80:80 forsyth-barr-task-manager
```

## ☁️ Cloud Platform Deployment

### 1. Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel --prod`

### 2. Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### 3. AWS S3 + CloudFront

1. Upload build files to S3 bucket
2. Configure CloudFront distribution
3. Set up custom domain and SSL

### 4. Azure Static Web Apps

1. Connect GitHub repository
2. Configure build settings
3. Deploy automatically on push

## 🔧 Environment Configuration

### 1. Environment Variables

Create `.env` files for different environments:

```bash
# .env.development
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENVIRONMENT=development

# .env.production
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_ENVIRONMENT=production
```

### 2. Build-time Configuration

```bash
# Set environment variables during build
REACT_APP_API_URL=https://api.yourdomain.com npm run build
```

## 📱 Progressive Web App (PWA)

### 1. Enable PWA Features

The project includes PWA capabilities:

- Service Worker for offline support
- Web App Manifest for app-like experience
- Install prompts for mobile devices

### 2. Customize PWA

Update `public/manifest.json`:

```json
{
  "short_name": "Task Manager",
  "name": "Forsyth Barr Task Manager",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

## 🔍 Post-Deployment Verification

### 1. Functionality Tests

- [ ] Task creation works
- [ ] Task editing works
- [ ] Task deletion works
- [ ] Filtering works
- [ ] Sorting works
- [ ] Responsive design works

### 2. Performance Tests

- [ ] Page load time < 3 seconds
- [ ] Task operations < 1 second
- [ ] Smooth animations
- [ ] No console errors

### 3. Accessibility Tests

- [ ] Screen reader compatibility
- [ ] Keyboard navigation
- [ ] Color contrast compliance
- [ ] ARIA labels present

## 🚨 Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Deployment Failures

```bash
# Check build output
npm run build

# Verify gh-pages branch
git branch -a

# Manual deployment
npx gh-pages -d build
```

#### Performance Issues

- Check bundle size with `npm run build`
- Analyze with `npm run analyze` (if configured)
- Monitor Redux DevTools for state issues

### Debug Commands

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check build output
ls -la build/

# Check deployment status
git log --oneline -10
```

## 📊 Monitoring and Analytics

### 1. Performance Monitoring

- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Track bundle size over time

### 2. Error Tracking

- Implement error boundaries
- Log errors to external service
- Monitor user experience

### 3. Analytics

- Track user interactions
- Monitor task operations
- Analyze user behavior patterns

## 🔄 Continuous Deployment

### 1. Automated Testing

```yaml
# Add to GitHub Actions workflow
- name: Run tests
  run: npm test -- --watchAll=false --coverage

- name: Run linting
  run: npm run lint
```

### 2. Quality Gates

- All tests must pass
- No linting errors
- Build must succeed
- Performance benchmarks met

### 3. Rollback Strategy

- Keep previous deployment
- Quick rollback capability
- Feature flags for gradual rollout

## 📚 Additional Resources

- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [GitHub Pages Documentation](https://pages.github.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

---

**Happy Deploying! 🚀**
