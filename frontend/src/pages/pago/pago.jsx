import React, { useState } from 'react';

// Componente funcional con JSX
const pago = ({ tituloInicial }) => {
  // Estado con useState
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');
  const [activo, setActivo] = useState(false);

  // Manejador de eventos
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const manejarCambioTexto = (evento) => {
    setTexto(evento.target.value);
  };

  const alternarActivo = () => {
    setActivo(!activo);
  };

  // Estilos en línea como objeto
  const estilos = {
    contenedor: {
      maxWidth: '500px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: activo ? '#f0f8ff' : '#fff'
    },
    boton: {
      padding: '8px 16px',
      margin: '5px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    input: {
      padding: '8px',
      margin: '10px 0',
      width: '100%',
      boxSizing: 'border-box'
    }
  };

  // Renderizado con JSX
  return (
    <div style={estilos.contenedor}>
      <h1>{tituloInicial || 'Componente React Básico'}</h1>
      
      <p>Contador: {contador}</p>
      <button 
        style={estilos.boton} 
        onClick={incrementarContador}
      >
        Incrementar
      </button>
      
      <div>
        <input
          type="text"
          value={texto}
          onChange={manejarCambioTexto}
          placeholder="Escribe algo..."
          style={estilos.input}
        />
        <p>Texto ingresado: {texto}</p>
      </div>
      
      <button 
        style={{ 
          ...estilos.boton, 
          backgroundColor: activo ? '#f44336' : '#2196F3' 
        }}
        onClick={alternarActivo}
      >
        {activo ? 'Desactivar' : 'Activar'}
      </button>
      
      {activo && <p>¡Estoy activo!</p>}
      
      <ListaSimple items={['React', 'JSX', 'Hooks', 'Estado']} />
    </div>
  );
};

// Componente hijo que recibe props
const ListaSimple = ({ items }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item, index) => (
        <li key={index} style={{ padding: '5px 0' }}>
          {index + 1}. {item}
        </li>
      ))}
    </ul>
  );
};

export default pago;