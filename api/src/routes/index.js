const { Router } = require('express');
// Importar todos los routers;
const allPaises = require('./paises.js');
const allActividades = require('./actividades.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', allPaises)
router.use('/', allActividades)


module.exports = router;
