const axios = require('axios');
 const httpStatus = require('http-status-codes');
 
 const services = {
   personal: process.env.PERSONAL_MS_URL || 'http://personal-ms:3001',
   vacaciones: process.env.VACACIONES_MS_URL || 'http://vacaciones-ms:3002',
   contratos: process.env.CONTRATOS_MS_URL || 'http://contratos-ms:3003',
   pagos: process.env.PAGOS_MS_URL || 'http://pagos-ms:3004'
 };
 
 const proxyRequest = async (service, req, res) => {
   try {
     const url = `${services[service]}${req.originalUrl}`;
     const config = {
       method: req.method.toLowerCase(),
       url,
       headers: { 
         ...req.headers,
         'x-original-uri': req.originalUrl,
         'x-user-id': req.user?.id || null
       },
       params: req.query,
       data: req.body
     };
 
     const response = await axios(config);
     res.status(response.status).json(response.data);
   } catch (error) {
     const status = error.response?.status || httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
     const message = error.response?.data?.error || 'Error en el servidor del microservicio';
     res.status(status).json({ error: message });
   }
 };
 
 module.exports = {
   proxyToPersonal: (req, res) => proxyRequest('personal', req, res),
   proxyToVacaciones: (req, res) => proxyRequest('vacaciones', req, res),
   proxyToContratos: (req, res) => proxyRequest('contratos', req, res),
   proxyToPagos: (req, res) => proxyRequest('pagos', req, res),
 };