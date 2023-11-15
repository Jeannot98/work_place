import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProjectsProvider from './context/ProjectsContext.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ProjectsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProjectsProvider>
);
