// This file is part of the Glitch Matrix Nexus project.
// It serves as the entry point for the React application, rendering the main App component.

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
