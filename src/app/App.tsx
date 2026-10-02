import { TIPOS } from '../dominio/tipos/tipo';

export function App() {
  return (
    <main className="pagina-inicial">
      <section className="panel-inicial">
        <p className="etiqueta">Guatemala 1.0</p>
        <h1>Atlas Rivals</h1>
        <p>
          Núcleo técnico iniciado con React, TypeScript y Vite.
        </p>
        <p className="estado">
          Tipos cargados en el motor: <strong>{TIPOS.length}</strong>
        </p>
      </section>
    </main>
  );
}
