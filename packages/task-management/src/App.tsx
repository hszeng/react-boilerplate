import React from 'react';
import TaskManager from './components/TaskManager';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <TaskManager />
      </div>
    </ThemeProvider>
  );
};

export default App;
