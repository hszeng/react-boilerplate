#!/bin/bash

echo "🚀 Starting deployment of Task Management to GitHub Pages..."

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script in the task-management directory"
    exit 1
fi

# Check homepage configuration
if ! grep -q '"homepage"' package.json; then
    echo "❌ Error: Please configure the homepage field in package.json"
    echo "Example: \"homepage\": \"https://your-username.github.io/forsyth-barr/task-management\""
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed: dist directory does not exist"
    exit 1
fi

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed!"
echo "📝 Please make sure to enable Pages functionality in GitHub repository settings"
echo "🔗 Access URL: $(grep -o '"homepage": "[^"]*"' package.json | cut -d'"' -f4)"
