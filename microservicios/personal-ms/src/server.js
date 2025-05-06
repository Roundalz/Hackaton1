import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/db.js';
import funcionarioRoutes from './routes/funcionarioRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/funcionarios', funcionarioRoutes);

const PORT = process.env.PORT || 3000;
sequelize.authenticate()
  .then(() => console.log('✅ DB conectada'))
  .then(() => app.listen(PORT, () => console.log(`⚡️ Servidor en puerto ${PORT}`)))
  .catch(err => console.error('❌ No se conectó a la DB:', err));
