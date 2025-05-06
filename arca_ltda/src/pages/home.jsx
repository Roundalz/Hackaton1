import React from 'react';

const Home = () => {
  return (
    <div className="rrhh-home-container">
      <header className="rrhh-home-header">
        <h1>Gestión Humana - ARCA LTDA.</h1>
        <p>KATA ARQUITECTÓNICO – PRIMERA HACKATON (05/05/2025)</p>
      </header>

      <section className="rrhh-home-content">
        <h2>Bienvenido al Módulo de Recursos Humanos</h2>
        <p>
          Este sistema forma parte de la propuesta MVP desarrollada por el área de Tecnología
          para demostrar la capacidad interna de construir un módulo completo y funcional
          de gestión de personal, alineado con la arquitectura de microservicios del sistema Core.
        </p>
        <p>
          ¡Gracias por confiar en nosotros para seguir creciendo juntos!
        </p>
        <button className="rrhh-home-button">Ingresar al sistema</button>
      </section>

      <footer className="rrhh-home-footer">
        <p>&copy; 2025 ARCA LTDA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
