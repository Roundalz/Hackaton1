// microservicios/[nombre-ms]/src/config/db.js
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'postgres', // Nombre del servicio en docker-compose
  database: process.env.DB_NAME || 'arca_gestor',
  password: process.env.DB_PASSWORD || 'admin',
  port: process.env.DB_PORT || 5432,
});

// Verificación de conexión
pool.query('SELECT NOW()')
  .then(() => console.log('✅ Conectado a PostgreSQL correctamente'))
  .catch(err => {
    console.error('❌ Error de conexión a PostgreSQL:', err.message);
    process.exit(1); // Detiene el servicio si no hay conexión
  });

export default pool;