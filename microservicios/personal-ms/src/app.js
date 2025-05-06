// microservicios/[nombre-ms]/src/app.js
import express from 'express';
import dotenv from 'dotenv';
import pool from './config/db.js'; // Importa la conexión a la BD

dotenv.config();

const app = express();

// Health Check (solo verifica conexión a BD)
app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).json({ 
      status: 'OK',
      message: 'Conexión a PostgreSQL activa',
      service: '[nombre-ms]' // Cambiar por "personal-ms", "vacaciones-ms", etc.
    });
  } catch (err) {
    res.status(500).json({ 
      status: 'ERROR',
      error: 'Fallo en la conexión a PostgreSQL',
      details: err.message 
    });
  }
});

const PORT = process.env.PORT || 3000; // Usar 3001, 3002, etc. según el microservicio
app.listen(PORT, () => {
  console.log(`🟢 Microservicio [nombre-ms] escuchando en http://localhost:${PORT}`);
});