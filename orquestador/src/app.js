import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';

// Configuración de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// URLs de los microservicios (usar variables de docker-compose)
const MICROSERVICES = {
  PERSONAL: process.env.PERSONAL_MS_URL || 'http://personal-ms:3001',
  VACACIONES: process.env.VACACIONES_MS_URL || 'http://vacaciones-ms:3002',
  CONTRATOS: process.env.CONTRATOS_MS_URL || 'http://contratos-ms:3003',
  PAGOS: process.env.PAGOS_MS_URL || 'http://pagos-ms:3004'
};

// Health check integrado
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'orquestador',
    microservicios: Object.keys(MICROSERVICES)
  });
});

// Configuración de proxies
app.use('/api/personal', createProxyMiddleware({
  target: MICROSERVICES.PERSONAL,
  changeOrigin: true,
  pathRewrite: { '^/api/personal': '' }
}));

app.use('/api/vacaciones', createProxyMiddleware({
  target: MICROSERVICES.VACACIONES,
  changeOrigin: true,
  pathRewrite: { '^/api/vacaciones': '' }
}));

app.use('/api/contratos', createProxyMiddleware({
  target: MICROSERVICES.CONTRATOS,
  changeOrigin: true,
  pathRewrite: { '^/api/contratos': '' }
}));

app.use('/api/pagos', createProxyMiddleware({
  target: MICROSERVICES.PAGOS,
  changeOrigin: true,
  pathRewrite: { '^/api/pagos': '' }
}));

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Orquestador ARCA - Gestión Humana',
    endpoints: Object.keys(MICROSERVICES).map(ms => `/api/${ms.toLowerCase()}`)
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error en orquestador:', err);
  res.status(500).json({ error: 'Error interno del orquestador' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎯 Orquestador corriendo en http://localhost:${PORT}`);
});