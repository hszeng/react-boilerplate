# Task Management - GitHub Pages Deployment Guide

## Project Overview

This is a pure frontend task management application that uses localStorage for data storage and can be deployed to GitHub Pages.

## Major Changes

### 1. Data Storage

- Changed from API calls to localStorage storage
- Maintained the same API interface to ensure code compatibility
- Included default sample task data

### 2. Build Configuration

- Added GitHub Pages publicPath configuration
- Configured correct homepage path
- Added gh-pages deployment script

### 3. Routing Support

- Added 404.html for client-side routing support
- Configured historyApiFallback

## Deployment Steps

### 1. Modify homepage path

Update the homepage field in `package.json`:

```json
{
  "homepage": "https://your-username.github.io/forsyth-barr/task-management"
}
```

### 2. Build the project

```bash
npm run build
```

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

### 4. Configure GitHub Pages

1. Go to GitHub repository settings
2. Find Pages settings
3. Select "Deploy from a branch"
4. Choose "gh-pages" branch
5. Save settings

## Local Development

### Start development server

```bash
npm run dev
```

### Build production version

```bash
npm run build
```

### Preview production version

```bash
npx serve dist
```

## Features

- ✅ Task creation, editing, deletion
- ✅ Task status management
- ✅ Priority settings
- ✅ Due date settings
- ✅ Task search and filtering
- ✅ Responsive design
- ✅ Local data persistence

## Tech Stack

- React 18
- TypeScript
- Webpack 5
- Styled Components
- LocalStorage API

## Important Notes

1. Data is stored locally in the browser, clearing browser data will lose tasks
2. Data between different browsers/devices will not sync
3. Application is fully offline-capable
4. No backend server required

## Troubleshooting

### Build failures

- Check Node.js version (requires >=20.0.0)
- Ensure all dependencies are installed: `npm install`

### Deployment failures

- Check if homepage path is correct
- Ensure GitHub repository is properly configured
- Check if gh-pages branch was created successfully

### Routing issues

- Ensure 404.html file exists
- Check redirect rules in GitHub Pages settings
