// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './pages/home.css'; // también puedes mover este import a Home.jsx si prefieres

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
