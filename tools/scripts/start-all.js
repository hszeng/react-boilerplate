#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting all projects...\n');

// Start API server
console.log('📡 Starting Task Management API server...');
const apiServer = spawn('node', ['server.js'], {
  cwd: path.join(__dirname, '../../packages/task-management'),
  stdio: 'inherit',
  shell: true,
});

// Wait a moment for API server to start
setTimeout(() => {
  console.log('🌐 Starting Task Management application...');
  const taskManagement = spawn('npm', ['run', 'dev'], {
    cwd: path.join(__dirname, '../../packages/task-management'),
    stdio: 'inherit',
    shell: true,
  });

  // Start Storybook
  console.log('📚 Starting Storybook...');
  const storybook = spawn('npm', ['run', 'storybook'], {
    cwd: path.join(__dirname, '../../packages/shared-components'),
    stdio: 'inherit',
    shell: true,
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down all processes...');
    apiServer.kill();
    taskManagement.kill();
    storybook.kill();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down all processes...');
    apiServer.kill();
    taskManagement.kill();
    storybook.kill();
    process.exit(0);
  });
}, 2000);

console.log('✅ All services starting...');
console.log('📊 Task Management API: http://localhost:5001');
console.log('📱 Task Management App: http://localhost:3000');
console.log('📚 Storybook: http://localhost:6006');
console.log('\nPress Ctrl+C to stop all services');
