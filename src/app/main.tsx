import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import '../interfaz/estilos/global.css';

const raiz = document.getElementById('root');

if (!raiz) {
  throw new Error('No se encontró el elemento raíz de la aplicación.');
}

createRoot(raiz).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
